import { useState } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../components/blog/BlogCard'

function Blog() {
  const allPosts = [
    {
      id: 1,
      title: "Getting Started with React: A Beginner's Guide",
      excerpt: "Learn the basics of React and start building your first application with this comprehensive guide for beginners.",
      content: "React has become one of the most popular JavaScript libraries for building user interfaces. In this guide, we'll cover the basics of React and how to get started with your first application. We'll explore concepts like components, props, state, and hooks, and build a simple application to put these concepts into practice.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      date: "November 15, 2023",
      author: "Satendra Kulshrestha",
      authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      category: "React",
      readTime: 5
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout",
      excerpt: "Explore the power of CSS Grid Layout and learn how to create complex responsive layouts with ease.",
      content: "CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. In this article, we'll dive deep into CSS Grid and explore its features and capabilities. We'll cover grid templates, grid areas, grid alignment, and how to create responsive layouts that adapt to different screen sizes.",
      image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg",
      date: "October 20, 2023",
      author: "Satendra Kulshrestha",
      authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      category: "CSS",
      readTime: 7
    },
    {
      id: 3,
      title: "Introduction to Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can revolutionize your styling workflow and speed up your development process.",
      content: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. In this article, we'll introduce Tailwind CSS and show you how to get started with it. We'll cover the core concepts, utility classes, customization, and how to optimize for production.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
      date: "September 5, 2023",
      author: "Satendra Kulshrestha",
      authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      category: "CSS",
      readTime: 6
    },
    {
      id: 4,
      title: "Building a RESTful API with Node.js and Express",
      excerpt: "Learn how to create a robust RESTful API using Node.js and Express with this step-by-step tutorial.",
      content: "Node.js and Express provide a powerful platform for building RESTful APIs. In this tutorial, we'll walk through the process of creating a RESTful API from scratch. We'll cover setting up a Node.js project, creating Express routes, handling requests and responses, and connecting to a database.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      date: "August 12, 2023",
      author: "Satendra Kulshrestha",
      authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      category: "Node.js",
      readTime: 8
    }
  ]

  const categories = ["All", ...new Set(allPosts.map(post => post.category))]
  const [activeCategory, setActiveCategory] = useState("All")
  const [posts, setPosts] = useState(allPosts)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === "All") {
      setPosts(allPosts)
    } else {
      setPosts(allPosts.filter(post => post.category === category))
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, programming,
              and technology.
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-base-200 hover:bg-base-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog