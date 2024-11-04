import { ChevronRight } from 'lucide-react'
import React from 'react'

function LeftButton({title}) {
  return (

      <button className="group relative px-8 py-3 bg-blue-600 text-white rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center">
                      {title}
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
        </button>
  )
}

export default LeftButton
