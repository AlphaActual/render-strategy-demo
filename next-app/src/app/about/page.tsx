import Link from 'next/link';
import Image from '@/components/Image';

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageId: number;
}

// Milestone interface
interface Milestone {
  year: string;
  title: string;
  description: string;
}

// Value interface
interface Value {
  title: string;
  description: string;
  icon: string;
}

export default function About() {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in technology leadership, Sarah founded our company with a vision to revolutionize digital experiences.',
      imageId: 64
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Michael leads our technical strategy and innovation. He has a passion for emerging technologies and scalable architecture.',
      imageId: 65
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Emily brings creative vision to life through user-centered design. She believes in the power of intuitive and beautiful interfaces.',
      imageId: 66
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'David oversees our engineering teams and ensures we deliver high-quality, performant solutions for our clients.',
      imageId: 67
    }
  ];

  // Company milestones
  const milestones: Milestone[] = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a small team and a big vision to transform digital experiences.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful digital transformation project.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ talented professionals across design, development, and strategy.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received multiple awards for innovation and excellence in digital design and development.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded our services internationally, working with clients across 5 countries.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focused on emerging technologies and future-forward solutions.'
    }
  ];

  // Company values
  const values: Value[] = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best results come from working together, both internally and with our clients.',
      icon: '🤝'
    },
    {
      title: 'Quality',
      description: 'We never compromise on quality and strive for excellence in everything we deliver.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and respect for all stakeholders.',
      icon: '🛡️'
    },
    {
      title: 'Growth',
      description: 'We invest in continuous learning and development for our team and our clients.',
      icon: '📈'
    },
    {
      title: 'Impact',
      description: 'We measure success by the positive impact we create for businesses and communities.',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-accent-400">Our Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              We're a passionate team of innovators, designers, and developers dedicated to 
              creating exceptional digital experiences that drive business growth.
            </p>
            <div className="w-24 h-1 bg-accent-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To empower businesses with innovative digital solutions that not only meet today's challenges 
              but anticipate tomorrow's opportunities. We believe in the transformative power of technology 
              when combined with human creativity and strategic thinking.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every project we undertake is an opportunity to push boundaries, solve complex problems, 
              and create lasting value for our clients and their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make our vision a reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square">
                  <Image
                    src={`https://picsum.photos/seed/${member.imageId}/400/400`}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our company's growth and evolution
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <span className="text-primary-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our decisions and define our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">150+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">25+</div>
              <div className="text-primary-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">5</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Start a Project
            </Link>
            <Link 
              href="/blog"
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
