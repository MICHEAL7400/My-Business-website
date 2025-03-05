import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const blogPosts = [
  {
    title: "Understanding Full-Stack Development",
    date: "September 20, 2024",
    excerpt: "Full-stack development is crucial for modern web applications...",
    link: "/post1",
  },
  {
    title: "The Future of Software Engineering",
    date: "August 15, 2024",
    excerpt: "The field of software engineering is rapidly evolving...",
    link: "/post2",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <section className="blog-posts">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-post">
            <h2><Link to={post.link}>{post.title}</Link></h2>
            <p className="date">{post.date}</p>
            <p className="excerpt">{post.excerpt}</p>
            <Link to={post.link} className="read-more">Read More</Link>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Blog;
