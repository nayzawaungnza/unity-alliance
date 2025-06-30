import { Heart, Users, Leaf, GraduationCap, Home, Droplets } from 'lucide-react';

const CSR = () => {
  const initiatives = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Community Development',
      description: 'Supporting local communities through infrastructure development, healthcare facilities, and social programs.',
      projects: [
        'Building community centers',
        'Healthcare facility improvements',
        'Local infrastructure development',
        'Community welfare programs'
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: 'Education Support',
      description: 'Investing in education to create opportunities for future generations and promote literacy in rural areas.',
      projects: [
        'School construction and renovation',
        'Scholarship programs',
        'Teacher training initiatives',
        'Educational material donations'
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: 'Environmental Protection',
      description: 'Implementing sustainable practices and environmental conservation programs to protect our natural resources.',
      projects: [
        'Reforestation programs',
        'Sustainable farming practices',
        'Waste reduction initiatives',
        'Water conservation projects'
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Healthcare Initiatives',
      description: 'Improving healthcare access and quality in underserved communities through various health programs.',
      projects: [
        'Mobile health clinics',
        'Health awareness campaigns',
        'Medical equipment donations',
        'Healthcare worker training'
      ]
    }
  ];

  const impacts = [
    { number: '50+', label: 'Communities Supported', icon: <Home className="w-6 h-6" /> },
    { number: '1000+', label: 'Students Benefited', icon: <GraduationCap className="w-6 h-6" /> },
    { number: '25+', label: 'Environmental Projects', icon: <Leaf className="w-6 h-6" /> },
    { number: '15+', label: 'Healthcare Programs', icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tobacco-800 mb-6">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Unity Alliance Co., Ltd, we believe in giving back to the communities that support us. 
            Our CSR initiatives focus on sustainable development, education, healthcare, and environmental protection.
          </p>
        </div>

        {/* Our Commitment */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-tobacco-600 to-tobacco-800 text-white rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Society</h2>
              <p className="text-xl text-tobacco-100 max-w-4xl mx-auto">
                We are committed to being a responsible corporate citizen, contributing to the social, 
                economic, and environmental well-being of the communities where we operate. Our CSR 
                programs are designed to create lasting positive impact and sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Measuring our contribution to community development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-4 text-tobacco-600">
                  {impact.icon}
                </div>
                <div className="text-3xl font-bold text-tobacco-800 mb-2">{impact.number}</div>
                <div className="text-gray-600">{impact.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CSR Initiatives */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Our Initiatives</h2>
            <p className="text-lg text-gray-600">
              Comprehensive programs addressing key areas of community development
            </p>
          </div>

          <div className="space-y-12">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {initiative.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-tobacco-800">{initiative.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{initiative.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-tobacco-700 mb-4">Key Projects:</h4>
                    <ul className="space-y-3">
                      {initiative.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-tobacco-600 rounded-full mr-3"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability Focus */}
        <section className="mb-16 bg-green-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Sustainability Focus</h2>
            <p className="text-lg text-gray-600">
              Our commitment to environmental stewardship and sustainable business practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tobacco-800 mb-3">Sustainable Farming</h3>
              <p className="text-gray-600">
                Implementing eco-friendly farming practices that protect soil health and biodiversity.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tobacco-800 mb-3">Water Conservation</h3>
              <p className="text-gray-600">
                Efficient water management systems and conservation programs to preserve this vital resource.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tobacco-800 mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Active participation in community development and stakeholder engagement programs.
              </p>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Future Goals</h2>
            <p className="text-lg text-gray-600">
              Our vision for expanding social impact and sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">2025 Targets</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Support 100+ communities across Myanmar
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Provide scholarships to 500+ students
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Plant 10,000+ trees for reforestation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Establish 20+ healthcare programs
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Long-term Vision</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Become carbon neutral by 2030
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Expand CSR programs regionally
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Create sustainable livelihood programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Partner with international NGOs
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-tobacco-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-tobacco-200 mb-8 max-w-2xl mx-auto">
            Partner with us in creating positive social impact. Together, we can build stronger, 
            more sustainable communities for future generations.
          </p>
          <a
            href="/contact"
            className="btn-secondary inline-flex items-center"
          >
            Get Involved
          </a>
        </section>
      </div>
    </div>
  );
};

export default CSR;