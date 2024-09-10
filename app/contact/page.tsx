'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, FileText, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from '@/components/Header'

const Contact = () => {
  const ctaButtons = [
    { icon: <MessageSquare className="w-5 h-5 mr-2" />, text: 'Live Chat', href: '#' },
    { icon: <FileText className="w-5 h-5 mr-2" />, text: 'Documentation', href: '#' },
    { icon: <HelpCircle className="w-5 h-5 mr-2" />, text: 'FAQs', href: '#' },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.h1 
          className="text-4xl font-bold text-blue-700 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">We&apos;re Here to Help</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-600 mb-2">Name</label>
              <Input type="text" id="name" name="name" className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-600 mb-2">Email</label>
              <Input type="email" id="email" name="email" className="w-full" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-600 mb-2">Subject</label>
              <Input type="text" id="subject" name="subject" className="w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-600 mb-2">Message</label>
              <Textarea id="message" name="message" rows={6} className="w-full" />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
          </form>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Other Ways to Reach Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ctaButtons.map((button, index) => (
                <Button key={index} variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                  <a href={button.href} className="flex items-center justify-center">
                    {button.icon}
                    {button.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact