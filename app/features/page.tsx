'use client'

import React from 'react'
import { MessageSquare, Zap, Shield, Search, FileText, Brain, Lock, Globe, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

const Features = () => {
  const featuresList = [
    { icon: <MessageSquare className="w-12 h-12 text-blue-500" />, title: 'Smart Chat', description: 'Engage in intelligent conversations with your PDFs' },
    { icon: <Zap className="w-12 h-12 text-yellow-500" />, title: 'Fast Processing', description: 'Lightning-fast PDF analysis and response generation' },
    { icon: <Shield className="w-12 h-12 text-green-500" />, title: 'Secure Storage', description: 'Your documents are encrypted and securely stored' },
    { icon: <Search className="w-12 h-12 text-purple-500" />, title: 'Advanced Search', description: 'Quickly find information across all your PDFs' },
    { icon: <FileText className="w-12 h-12 text-red-500" />, title: 'Multi-PDF Support', description: 'Chat with multiple PDFs simultaneously' },
    { icon: <Brain className="w-12 h-12 text-indigo-500" />, title: 'AI-Powered Insights', description: 'Get intelligent summaries and key points from your documents' },
    { icon: <Lock className="w-12 h-12 text-gray-500" />, title: 'Privacy First', description: 'Your data remains private and is never shared' },
    { icon: <Globe className="w-12 h-12 text-teal-500" />, title: 'Multi-Language Support', description: 'Chat with PDFs in various languages' },
    { icon: <Sparkles className="w-12 h-12 text-pink-500" />, title: 'Smart Formatting', description: 'Maintain original PDF formatting in chat responses' },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 pt-24">
        <motion.h1 
          className="text-5xl font-bold text-blue-700 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Powerful Features
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-blue-100">{feature.icon}</div>
              </div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">{feature.title}</h2>
              <p className="text-blue-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features