import React from 'react';
import company1 from "../assets/company1.jpg";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.jpg";
import company4 from "../assets/company4.png";
import { Brain, ClipboardMinus, FileUp, Play } from 'lucide-react';


const Landing = () => {

  
  const logos = [company1, company2, company3, company4];

  return (
    <>
   
      <section className="relative min-h-screen overflow-hidden bg-page-bg">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/src/assets/landing-page.mp4"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-15">
            Detect Rust Before It Becomes a Problem
          </h1>

          <h2 className="text-white text-lg md:text-2xl max-w-3xl">
            AI-powered rust detection for industrial equipment. Get instant analysis,
            severity reports, and maintenance recommendations in seconds.
          </h2>

          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-alert-orange text-white rounded-2xl">
              Start Free Analysis
            </button>
           
            <button className="px-4 py-3 bg-alert-orange text-white rounded-2xl">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
     <section className='flex flex-col items-center px-3 min-h-screen overflow-hidden justify-center gap-23'>
      <h1 className='text-6xl font-bold mb-10 text-industrial-navy text-center g'>Three Simple Steps to Safer Equipment</h1>
     <div className='flex flex-cols gap-4 '>
      <div className='flex  items-start gap-3'>
        <FileUp className='shrink-0' size={36}/>
       <div className='font-semibold'>Upload Your Image</div>
       <span>Drag and drop photos of metal surfaces, equipment, or infrastructure. Supports JPG, PNG, and batch uploads.</span>
       </div>
       
       <div className='flex items-start gap-4'>
        <div className='flex  items-start gap-3'>
          <Brain className='shrink-0' size={36}/>
        <div className='font-semibold'>AI Analyzes </div>
        <span>Drag and drop photos of metal surfaces, equipment, or infrastructure. Supports JPG, PNG, and batch uploads.</span>
        </div>
        
       </div>
       <div className='flex items-start gap-4'>
        <div className='flex  items-start gap-3'>
          <ClipboardMinus className='shrink-0' size={36}/>
        <div className='font-semibold'>Get Actionable Insights</div>
        <span>Download detailed reports with severity scores, visual heat maps, and maintenance recommendations to prevent equipment failure.</span>
        </div>
        </div>
       
       </div>
     </section>
     
  
    </>
  );
};

export default Landing;
