'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications with Next.js 14',
      excerpt: 'Learn how to leverage the latest features of Next.js 14 to build performant and scalable React applications with server components.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'React',
      readTime: '5 min read',
      publishDate: '2024-01-15',
      slug: 'building-scalable-react-applications-nextjs-14'
    },
    {
      title: 'Modern State Management: Redux vs Zustand',
      excerpt: 'A comprehensive comparison of state management solutions for React applications, exploring the pros and cons of each approach.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'JavaScript',
      readTime: '8 min read',
      publishDate: '2024-01-10',
      slug: 'redux-vs-zustand-state-management'
    },
    {
      title: 'Mastering TypeScript: Advanced Types and Patterns',
      excerpt: 'Dive deep into TypeScript\'s advanced type system and learn how to leverage utility types, conditional types, and more.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'TypeScript',
      readTime: '12 min read',
      publishDate: '2024-01-05',
      slug: 'mastering-typescript-advanced-types'
    }
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing my thoughts and insights on web development, technology trends, and best practices
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4">
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto font-semibold hover:text-primary transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Featured Post Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-2 border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                    Featured Article
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    The Future of Web Development: Trends to Watch in 2024
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore the latest trends shaping the future of web development, from AI-powered tools 
                    to new frameworks and technologies that are revolutionizing how we build web applications.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>Shanket Kumar</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative"
                >
                  <img
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Featured article"
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-border/50">
            <div className="max-w-md mx-auto space-y-4">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get notified when I publish new articles and insights about web development.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-border bg-background focus:border-primary outline-none transition-colors"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection