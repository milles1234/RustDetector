import React from 'react'


const Landing = () => {
    return (
         <div className="relative min-h-screen overflow-hidden bg-page-bg">

     
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
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
          Detect Rust Before It Becomes a Problem
        </h1>

        <h2 className="text-white text-lg md:text-2xl max-w-3xl">
          AI-powered rust detection for industrial equipment. Get instant analysis,
          severity reports, and maintenance recommendations in seconds.
        </h2>
      </div>
            {/* <div>
                Trusted by maintenance teams at:
            </div>
            <div>
                <h2>Three Simple Steps to Safer Equipment</h2>
                Upload Your Image
                Drag and drop photos of metal surfaces, equipment, or infrastructure. Supports JPG, PNG, and batch uploads.


                and .......many more in this section
            </div>
            <div>
                <h2>Everything You Need for Rust Management</h2>
                <h3>Real-Time Analysis</h3>
                Upload images and receive comprehensive rust analysis within seconds. No waiting, no complicated setup—just instant, accurate results powered by cutting-edge AI technology.



                more section ......conirnuw
            </div>
            <div>befite section</div>
            <h2>Why Choose Our Rust Detection AI?</h2>
            **For Maintenance Teams:**

- Reduce inspection time by 80%
- Catch rust in early stages before costly damage occurs
- Make data-driven maintenance decisions
- Eliminate human error and inconsistency in visual inspections

**For Operations Managers:**

- Prevent unexpected equipment failures and downtime
- Optimize maintenance budgets with predictive insights
- Improve workplace safety by identifying structural weaknesses
- Maintain compliance with safety regulations and documentation requirements

**For Facility Owners:**

- Extend equipment lifespan through proactive care
- Reduce emergency repair costs by up to 60%
- Protect asset value with regular monitoring
- Access inspection data anywhere, anytime through cloud storage
<div>Use Cases Section </div>
<div>
    social proof section
</div> */}
        </div>
    )
} 

export default Landing
