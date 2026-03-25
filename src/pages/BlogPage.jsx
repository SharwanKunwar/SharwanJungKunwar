import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { SiOpenaccess } from "react-icons/si";
import { FaOpencart, FaOpenid } from "react-icons/fa";
import { ArrowBigDown } from "lucide-react";

function BlogPage({ id, title, des }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 shadow-md flex gap-4 items-center justify-between">
    
      <div className="flex  h-full items-center w-full justify-between px-5 items-center">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-700 mt-1 md:block hidden">{des}</p>

        <Button
          onClick={() => navigate(`/blog/${id}`)}
          className=" bg-black text-white px-5! py-1 rounded-md text-sm shadow-sm"
        >
          Read
        </Button>
      </div>

    </div>
  );
}

export default BlogPage;