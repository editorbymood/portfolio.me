'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-purple-600',
      icon: '🎨'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Django', 'Express.js', 'PostgreSQL'],
      color: 'from-green-500 to-teal-600',
      icon: '⚙️'
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'Redis'],
      color: 'from-orange-500 to-red-600',
      icon: '🛠️'
    },
    {
      category: 'Mobile',
      skills: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android'],
      color: 'from-pink-500 to-rose-600',
      icon: '📱'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I work with a diverse set of technologies to build scalable, performant applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <Card className="p-8 h-full bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl p-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.2) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`w-full justify-center py-2 px-3 bg-gradient-to-r ${category.color} bg-opacity-10 hover:bg-opacity-20 border border-current/20 transition-all duration-300 group-hover:shadow-md`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">Advanced</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'GraphQL', 'Socket.io', 'Jest', 'Cypress', 'Webpack', 'Vite', 
              'Firebase', 'Supabase', 'Prisma', 'Stripe', 'Figma', 'Adobe XD'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection