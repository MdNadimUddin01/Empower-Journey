import React from 'react';
import { Rocket } from 'lucide-react';

const Card = () => {
  return (
    <div className="w-64 h-48 bg-blue-100 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
    <Rocket className="w-8 h-8 mb-4 text-blue-600" />
    <h2 className="text-xl font-bold mb-2 text-gray-900">Fast Track</h2>
    <p className="text-sm text-gray-600">Accelerate your learning journey</p>
  </div>
  );
};

export default Card;