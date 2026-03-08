import React, { useState, useEffect } from "react";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";
import axios from "axios";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState({}); // Track expanded blogs

  const githubAPI =
    "https://api.github.com/repos/SharwanKunwar/SharwanJungKunwar/contents/blogs";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(githubAPI);
        const files = res.data;

        const blogData = await Promise.all(
          files.map(async (file) => {
            const contentRes = await axios.get(file.download_url);
            return {
              name: file.name.replace(".md", ""),
              content: contentRes.data,
            };
          })
        );

        // Sort blogs by newest first
        blogData.sort((a, b) => (a.name < b.name ? 1 : -1));
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getMarkdownPreview = (content, limit = 350) => {
    if (content.length <= limit) return content;
    const lines = content.split("\n");
    let preview = "";
    for (let line of lines) {
      if (preview.length + line.length > limit) break;
      preview += line + "\n";
    }
    preview += "...";
    return preview;
  };

  return (
    <div className="max-w-5xl mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">My Blogs (README Style)</h1>

      {blogs.length === 0 && (
        <p className="text-gray-500 text-center">No blogs found yet.</p>
      )}

      {blogs.map((blog, index) => {
        const isExpanded = expanded[index];
        const preview = getMarkdownPreview(blog.content);

        return (
          <div
            key={index}
            className="border rounded-lg mb-6 shadow hover:shadow-lg transition duration-200 p-6 bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">{blog.name}</h2>

            {/* Markdown Container */}
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              <ReactMarkdown>
                {isExpanded ? blog.content : preview}
              </ReactMarkdown>
            </div>

            {blog.content.length > 350 && (
              <Button
                type="link"
                className="p-0 mt-2"
                onClick={() => toggleExpand(index)}
              >
                {isExpanded ? "Show Less" : "Learn More"}
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BlogPage;