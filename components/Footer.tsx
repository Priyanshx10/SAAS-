'use client'

import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 w-full border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Beansh AI</h3>
            <p className="text-sm text-gray-300">Tired of the same old boring AI? We are too. That&apos;s why we created Beansh AI. Chat with PDFs like never before.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors duration-300">About</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Contact Us</h3>
            <p className="text-sm text-gray-300">Indore, India</p>
            <p className="text-sm text-gray-300">Email: priyanshyadav1012@gmail.com</p>
            <p className="text-sm text-gray-300">Phone: +9170000566395</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://x.com/Priyanshx10_" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Beansh AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
