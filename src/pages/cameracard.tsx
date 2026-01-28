import React from 'react'

const  CameraCard = () => {
  return (
    <div
      className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-8 transition
                 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
                      bg-teal-100 text-3xl text-teal-600">
        📷
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-semibold text-gray-800">
        Use Camera
      </h3>

      {/* Description */}
      <p className="mt-2 text-center text-sm text-gray-500">
        Capture images directly using your device camera
      </p>

      {/* Best For */}
      <p className="mt-3 text-center text-xs italic text-gray-400">
        Best for: On-site inspections, real-time analysis
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        <li>✓ Live capture</li>
        <li>✓ No file management</li>
        <li>✓ Mobile-friendly</li>
      </ul>

      {/* Button */}
      <button
        className="mt-6 w-full rounded-lg bg-teal-500 py-2 text-white transition
                   hover:bg-teal-600 active:scale-95"
      >
        Open Camera
      </button>

      {/* Permission Notice */}
      <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-400">
        <span>🔒</span>
        <span>Requires camera permission</span>
      </div>
    </div>
  );
}



export default CameraCard