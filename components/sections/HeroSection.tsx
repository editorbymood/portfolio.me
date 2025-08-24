'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = [
    'Software Engineer',
    'Frontend Developer',
    'React Enthusiast',
    'Full Stack Developer',
    'Problem Solver'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-teal-900/40"></div>
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, #8b5cf6 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, #06b6d4 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, #10b981 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, #8b5cf6 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 opacity-30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Shanket Kumar
            </span>
          </motion.h1>

          <div className="h-20 mb-8 flex items-center justify-center">
            <motion.p
              key={currentTitle}
              initial={{ opacity: 0, y: 20, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -90 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium"
            >
              {titles[currentTitle]}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences through innovative web technologies 
            and clean, efficient code. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <Button variant="ghost" size="icon" className="rounded-full p-3 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full p-3 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full p-3 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection