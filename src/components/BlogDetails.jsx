import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <h1 className="text-center mt-10">Blog not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-20 p-5 ">
      <div className="bg-yellow-400 h-130 rounded-md">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover rounded-md mb-4 shadow-sm"
        />
      </div>

      <h1 className=" mt-4 text-2xl font-bold">{blog.title}</h1>
      <p className=" text-gray-700">{blog.des}</p>
    </div>
  );
}

export default BlogDetails;



// This React component, BlogDetails, displays the full content of a single blog post. Here's a breakdown:

// Getting the blog ID from the URL:
// useParams() from react-router-dom extracts the id from the URL (e.g., /blog/1 → id = 1).
// Finding the blog data:
// It searches the blogs array (blogs imported from your data file) for a blog object with a matching id.
// Handling missing blogs:
// If no blog matches the ID, it renders a message: "Blog not found".
// Displaying the blog:
// Shows the blog image at the top (blog.img) inside a yellow container.
// Displays the blog title (blog.title) in a large bold font.
// Displays the blog description/content (blog.des) below the title.

// In short: It’s a dynamic blog page that shows the full blog details based on the ID in the URL.

// If you want, I can explain how to link this from a blog list so that clicking “Read” takes you to this page. Do you want me to do that?