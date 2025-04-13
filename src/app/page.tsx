'use client'

import Link from 'next/link'
import { ArrowRight, BarChart2, Lock, Users, Sparkles, CheckCircle } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { useState } from 'react'
import {  MotionDiv } from '@/utils'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
const features = [
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage your team with ease and flexibility',
    benefits: ['Unlimited team members', 'Role-based permissions', 'Team analytics']
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Get insights into your team\'s performance',
    benefits: ['Real-time dashboards', 'Custom reports', 'Export capabilities']
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade security for your peace of mind',
    benefits: ['End-to-end encryption', 'Two-factor authentication', 'Compliance reporting']
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'PickYourPlan has transformed how we manage our team subscriptions. The analytics are incredible!',
    avatar: '1'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager, Innovate Inc',
    content: 'The security features give us peace of mind, and the interface is intuitive for our entire team.',
    avatar: '2'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Team Lead, NextGen',
    content: 'We\'ve reduced our subscription costs by 30% while improving our team\'s productivity.',
    avatar: '3'
  }
]

export default function HomePage() {
  const { theme} = useTheme()
  const currentTheme = themes[theme]
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className={`relative min-h-screen ${currentTheme.background} transition-colors duration-300`}>
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-purple-900/10 pointer-events-none" />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative px-6 pt-28 lg:px-8" id="hero">
        <div className="mx-auto max-w-7xl py-20 sm:py-32 lg:py-40 flex flex-col lg:flex-row items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                New: Smart Analytics Dashboard 2.0
              </span>
            </MotionDiv>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Subscription <br />
              <span className="relative">
                Simplified
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7C50 5 100 3 150 3C200 3 250 5 297 7" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className={`mt-6 text-lg leading-8 ${currentTheme.subtext} max-w-2xl`}>
              Streamline your subscription management with PickYourPlan. The most powerful
              platform for managing team subscriptions, analytics, and security in one place.
            </p>
            
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              <Link
                href="/pricing"
                className="group relative overflow-hidden rounded-full w-full sm:w-auto px-8 py-4 text-base font-semibold bg-indigo-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-x-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              
              <Link
                href="/pricing"
                className={`group w-full sm:w-auto relative overflow-hidden rounded-full border border-indigo-300 dark:border-indigo-800 px-8 py-4 text-base font-semibold ${currentTheme.text} transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30`}
              >
                Watch Demo
              </Link>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-900 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center overflow-hidden">
                    <Image src={`/profile/vishal.jpg`} alt={`User ${i}`} className="w-full h-full object-cover" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className={`ml-4 text-sm ${currentTheme.subtext}`}>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">500+</span> teams already onboard
              </div>
            </MotionDiv>
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <div className={`relative rounded-xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border border-gray-200 dark:border-gray-700`}>
              <div className={`px-4 py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex items-center`}>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className={`mx-auto text-xs ${currentTheme.subtext}`}>Dashboard Preview</div>
              </div>
              <div className="p-4">
                <Image src="/dashboard.png" alt="Dashboard" className="rounded-lg w-full" width={600} height={400} />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Features Section with Expanded Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24" id="features">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold ${currentTheme.text} sm:text-4xl mb-4`}>
            All-in-one platform for your subscription needs
          </h2>
          <p className={`${currentTheme.subtext} max-w-2xl mx-auto`}>
            Everything you need to manage subscriptions efficiently and securely, all in one place.
          </p>
        </MotionDiv>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl backdrop-blur-md p-8 ${
                theme === 'dark' ? 'bg-gray-800/70' : 'bg-white/90'
              } border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              } transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              
              <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              
              <h3 className={`text-xl font-bold ${currentTheme.text} mb-3`}>
                {feature.title}
              </h3>
              
              <p className={`${currentTheme.subtext} mb-6`}>
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className={`${currentTheme.subtext} text-sm`}>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/features/${feature.title.toLowerCase().replace(' ', '-')}`}
                className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className={`py-24 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50/80'}`}
        id="testimonials"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${currentTheme.text} sm:text-4xl mb-4`}>
              Loved by teams worldwide
            </h2>
            <p className={`${currentTheme.subtext} max-w-2xl mx-auto`}>
              Don&apos;t just take our word for it. See what our customers have to say.
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`mx-auto max-w-2xl rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-8 shadow-lg`}>
                      <div className="flex items-center gap-x-6 mb-6">
                        <Image src={`/profile/user.jpg`} alt={testimonial.name} className="h-16 w-16 rounded-full" width={64} height={64} />
                        <div>
                          <h3 className={`text-lg font-semibold ${currentTheme.text}`}>{testimonial.name}</h3>
                          <p className={`${currentTheme.subtext}`}>{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote>
                        <p className={`text-xl leading-relaxed ${currentTheme.text}`}>&quot;{testimonial.content}&quot;</p>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    activeTestimonial === index 
                      ? 'bg-indigo-600' 
                      : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Enhanced Design */}
      <div className={`py-24 ${currentTheme.background}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${currentTheme.text} sm:text-4xl mb-4`}>
              Trusted by leading companies
            </h2>
            <p className={`${currentTheme.subtext} max-w-2xl mx-auto`}>
              Join thousands of teams that trust PickYourPlan for their subscription management.
            </p>
          </div>
          
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '50K+', label: 'Active Users', description: 'Growing every day' },
              { value: '100+', label: 'Enterprise Clients', description: 'Including Fortune 500' },
              { value: '99.9%', label: 'Uptime', description: 'Reliable performance' },
              { value: '30%', label: 'Cost Savings', description: 'Average for teams' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-6 text-center ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} transform transition-transform duration-300 hover:-translate-y-2`}
              >
                <dt className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  {stat.value}
                </dt>
                <dd className={`text-lg font-medium ${currentTheme.text}`}>
                  {stat.label}
                </dd>
                <p className={`mt-1 text-sm ${currentTheme.subtext}`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div
          className={`rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl overflow-hidden`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90" />
            <div className="relative z-10 py-12 px-6 md:py-16 md:px-12 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                Ready to simplify your subscriptions?
              </h2>
              <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already managing their subscriptions more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="rounded-full bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors"
                >
                  Start for free
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-indigo-800/40 backdrop-blur-sm border border-indigo-400/30 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-800/60 transition-colors"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-indigo-500" />
                <span className={`font-bold text-xl ${currentTheme.text}`}>PickYourPlan</span>
              </div>
              <p className={`mt-2 max-w-xs ${currentTheme.subtext}`}>
                Simplifying subscription management for teams worldwide.
              </p>
              <div className="mt-6 flex space-x-6">
                {[
                  { name: 'twitter', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { name: 'facebook', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { name: 'instagram', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                  { name: 'github', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
                ].map((social) => (
                  <Link 
                    key={social.name} 
                    href="/"
                    className="text-gray-400 hover:text-indigo-500" 
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Updates'] },
                { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
                { title: 'Resources', links: ['Documentation', 'Guides', 'API', 'Community'] },
                { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] }
              ].map((category) => (
                <div key={category.title}>
                  <h3 className={`text-sm font-semibold ${currentTheme.text}`}>{category.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {category.links.map((link) => (
                      <li key={link}>
                        <Link 
                          href="/"
                          className={`text-sm ${currentTheme.subtext} hover:text-indigo-500`}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row items-center justify-between`}>
            <p className={`text-sm ${currentTheme.subtext}`}>
              &copy; 2025 PickYourPlan, Inc. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                <Link 
                  key={item} 
                  href="/"
                  className={`text-sm ${currentTheme.subtext} hover:text-indigo-500`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}