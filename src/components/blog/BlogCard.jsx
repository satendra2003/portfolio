import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function BlogCard({ post, index }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div 
      variants={item}
      className="card-custom overflow-hidden group"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-2 py-1 rounded">
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-base-content/60 mb-2">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-base-content/70 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
              <img 
                src={post.authorImage || "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"} 
                alt={post.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">{post.author}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogCard