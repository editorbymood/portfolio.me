'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shanket.kumar@example.com',
      href: 'mailto:shanket.kumar@example.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/shanketkumar',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shanketkumar',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/shanketkumar',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10"></div>
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #10b981 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 opacity-20"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-background/90 to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-background/90 to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.label}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-background/90 to-muted/30 backdrop-blur-sm border-2 border-border/50">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-4 rounded-full bg-muted/50 hover:bg-primary/10 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Current Status</h4>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0">
                    🟢 Available for new projects
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection