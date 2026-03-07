import React, { useState, useEffect } from "react";
import { Button, Modal, Input } from "antd";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const { TextArea } = Input;

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);       // For future Post modal
  const [markdown, setMarkdown] = useState("");  // For future Post modal


    const githubAPI =
    "https://api.github.com/repos/SharwanKunwar/SharwanJungKunwar/contents/blogs";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(githubAPI);
        const files = res.data;

        // Fetch content of each markdown file
        const blogData = await Promise.all(
          files.map(async (file) => {
            const contentRes = await axios.get(file.download_url);
            return {
              name: file.name.replace(".md", ""),
              content: contentRes.data,
            };
          })
        );

        // Sort blogs by newest first (optional)
        blogData.sort((a, b) => (a.name < b.name ? 1 : -1));

        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Blogs</h1>
        {/* Optional: Post Blog Button for future */}
        <Button type="primary" onClick={() => setOpen(true)}>
          Post Blog
        </Button>
      </div>

      {/* Blog List */}
      {blogs.map((blog, index) => (
        <div key={index} className="border p-5 rounded-lg mb-6 shadow">
          <h2 className="text-xl font-semibold mb-3">{blog.name}</h2>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      ))}

      {/* Modal for Posting Blog (Optional for now) */}
      <Modal
        title="Post Blog (Markdown)"
        open={open}
        onOk={() => {
          // Optional: implement save to GitHub API later
          setOpen(false);
          setMarkdown("");
        }}
        onCancel={() => setOpen(false)}
        width={700}
      >
        <TextArea
          rows={12}
          placeholder="Paste README markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </Modal>

    </div>
  );
}

export default BlogPage;