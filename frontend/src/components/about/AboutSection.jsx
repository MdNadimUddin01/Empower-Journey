import React from 'react';

const AboutStorySection = () => {
  return (
    <section className="bg-slate-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Founding Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-500">
              Our Founding Story
            </h2>
            <div className="space-y-6 text-slate-400">
              <p>
                Our e-learning platform was born out of a shared vision and passion for transforming
                education. It all began with a group of educators, technologists, and lifelong learners
                who recognized the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p>
                As experienced educators ourselves, we witnessed firsthand the limitations and
                challenges of traditional education systems. We believed that education should not
                be confined to the walls of a classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower individuals from all
                walks of life to unlock their full potential.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-red-500/20 rounded-lg blur-lg"></div>
            <img
              src="/api/placeholder/600/400"
              alt="Team collaboration"
              className="relative rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              Our Vision
            </h2>
            <p className="text-slate-400">
              With this vision in mind, we set out on a journey to create an e-learning platform 
              that would revolutionize the way people learn. Our team of dedicated experts worked 
              tirelessly to develop a robust and intuitive platform that combines cutting-edge 
              technology with engaging content, fostering a dynamic and interactive learning experience.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Our Mission
            </h2>
            <p className="text-slate-400">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant 
              community of learners, where individuals can connect, collaborate, and learn from one 
              another. We believe that knowledge thrives in an environment of sharing and dialogue, 
              and we foster this spirit of collaboration through forums, live sessions, and 
              networking opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;