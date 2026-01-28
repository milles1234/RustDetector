import React from "react";
import { CloudUpload, Folder, ArrowUp, Camera, Check } from "lucide-react";

const UploadCard = () => {
  return (
    <div
      className="
        relative
        h-[360px]
        bg-white
        rounded-2xl
        p-12
        border-2 border-dashed
        border-[#FF6B35]/30
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        flex flex-col items-center justify-center text-center
        transition-all duration-300
        hover:border-solid
        hover:bg-[#FF6B35]/5
        hover:cursor-pointer
      "
    >
    
      <div className="mb-6 animate-float">
        <div className="w-20 h-20 rounded-full bg-[#FF6B35]/15 flex items-center justify-center">
          <CloudUpload size={40} className="text-[#FF6B35]" />
        </div>
      </div>

      
      <h2 className="text-2xl font-semibold text-[#2B2D42] mb-3">
        Upload Images for Rust Detection
      </h2>

  
      <p className="text-base text-[#6C757D] mb-4">
        Drop images here or choose an upload method below
      </p>

     
      <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm text-[#6C757D]/80">
        {["JPG", "PNG", "TIFF", "Batch Upload"].map((item) => (
          <span
            key={item}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100"
          >
            <Check size={14} className="text-green-600" />
            {item}
          </span>
        ))}
        <span className="px-3 py-1 rounded-full bg-gray-100">
          Max 10MB
        </span>
      </div>


      <div className="flex gap-4">
        <button className="upload-btn">
          <Folder size={18} /> Browse Files
        </button>

        <button className="upload-btn">
          <ArrowUp size={18} /> Drag & Drop
        </button>

        <button className="upload-btn">
          <Camera size={18} /> Use Camera
        </button>
      </div>

   
      <div className="absolute bottom-4 flex gap-3 text-xs text-green-600">
        <span className="flex items-center gap-1">
          ✓ Average analysis time: 3s
        </span>
        <span className="flex items-center gap-1">
          ✓ 99% accuracy rate
        </span>
      </div>
    </div>
  );
};

export default UploadCard;
