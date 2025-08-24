'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'NIC Parliament',
      location: 'New Delhi, India',
      period: '2023 - 2024',
      description: 'Worked on developing and maintaining parliamentary digital systems. Collaborated with senior developers to implement new features and optimize existing codebase.',
      achievements: [
        'Improved system performance by 25% through code optimization',
        'Developed responsive web interfaces using React and TypeScript',
        'Collaborated with cross-functional teams on multiple projects',
        'Implemented automated testing procedures'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      type: 'internship'
    },
    {
      title: 'Full Stack Developer',
      company: 'Student Management System',
      location: 'Personal Project',
      period: '2023',
      description: 'Designed and developed a comprehensive student management system with features for student registration, course management, and academic tracking.',
      achievements: [
        'Built complete CRUD operations for student data management',
        'Implemented secure authentication and authorization',
        'Created responsive dashboard with real-time analytics',
        'Deployed on AWS with CI/CD pipeline'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      type: 'project'
    },
    {
      title: 'Backend Developer',
      company: 'Bright Money Django Project',
      location: 'Freelance',
      period: '2023',
      description: 'Developed RESTful APIs and backend services for a financial management application using Django and Python.',
      achievements: [
        'Built scalable REST APIs serving 1000+ daily requests',
        'Implemented secure payment processing integration',
        'Optimized database queries reducing response time by 40%',
        'Created comprehensive API documentation'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
      type: 'freelance'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'from-blue-500 to-purple-600'
      case 'project':
        return 'from-green-500 to-teal-600'
      case 'freelance':
        return 'from-orange-500 to-red-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return '🏢'
      case 'project':
        return '🚀'
      case 'freelance':
        return '💼'
      default:
        return '💻'
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in software development through internships, projects, and collaborations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform md:-translate-x-1/2 border-4 border-background z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  <Card className="p-8 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
                    <div className="space-y-6">
                      <div className={`flex items-center gap-3 ${
                        index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                      }`}>
                        <div className={`text-2xl p-2 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} bg-opacity-20`}>
                          {getTypeIcon(exp.type)}
                        </div>
                        <Badge variant="secondary" className={`bg-gradient-to-r ${getTypeColor(exp.type)} bg-opacity-10 border border-current/20`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-primary font-semibold mb-4">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-4">
                          <h5 className="font-semibold">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <h5 className="font-semibold mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <Badge variant="outline" className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection