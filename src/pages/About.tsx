import { Users, Target, Eye, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Agricultural Team',
      role: 'Expert farmers and agronomists',
      icon: <Users className="w-8 h-8 text-white" />,
      description: 'Specialized in sustainable tobacco cultivation and crop management',
      skills: ['Sustainable Farming', 'Crop Optimization', 'Soil Management', 'Pest Control'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Quality Control',
      role: 'Ensuring product excellence',
      icon: <Award className="w-8 h-8 text-white" />,
      description: 'Rigorous testing and quality assurance at every production stage',
      skills: ['Quality Testing', 'Standards Compliance', 'Process Optimization', 'Documentation'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Distribution Team',
      role: 'Global logistics experts',
      icon: <MapPin className="w-8 h-8 text-white" />,
      description: 'Managing worldwide distribution networks and supply chains',
      skills: ['Supply Chain', 'Logistics', 'Market Analysis', 'Partnership Management'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Management Team',
      role: 'Strategic leadership',
      icon: <Briefcase className="w-8 h-8 text-white" />,
      description: 'Providing strategic direction and operational excellence',
      skills: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Innovation'],
      color: 'from-tobacco-500 to-tobacco-600'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tobacco-800 mb-6">About Unity Alliance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established as a premier tobacco cultivation and cigarette distribution company, 
            Unity Alliance Co., Ltd has been at the forefront of the tobacco industry for over a decade.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-tobacco-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Unity Alliance Co., Ltd was founded with a vision to bridge the gap between traditional 
                tobacco farming and modern distribution networks. Our journey began in the fertile lands 
                of Myanmar, where we recognized the potential to create a sustainable and profitable 
                tobacco business.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have grown from a small farming operation to a comprehensive tobacco 
                company that encompasses cultivation, processing, and distribution. Our commitment to 
                quality and sustainability has earned us recognition as a trusted partner in the industry.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our operations while maintaining our core 
                values of quality, integrity, and environmental responsibility.
              </p>
            </div>
            <div>
              <img
                src="./src/assets/images/shape-leaf.png"
                alt="Tobacco processing facility"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Founder & Chairman */}
        <section className="mb-16 bg-tobacco-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Our Founder & Chairman</h2>
            <p className="text-lg text-gray-600">Leadership that drives excellence and innovation</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="w-32 bg-tobacco-600 rounded-full border-spacing-2 border-tobacco-300 mx-auto lg:mx-0 flex items-center justify-center mb-4">
                  <img src="https://supersevenstars.com/wp-content/uploads/2023/05/say1.jpg" className='w-32' alt="" />
                </div>
                <h3 className="text-2xl font-bold text-tobacco-800 mb-2">U San Linn</h3>
                <p className="text-tobacco-600 font-semibold">Founder & Chairman</p>
              </div>
              
              <div className="space-y-4 text-gray-600">



                <p>U San Linn, the visionary Chairman of UA IntBev, has been instrumental in steering the company to success. With decades of experience in the tobacco industry, his leadership emphasizes ethical sourcing, sustainable farming, and maintaining the highest product quality standards. Under his guidance, UA IntBev has expanded both its product offerings and its presence in international markets, earning a reputation for excellence in tobacco production.

                </p>
                <p>His values of transparency, responsibility, and sustainability are core to the company’s culture, ensuring that UA IntBev’s growth benefits local communities and the environment.

                </p>
               
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-tobacco-800 mb-3">Vision</h4>
                <p className="text-gray-600">
                  "To become the leading tobacco company in Southeast Asia, known for our commitment 
                  to quality, sustainability, and innovation."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-tobacco-800 mb-3">Philosophy</h4>
                <p className="text-gray-600">
                  "Success comes from combining traditional wisdom with modern technology, 
                  always keeping sustainability and quality at the forefront of our operations."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-tobacco-800 mb-3">Achievements</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Established Unity Alliance as a market leader</li>
                  <li>• Developed sustainable farming practices</li>
                  <li>• Built international distribution networks</li>
                  <li>• Recognized for industry innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-tobacco-600" />
              </div>
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide premium quality tobacco products through sustainable farming practices 
                and efficient distribution networks while contributing to the economic development 
                of our communities.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-tobacco-600" />
              </div>
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading tobacco company in Southeast Asia, recognized for our commitment 
                to quality, innovation, and sustainable business practices.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-tobacco-600" />
              </div>
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Quality Excellence</li>
                <li>• Sustainability</li>
                <li>• Integrity</li>
                <li>• Innovation</li>
                <li>• Community Focus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Our Professional Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our talented professionals across 
              different departments, each bringing specialized knowledge and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-r ${member.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        {member.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-white/90">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-tobacco-800 mb-3 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Core Expertise
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-tobacco-400 rounded-full mr-2" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${member.color}`} />
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="bg-gradient-to-r from-tobacco-50 to-slate-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-tobacco-800 mb-2">Team Excellence</h3>
              <p className="text-gray-600">Our team's collective expertise and achievements</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-tobacco-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-tobacco-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-tobacco-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Professional Certifications</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-tobacco-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;