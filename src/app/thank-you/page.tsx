'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Sparkles } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="mx-auto h-24 w-24 text-green-600"
          >
            <CheckCircle className="h-full w-full" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to StackSuck!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Thank you for signing up. We're excited to have you on board!
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex justify-center space-x-2 text-green-600"
            >
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-medium">
                Check your email to get started
              </span>
              <Sparkles className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-10"
            >
              <Link
                href="/"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                ← Back to home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 