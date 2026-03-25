import React from "react";
import { useNavigate } from "react-router-dom";

function BlogPage({ id, title, des }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 shadow-md flex gap-4 items-center justify-between">
    
      <div className="flex  h-full items-center w-full justify-between px-5 items-center">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-700 mt-1">{des}</p>

        <button
          onClick={() => navigate(`/blog/${id}`)}
          className=" bg-black text-white px-3 py-1 rounded-md text-sm"
        >
          Read
        </button>
      </div>

    </div>
  );
}

export default BlogPage;