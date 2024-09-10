'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { FileText, Zap, Headphones, Infinity, Clock, Rocket } from 'lucide-react'
import Header from '@/components/Header'

const Pricing = () => {
  const plans = [
    { 
      name: 'Basic', 
      price: '$9.99/mo', 
      features: [
        { text: '5 PDFs/month', icon: <FileText className="w-5 h-5 text-blue-700 mr-2" /> },
        { text: 'Basic chat support', icon: <Headphones className="w-5 h-5 text-blue-700 mr-2" /> },
        { text: 'Standard processing speed', icon: <Zap className="w-5 h-5 text-blue-700 mr-2" /> }
      ],
      color: 'blue',
      bgColor: 'bg-blue-300',
      buttonVariant: 'outline'
    },
    { 
      name: 'Pro', 
      price: '$19.99/mo', 
      features: [
        { text: '20 PDFs/month', icon: <FileText className="w-5 h-5 text-purple-700 mr-2" /> },
        { text: 'Priority chat support', icon: <Headphones className="w-5 h-5 text-purple-700 mr-2" /> },
        { text: 'Faster processing speed', icon: <Zap className="w-5 h-5 text-purple-700 mr-2" /> }
      ],
      color: 'purple',
      bgColor: 'bg-purple-300',
      buttonVariant: 'outline'
    },
    { 
      name: 'Enterprise', 
      price: 'Custom', 
      features: [
        { text: 'Unlimited PDFs', icon: <Infinity className="w-5 h-5 text-green-700 mr-2" /> },
        { text: '24/7 dedicated support', icon: <Clock className="w-5 h-5 text-green-700 mr-2" /> },
        { text: 'Fastest processing speed', icon: <Rocket className="w-5 h-5 text-green-700 mr-2" /> }
      ],
      color: 'green',
      bgColor: 'bg-green-300',
      buttonVariant: 'outline'
    },
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Perfect Plan
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`border-2 border-${plan.color}-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${plan.bgColor}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className={`text-3xl font-bold mb-4 text-${plan.color}-800`}>{plan.name}</h2>
              <p className={`text-4xl font-extrabold mb-6 text-${plan.color}-700`}>{plan.price}</p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-800">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.buttonVariant as "outline"}
                className={`w-full text-${plan.color}-700 border-${plan.color}-700 hover:bg-${plan.color}-100 transition-colors duration-300`}
              >
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Choose Plan'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing