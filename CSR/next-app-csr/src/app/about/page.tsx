"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from '@/components/Image';

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  seed: string;
  skills: string[];
}

// Milestone interface
interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

// Value interface
interface Value {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function About() {
  // Client-side metadata handling
  useEffect(() => {
    document.title = "About Us - Next.js CSR Demo";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our team, mission, and the technology behind our modern web development demo.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about our team, mission, and the technology behind our modern web development demo.';
      document.head.appendChild(meta);
    }
  }, []);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
      avatar: 'https://picsum.photos/400/400',
      seed: 'sarah-johnson-team',
      skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Node.js']
    },
    {
      name: 'Mike Chen',
      role: 'Frontend Architect',
      bio: 'Passionate about creating beautiful and performant user interfaces.',
      avatar: 'https://picsum.photos/400/400',
      seed: 'mike-chen-team',
      skills: ['React', 'Svelte', 'Tailwind CSS', 'Three.js']
    },
    {
      name: 'Lisa Williams',
      role: 'UX/UI Designer',
      bio: 'Design systems expert with a focus on accessibility and user experience.',
      avatar: 'https://picsum.photos/400/400',
      seed: 'lisa-williams-team',
      skills: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping']
    },
    {
      name: 'Alex Rodriguez',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring scalable and reliable deployments.',
      avatar: 'https://picsum.photos/400/400',
      seed: 'alex-rodriguez-team',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
    }
  ];

  // Company milestones
  const milestones: Milestone[] = [
    {
      year: '2021',
      title: 'Project Inception',
      description: 'Started as a small experiment to explore modern web frameworks.',
      icon: '🚀'
    },
    {
      year: '2022',
      title: 'Framework Evolution',
      description: 'Expanded to include multiple frameworks for comprehensive comparison.',
      icon: '⚡'
    },
    {
      year: '2023',
      title: 'Performance Focus',
      description: 'Implemented advanced optimization techniques and best practices.',
      icon: '🎯'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Became a reference point for developers learning modern web development.',
      icon: '🌟'
    },
    {
      year: '2025',
      title: 'Future Innovation',
      description: 'Continuing to evolve with the latest web technologies and standards.',
      icon: '🔮'
    }
  ];

  // Company values
  const values: Value[] = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and push the boundaries of what\'s possible.',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Quality',
      description: 'Every line of code is crafted with attention to detail and best practices.',
      icon: '✨',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Performance',
      description: 'Speed and efficiency are at the core of everything we build.',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Accessibility',
      description: 'We believe the web should be accessible to everyone, everywhere.',
      icon: '🌍',
      color: 'from-purple-500 to-pink-500'
    }
  ];
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are passionate developers and designers dedicated to showcasing the best of modern web development. 
              Our demo applications represent the cutting edge of technology and design.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="https://picsum.photos/id/214/1000/500" 
                alt="Our team working together"
                width={1000}
                height={500}
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Building the Future</h3>
                <p className="text-white/90">One component at a time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in the power of modern web technologies to create exceptional user experiences. 
                Our mission is to demonstrate how thoughtful architecture, beautiful design, and performance 
                optimization can come together to create something truly remarkable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our demo applications, we showcase best practices in Vue 3, Nuxt 3, TypeScript, 
                and modern CSS frameworks. Each project serves as both a learning resource and a testament 
                to what's possible when technology meets creativity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="https://picsum.photos/id/524/600/400" 
                  alt="Our mission in action"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <div className={`w-16 h-1 rounded-full bg-gradient-to-r mx-auto mb-4 ${value.color}`}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to modern excellence
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line - responsive positioning */}
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                  {/* Timeline dot - responsive positioning */}
                  <div className="absolute left-[34px] transform -translate-x-1/2 lg:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div 
                    className={`group ml-20 lg:ml-0 lg:w-5/12 ${index % 2 === 0 
                      ? 'lg:text-right lg:pr-8' 
                      : 'lg:text-left lg:pl-8'}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                      <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className="text-2xl mr-3">{milestone.icon}</span>
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our innovative projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={member.avatar} 
                    alt={member.name}
                    seed={member.seed}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    fit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're looking to learn from our demos or collaborate on a project, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get In Touch
                <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
