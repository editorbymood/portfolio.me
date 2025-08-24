'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Play } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive web application for managing student records, courses, and academic performance with role-based access control.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'Bright Money Django Project',
      description: 'Financial management platform with payment processing, budget tracking, and expense analytics built with Django.',
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Backend'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and interactive elements built with Next.js.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Frontend'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Full Stack'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, and weather maps integration.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Frontend'
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0' 
                  : 'hover:bg-primary/10 hover:border-primary/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <Card className="group overflow-hidden bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-3 rounded-full border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection