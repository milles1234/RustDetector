import React from 'react'


const BrowseFilesCard = () => {
 return (
    <div
      className="group relative cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-8 transition
                 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg
                 hover:bg-orange-50"
    >

      {/* Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-600
                      group-hover:animate-pulse">
        ☁️⬆️
      </div>

      <h3 className="text-center text-xl font-semibold text-gray-800">
        Drag & Drop
      </h3>

      <p className="mt-2 text-center text-sm text-gray-500">
        Drag image files directly onto this area
      </p>

      <p className="mt-3 text-center text-xs italic text-gray-400">
        Best for: Quick uploads, multiple files at once
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        <li>✓ Fastest upload method</li>
        <li>✓ Batch processing ready</li>
        <li>✓ Instant preview</li>
      </ul>

      {/* Active hint */}
      <div className="mt-6 text-center text-sm font-medium text-orange-600 opacity-0 group-hover:opacity-100 transition">
        Drop files here to upload
      </div>
    </div>
  )
}


export default BrowseFilesCard;