'use client'

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { storage, db } from "@/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

export enum StatusText {
  UPLOADING = 'UPLOADING FILES',
  UPLOADED = 'FILE UPLOADED SUCCESSFULLY',
  SAVING = 'SAVING FILE TO DATABASE',
  GENERATING = 'GENERATING AI EMBEDDINGS, THIS WILL ONLY TAKE A FEW SECONDS...',
}

function useUpload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusText | null>(null);
  const { user } = useUser();
  const router = useRouter();

  const handleUpload = async (file: File) => {
    if(!file || !user) return;

    //FREE PRO LIMITATIONS
    
    const fileIdToUploadTo = uuidv4();

    const storageRef = ref(storage, 
      `users/${user.id}/files/${fileIdToUploadTo}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(percent);
      setStatus(StatusText.UPLOADING);
    }, (error) => {
      console.error("Error uploading file", error);
    }, async () => {
      setStatus(StatusText.UPLOADED);

      const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

      setStatus(StatusText.SAVING);
      await setDoc(doc(db, 'users', user.id, 'files', fileIdToUploadTo), {
        name: file.name,
        size: file.size,
        type: file.type,
        downloadUrl: downloadUrl,
        ref: uploadTask.snapshot.ref,
        createdAt: new Date(),
      });

      setStatus(StatusText.UPLOADED);
      //Generating AI embeddings

      setFileId(fileIdToUploadTo);
    });
  }

  return { progress, fileId, status, handleUpload };
}

export default useUpload;