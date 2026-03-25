import { Button } from "antd";
import React, { useState } from "react";
import { motion } from "motion/react";

function BookCard({ imgPath, title, description, bookUrl }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleRead = () => {
    if (bookUrl) {
      window.open(bookUrl, "_blank");
    }
  };

  return (
    <div
      className="flex-1 h-[400px] md:mb-0 mb-5 rounded-md shadow-sm relative overflow-hidden"
      onClick={() => setShowOverlay(prev => !prev)} // toggle on tap
    >
      
      {/* Image */}
      <img
        src={imgPath}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showOverlay ? 1 : 0 }}
        className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm text-white p-5 flex flex-col justify-center gap-3"
      >
        
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>

        <Button 
          type="primary" 
          onClick={(e) => {
            e.stopPropagation(); // prevent toggle when clicking button
            handleRead();
          }}
          disabled={!bookUrl}
        >
          Read
        </Button>

      </motion.div>
    </div>
  );
}

export default BookCard;