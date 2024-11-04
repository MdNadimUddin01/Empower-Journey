import React, { useState } from 'react';
import { Brain, Rocket, Target, MousePointer2, BookOpen, Users, Code, LineChart } from 'lucide-react';

const AnimatedFeatures = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { icon: Brain, title: 'AI Learning', description: 'Leverage AI-powered learning solutions' },
    { icon: Rocket, title: 'Fast Track', description: 'Accelerate your learning journey' },
    { icon: Target, title: 'Goal Focus', description: 'Stay aligned with your objectives' },
    { icon: MousePointer2, title: 'Interactive', description: 'Engage with dynamic content' },
    { icon: BookOpen, title: 'Adaptive Learning', description: 'AI-powered personalized paths' },
    { icon: Users, title: 'Live Collaboration', description: 'Real-time peer interaction' },
    { icon: Code, title: 'Project-Based', description: 'Learn by doing real projects' },
    { icon: LineChart, title: 'Smart Progress', description: 'Track your learning journey' }
  ];

  const scrollCards = [...cards, ...cards];

  return (
    <section className='w-[85%] my-10 flex flex-col items-center justify-center mx-auto gap-y-10'>
      <h2 className='text-3xl font-bold bg-clip-text'>Why Choose Empower Journey ?</h2>
      
      <div className="w-full overflow-hidden">
        {/* Added py-8 to create space for hover scaling */}
        <div className="animate-scroll flex gap-6 whitespace-nowrap py-8">
          {scrollCards.map((card, index) => (
            <div
              key={index}
              className="inline-block w-64 flex-shrink-0"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Wrapper div to handle hover transform */}
              <div className="transform-gpu transition-all duration-300 hover:scale-105">
                <div
                  className={`h-48 p-6 rounded-xl bg-blue-150 shadow-lg 
                    hover:shadow-2xl border border-gray-100
                    flex flex-col `}
                >
                  <div className="flex-shrink-0">
                    <card.icon className="w-8 h-8 mb-3 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 whitespace-normal flex-shrink-0">
                    {card.title}
                  </h3>
                  <p className="text-white text-sm whitespace-normal line-clamp-2 flex-grow">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Smooth animation optimizations */
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedFeatures;