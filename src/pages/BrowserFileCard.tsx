import React from 'react'

const  BrowseFilesCard =() => {
  return (
    <div className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-8 transition
                    hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
      
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-600">
        📁
      </div>

      {/* Content */}
      <h3 className="text-center text-xl font-semibold text-gray-800">
        Browse Files
      </h3>

      <p className="mt-2 text-center text-sm text-gray-500">
        Select single or multiple images from your computer
      </p>

      <p className="mt-3 text-center text-xs italic text-gray-400">
        Best for: Desktop uploads, archived photos
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        <li>✓ Multiple file selection</li>
        <li>✓ Preview before upload</li>
        <li>✓ Supports all major formats</li>
      </ul>

      {/* Button */}
      <button className="mt-6 w-full rounded-lg bg-orange-500 py-2 text-white hover:bg-orange-600">
        Select Files
      </button>
    </div>
  )
}

export default BrowseFilesCard