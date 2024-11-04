import { Play } from 'lucide-react'
import React from 'react'

function RightButton({title}) {
  return (
    <button className="group px-8 py-3 border-2 cursor-pointer border-blue-600 text-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="mr-2 group-hover:scale-110 transition-transform" />
                    {title}
    </button>
  )
}

export default RightButton
