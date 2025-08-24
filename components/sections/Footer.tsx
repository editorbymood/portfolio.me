'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Shanket Kumar
            </h3>
            <p className="text-muted-foreground mt-2">
              Software Engineer & Frontend Developer
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg italic text-muted-foreground max-w-2xl mx-auto"
          >
            "Code is like humor. When you have to explain it, it's bad."
            <footer className="text-sm mt-2 font-medium">— Cory House</footer>
          </motion.blockquote>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full p-3 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground space-y-4 sm:space-y-0"
          >
            <p>
              © {new Date().getFullYear()} Shanket Kumar. All rights reserved.
            </p>
            <p className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Tech Stack Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground/70"
          >
            <p>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer