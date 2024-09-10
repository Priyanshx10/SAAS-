'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MessageSquare, Menu, X, LayoutDashboard, Zap, DollarSign, Mail } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  }

  const textColor = 'text-blue-700'
  const hoverTextColor = 'hover:text-blue-500'

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <MessageSquare className={`h-8 w-8 ${textColor} group-hover:${hoverTextColor} transition-colors duration-300`} />
            </motion.div>
            <span className={`text-2xl font-bold ${textColor} group-hover:${hoverTextColor} transition-colors duration-300`}>ChatPDF</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <motion.div variants={linkVariants} whileHover="hover">
              <Button asChild variant="ghost" className={`${textColor} ${hoverTextColor} transition-colors duration-300`}>
                <Link href="/features" className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Features
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Button asChild variant="outline" className={`${textColor} ${hoverTextColor} hover:bg-blue-100 transition-colors duration-300`}>
                <Link href="/pricing" className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Pricing
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Button asChild variant="ghost" className={`${textColor} ${hoverTextColor} transition-colors duration-300`}>
                <Link href="/contact" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Button asChild variant="outline" className={`${textColor} ${hoverTextColor} hover:bg-blue-100 transition-colors duration-300`}>
                <Link href="/dashboard" className="flex items-center">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
            </motion.div>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
              {isMobileMenuOpen ? <X className={`h-6 w-6 ${textColor}`} /> : <Menu className={`h-6 w-6 ${textColor}`} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Button asChild variant="ghost" className={`${textColor} ${hoverTextColor} transition-colors duration-300 w-full justify-start`}>
                <Link href="/features" className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Features
                </Link>
              </Button>
              <Button asChild variant="outline" className={`${textColor} ${hoverTextColor} hover:bg-blue-100 transition-colors duration-300 w-full justify-start`}>
                <Link href="/pricing" className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Pricing
                </Link>
              </Button>
              <Button asChild variant="ghost" className={`${textColor} ${hoverTextColor} transition-colors duration-300 w-full justify-start`}>
                <Link href="/contact" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </Button>
              <Button asChild variant="outline" className={`${textColor} ${hoverTextColor} hover:bg-blue-100 transition-colors duration-300 w-full justify-start`}>
                <Link href="/dashboard" className="flex items-center">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10"
                  }
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header