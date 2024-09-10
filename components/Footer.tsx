import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-blue-700 py-8 w-full border-t border-blue-200">
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Astro Nova Labs</h3>
            <p className="text-sm text-blue-600">Tired of the same old boring AI? We are too. That&apos;s why we created Astro Nova Labs. To chat with PDFs </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><Link href="/" className="hover:text-blue-500 transition-colors duration-300">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-blue-500 transition-colors duration-300">About</Link></li>
              <li className="mb-2"><Link href="/services" className="hover:text-blue-500 transition-colors duration-300">Services</Link></li>
              <li className="mb-2"><Link href="/contact" className="hover:text-blue-500 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Contact Us</h3>
            <p className="text-sm text-blue-600"> Indore, India</p>
            <p className="text-sm text-blue-600">Email: priyanshyadav1012@gmail.com</p>
            <p className="text-sm text-blue-600">Phone: +9170000566395</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://x.com/Priyanshx10_" className="text-blue-600 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter />
              </Link>
              <Link href="https://www.instagram.com/priyansh_10_/" className="text-blue-600 hover:text-blue-400 transition-colors duration-300">
                <FaInstagram />
              </Link>
              <Link href="https://www.linkedin.com/in/priyansh10/" className="text-blue-600 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-200 mt-8 pt-8 text-sm text-center text-blue-600">
          <p>&copy; {new Date().getFullYear()} Astro Nova Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer