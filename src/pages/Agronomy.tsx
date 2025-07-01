import { Sprout, Sun, Droplets, Microscope, BarChart3, Shield } from 'lucide-react';
const Agronomy = () => {
  const practices = [
    {
      icon: <Sprout className="w-8 h-8 text-green-600" />,
      title: 'Seed Selection & Cultivation',
      description: 'We use premium tobacco seeds and advanced cultivation techniques to ensure optimal plant growth and leaf quality.',
      details: [
        'High-quality seed varieties',
        'Optimal planting density',
        'Growth monitoring systems',
        'Harvest timing optimization'
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: 'Water Management',
      description: 'Efficient irrigation systems and water conservation practices ensure optimal moisture levels for tobacco plants.',
      details: [
        'Drip irrigation systems',
        'Soil moisture monitoring',
        'Water conservation techniques',
        'Drainage management'
      ]
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-600" />,
      title: 'Climate Control',
      description: 'Understanding and managing environmental factors to create ideal growing conditions for premium tobacco.',
      details: [
        'Temperature monitoring',
        'Humidity control',
        'Seasonal planning',
        'Weather adaptation strategies'
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'Pest & Disease Management',
      description: 'Integrated pest management approaches to protect crops while maintaining environmental sustainability.',
      details: [
        'Biological pest control',
        'Disease prevention programs',
        'Sustainable pesticide use',
        'Crop rotation strategies'
      ]
    }
  ];

  const technologies = [
    {
      icon: <Microscope className="w-8 h-8 text-tobacco-600" />,
      title: 'Soil Analysis',
      description: 'Advanced soil testing and analysis to optimize nutrient management and soil health.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-tobacco-600" />,
      title: 'Data Analytics',
      description: 'Using data-driven insights to improve farming decisions and crop yields.'
    },
    {
      icon: <Sun className="w-8 h-8 text-tobacco-600" />,
      title: 'Weather Monitoring',
      description: 'Real-time weather tracking and forecasting for optimal farming operations.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tobacco-800 mb-6">Agronomy Excellence</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our agronomic expertise combines traditional farming wisdom with modern agricultural science 
            to produce the highest quality tobacco leaves. We focus on sustainable practices that benefit 
            both our crops and the environment.
          </p>
        </div>

        {/* Hero Image */}
        <section className="mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://supersevenstars.com/wp-content/uploads/2025/07/Image-Tobacco.jpg"
              alt="Tobacco farming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Tobacco Cultivation</h2>
                <p className="text-xl">Where tradition meets innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Farming Practices */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Our Farming Practices</h2>
            <p className="text-lg text-gray-600">
              Comprehensive agricultural approaches that ensure quality, sustainability, and productivity
            </p>
          </div>

          <div className="space-y-12">
            {practices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {practice.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-tobacco-800">{practice.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{practice.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-tobacco-700 mb-4">Key Elements:</h4>
                    <ul className="space-y-3">
                      {practice.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-tobacco-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Integration */}
        <section className="mb-16 bg-tobacco-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Technology Integration</h2>
            <p className="text-lg text-gray-600">
              Leveraging modern technology to enhance traditional farming practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-tobacco-800 mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability Commitment */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-tobacco-800 mb-6">Sustainability Commitment</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our agronomic practices are designed with sustainability at their core. We believe in 
                farming methods that not only produce high-quality tobacco but also preserve the 
                environment for future generations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tobacco-800">Soil Health Management</h4>
                    <p className="text-gray-600">Maintaining soil fertility through organic matter and crop rotation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tobacco-800">Water Conservation</h4>
                    <p className="text-gray-600">Efficient irrigation systems that minimize water waste</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tobacco-800">Biodiversity Protection</h4>
                    <p className="text-gray-600">Preserving natural habitats and promoting beneficial insects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://supersevenstars.com/wp-content/uploads/2025/07/Image-Tobacco.jpg"
                alt="Sustainable farming"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Quality Standards</h2>
            <p className="text-lg text-gray-600">
              Our rigorous quality control processes ensure every tobacco leaf meets the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-tobacco-600 mb-2">95%</div>
              <div className="text-gray-600">Quality Grade A+</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-tobacco-600 mb-2">500+</div>
              <div className="text-gray-600">Hectares Under Cultivation</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-tobacco-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-tobacco-600 mb-2">100%</div>
              <div className="text-gray-600">Sustainable Practices</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-tobacco-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Partner with Our Agronomy Team</h2>
          <p className="text-xl text-tobacco-200 mb-8 max-w-2xl mx-auto">
            Learn more about our sustainable farming practices and how we can work together 
            to produce premium quality tobacco.
          </p>
          <a
            href="/contact"
            className="btn-secondary inline-flex items-center"
          >
            Contact Our Agronomists
          </a>
        </section>
      </div>
    </div>
  );
};

export default Agronomy;