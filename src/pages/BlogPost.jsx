import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from 'react-icons/fi'

function BlogPost() {
  const { id } = useParams()
  
  // Mock blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React: A Beginner's Guide",
      excerpt: "Learn the basics of React and start building your first application with this comprehensive guide for beginners.",
      content: `
        <p>React has become one of the most popular JavaScript libraries for building user interfaces. In this guide, we'll cover the basics of React and how to get started with your first application.</p>
        
        <h2>What is React?</h2>
        <p>React is a JavaScript library created by Facebook for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. The main concept of React is the use of components, which are reusable pieces of code that return a React element describing how a section of the UI should appear.</p>
        
        <h2>Setting Up Your Environment</h2>
        <p>To get started with React, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. Once you have these, you can create a new React application using Create React App, a tool that sets up a new React project with a good default configuration.</p>
        
        <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
        
        <h2>Components in React</h2>
        <p>Components are the building blocks of any React application. A component is a JavaScript function or class that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.</p>
        
        <h3>Functional Components</h3>
        <pre><code>function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}</code></pre>
        
        <h3>Class Components</h3>
        <pre><code>class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}</code></pre>
        
        <h2>State and Props</h2>
        <p>Props (short for properties) are read-only inputs to components. They are passed from parent to child components. State, on the other hand, is managed within the component and can be updated using the setState method. With the introduction of Hooks in React 16.8, you can now use state in functional components using the useState hook.</p>
        
        <h3>Using State with Hooks</h3>
        <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
        
        <h2>Conclusion</h2>
        <p>This guide has covered the basics of React, including components, props, and state. There's much more to learn about React, such as lifecycle methods, the Context API, and more advanced hooks like useEffect, useContext, and useReducer. As you continue to build with React, you'll discover more of its powerful features and how they can help you build complex, interactive UIs.</p>
      `,
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
      content: `
        <p>CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. In this article, we'll dive deep into CSS Grid and explore its features and capabilities.</p>
        
        <h2>Introduction to CSS Grid</h2>
        <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to layout items in rows and columns, and offers more layout possibilities than older methods like tables, floats, or inline-block. With CSS Grid, you can create complex layouts that were previously difficult or impossible to achieve with CSS alone.</p>
        
        <h2>Basic Grid Concepts</h2>
        <p>To create a grid container, you set the display property to grid or inline-grid. Once you have a grid container, you can use properties like grid-template-columns and grid-template-rows to define the columns and rows of your grid.</p>
        
        <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}</code></pre>
        
        <p>This creates a grid with three equal-width columns and two rows of different heights, with a 20px gap between grid items.</p>
        
        <h2>Placing Items on the Grid</h2>
        <p>You can place items on the grid using properties like grid-column and grid-row, which specify which grid lines the item should start and end at.</p>
        
        <pre><code>.item {
  grid-column: 1 / 3; /* Start at grid line 1, end at grid line 3 */
  grid-row: 1 / 2; /* Start at grid line 1, end at grid line 2 */
}</code></pre>
        
        <h2>Grid Areas</h2>
        <p>CSS Grid also allows you to name areas of your grid and place items in those areas, which can make your code more readable and maintainable.</p>
        
        <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
        
        <h2>Responsive Grids</h2>
        <p>CSS Grid works well with media queries to create responsive layouts. You can change the number of columns, rows, or the placement of items based on the screen size.</p>
        
        <pre><code>@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "header"
      "sidebar"
      "content"
      "footer";
  }
}</code></pre>
        
        <h2>Conclusion</h2>
        <p>CSS Grid Layout is a powerful tool for creating complex layouts on the web. With its two-dimensional nature and powerful placement capabilities, it offers more layout possibilities than older methods. As you continue to use CSS Grid, you'll discover more of its features and how they can help you create responsive, complex layouts with ease.</p>
      `,
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
      content: `
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. In this article, we'll introduce Tailwind CSS and show you how to get started with it.</p>
        
        <h2>What is Tailwind CSS?</h2>
        <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. Unlike other CSS frameworks like Bootstrap or Bulma, Tailwind doesn't provide pre-designed components. Instead, it gives you a set of utility classes that you can combine to create your own custom designs.</p>
        
        <h2>Getting Started with Tailwind CSS</h2>
        <p>To get started with Tailwind CSS, you'll need to install it in your project. You can do this using npm or yarn:</p>
        
        <pre><code>npm install tailwindcss
npx tailwindcss init</code></pre>
        
        <p>This will install Tailwind CSS and create a tailwind.config.js file in your project root. Next, you'll need to include Tailwind in your CSS:</p>
        
        <pre><code>/* main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
        
        <p>And finally, you'll need to build your CSS:</p>
        
        <pre><code>npx tailwindcss build main.css -o output.css</code></pre>
        
        <h2>Using Tailwind CSS</h2>
        <p>Once you have Tailwind CSS set up, you can start using its utility classes in your HTML. Here's an example of a button styled with Tailwind CSS:</p>
        
        <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
&lt;/button></code></pre>
        
        <p>This creates a blue button with white text, bold font, and rounded corners that changes to a darker blue when hovered over.</p>
        
        <h2>Customizing Tailwind CSS</h2>
        <p>You can customize Tailwind CSS by modifying the tailwind.config.js file. This allows you to add your own colors, spacing, breakpoints, and more:</p>
        
        <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {},
  plugins: [],
}</code></pre>
        
        <h2>Responsive Design with Tailwind CSS</h2>
        <p>Tailwind CSS makes responsive design easy with its responsive utility variants. You can prefix any utility class with a breakpoint name to apply it at that breakpoint and above:</p>
        
        <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Content -->
&lt;/div></code></pre>
        
        <p>This div will be full width on small screens, half width on medium screens, and one third width on large screens.</p>
        
        <h2>Conclusion</h2>
        <p>Tailwind CSS is a powerful tool for building custom designs directly in your HTML. Its utility-first approach allows for rapid development and easy customization. As you continue to use Tailwind CSS, you'll discover more of its features and how they can help you build beautiful, responsive designs efficiently.</p>
      `,
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
      content: `
        <p>Node.js and Express provide a powerful platform for building RESTful APIs. In this tutorial, we'll walk through the process of creating a RESTful API from scratch.</p>
        
        <h2>What is a RESTful API?</h2>
        <p>REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources, which are represented as URLs. Each HTTP method (GET, POST, PUT, DELETE) corresponds to a CRUD operation.</p>
        
        <h2>Setting Up Your Environment</h2>
        <p>To get started, you'll need to have Node.js and npm installed. Once you have these, you can create a new Node.js project and install Express:</p>
        
        <pre><code>mkdir my-api
cd my-api
npm init -y
npm install express</code></pre>
        
        <h2>Creating a Basic Express Server</h2>
        <p>Let's create a basic Express server that listens on port 3000:</p>
        
        <pre><code>// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});</code></pre>
        
        <p>This creates a simple server that responds with "Hello, World!" when you visit the root URL.</p>
        
        <h2>Defining Routes for Your API</h2>
        <p>Now, let's define some routes for our API. We'll create a simple API for managing a list of books:</p>
        
        <pre><code>// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

// Get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Get a specific book
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Create a new book
app.post('/api/books', (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.status(201).json(book);
});

// Update a book
app.put('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  
  res.json(book);
});

// Delete a book
app.delete('/api/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  
  const deletedBook = books[index];
  books.splice(index, 1);
  
  res.json(deletedBook);
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});</code></pre>
        
        <p>This creates a simple RESTful API for managing a list of books, with endpoints for getting all books, getting a specific book, creating a new book, updating a book, and deleting a book.</p>
        
        <h2>Testing Your API</h2>
        <p>You can test your API using tools like Postman, curl, or even a simple web browser for GET requests. For example, to get all books, you would make a GET request to http://localhost:3000/api/books.</p>
        
        <h2>Conclusion</h2>
        <p>This tutorial has covered the basics of building a RESTful API with Node.js and Express. From here, you might want to explore more advanced topics like authentication, validation, error handling, and connecting to a database. With Node.js and Express, you have a powerful and flexible platform for building robust and scalable APIs.</p>
      `,
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      date: "August 12, 2023",
      author: "Satendra Kulshrestha",
      authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      category: "Node.js",
      readTime: 8
    }
  ]
  
  const post = blogPosts.find(post => post.id === Number(id))
  
  if (!post) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <FiArrowLeft className="mr-2" /> Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-base-content/70 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center mr-6 mb-2">
                <FiCalendar className="mr-2" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center mr-6 mb-2">
                <FiClock className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
              
              <div className="flex items-center mb-2">
                <FiTag className="mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
          </header>
          
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </motion.div>
  )
}

export default BlogPost