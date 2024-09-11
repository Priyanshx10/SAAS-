'use client'

import { useState } from "react";

export enum StatusText {

  Uploading = 'Uploading Files',
  Uploaded = 'File Uploaded Successfully',
  Saving = 'Saving File to Database',
  Generating = 'Generating AI Embeddings, This will only take a few seconds...',
}

function useUpload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>( null);
}

export default useUpload