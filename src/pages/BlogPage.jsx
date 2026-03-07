import React, { useState } from "react";

function BlogPage() {

  const blogs = [
    {
      id: 1,
      title: "How I Started Programming",
      description: "My journey into coding and building projects.",
      content:
        "I started programming with curiosity. Over time I learned C, Java, and later React. Building projects helped me understand real-world development..."
    },
    {
      id: 2,
      title: "Why I Love React",
      description: "React makes UI development clean and reusable.",
      content:
        "React introduced me to component-based architecture. It helps build scalable and maintainable applications..."
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20">

      <h1 className="text-3xl font-bold mb-6">My Blog</h1>

      {/* Blog List */}
      {!selectedBlog && (
        <div className="grid gap-6 md:grid-cols-2">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>

              <p className="text-gray-500 mt-2">{blog.description}</p>

              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-4 text-blue-500 font-medium"
              >
                Read More →
              </button>
            </div>
          ))}

        </div>
      )}

      {/* Blog Details */}
      {selectedBlog && (
        <div>

          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-6 text-blue-500"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold mb-4">
            {selectedBlog.title}
          </h2>

          <p className="text-lg leading-relaxed">
            {selectedBlog.content}
          </p>

        </div>
      )}

    </div>
  );
}

export default BlogPage;