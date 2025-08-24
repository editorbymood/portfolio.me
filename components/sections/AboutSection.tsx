'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const AboutSection = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'AWS'
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1"
                >
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                    SK
                  </div>
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Hello! I'm Shanket</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate Software Engineer with expertise in modern web technologies. 
                    I love crafting beautiful, performant applications that solve real-world problems 
                    and create meaningful user experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With experience in full-stack development, I specialize in React, Next.js, and Python. 
                    I'm constantly learning new technologies and best practices to stay at the forefront 
                    of web development.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="font-semibold text-lg">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="px-3 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 hover:from-purple-600/20 hover:to-blue-600/20 border border-primary/20 transition-all duration-300">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '2+', label: 'Years Experience', icon: '💼' },
              { number: '15+', label: 'Projects Completed', icon: '🚀' },
              { number: '5+', label: 'Technologies', icon: '⚡' },
              { number: '∞', label: 'Lines of Code', icon: '💻' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center"
              >
                <Card className="p-6 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection