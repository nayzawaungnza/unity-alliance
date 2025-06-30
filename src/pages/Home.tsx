import React from 'react';
import { Leaf, Users, Award, Globe, TrendingUp, Factory, Shield, Target } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-tobacco-600" />,
      title: 'Premium Tobacco Cultivation',
      description: 'We cultivate the finest tobacco leaves using sustainable farming practices and traditional expertise.'
    },
    {
      icon: <Globe className="w-8 h-8 text-tobacco-600" />,
      title: 'Global Distribution Network',
      description: 'Our extensive distribution network ensures quality cigarettes reach customers worldwide.'
    },
    {
      icon: <Award className="w-8 h-8 text-tobacco-600" />,
      title: 'Quality Assurance',
      description: 'Every product meets the highest standards of quality and consistency through rigorous testing.'
    },
    {
      icon: <Users className="w-8 h-8 text-tobacco-600" />,
      title: 'Expert Team',
      description: 'Our experienced team combines traditional knowledge with modern agricultural techniques.'
    }
  ];

  const partnerships = [
    {
      title: 'Manufacturing Partners',
      description: 'We seek reliable manufacturing partners with state-of-the-art facilities and quality certifications.',
      requirements: ['ISO certification', 'Minimum 10 years experience', 'Quality control systems', 'Sustainable practices']
    },
    {
      title: 'Distribution Partners',
      description: 'Looking for distribution partners to expand our reach in key markets worldwide.',
      requirements: ['Established distribution network', 'Market expertise', 'Regulatory compliance', 'Brand commitment']
    },
    {
      title: 'Supply Chain Partners',
      description: 'We welcome partnerships with suppliers who share our commitment to quality and sustainability.',
      requirements: ['Sustainable sourcing', 'Quality materials', 'Reliable delivery', 'Competitive pricing']
    }
  ];

  const statistics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-tobacco-500" />,
      number: '15+',
      label: 'Years of Excellence',
      description: 'Proven track record in tobacco industry',
      color: 'from-tobacco-500 to-tobacco-600'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      number: '500+',
      label: 'Hectares Cultivated',
      description: 'Premium tobacco farming land',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Factory className="w-8 h-8 text-blue-500" />,
      number: '25+',
      label: 'Distribution Partners',
      description: 'Global network coverage',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      number: '100%',
      label: 'Quality Commitment',
      description: 'Uncompromising standards',
      color: 'from-gold-500 to-gold-600'
    }
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative">
        <ImageSlider />
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tobacco-800 mb-4">
              Welcome to Unity Alliance Co., Ltd
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A leading tobacco farm planting and cigarettes distribution company committed to excellence, 
              quality, and sustainable practices. We bridge the gap between premium tobacco cultivation 
              and global distribution networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-tobacco-50 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-tobacco-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Requirements Section */}
      <section className="py-16 bg-tobacco-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tobacco-800 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are actively seeking strategic partnerships to expand our operations and enhance our service offerings. 
              Join us in building a sustainable and profitable tobacco industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-tobacco-800 mb-4">{partnership.title}</h3>
                <p className="text-gray-600 mb-6">{partnership.description}</p>
                <div>
                  <h4 className="font-semibold text-tobacco-700 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {partnership.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-tobacco-600 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Contact Us for Partnership
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-tobacco-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-tobacco-200 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and sustainable growth in the tobacco industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-tobacco-200 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-300">
                    {stat.description}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-tobacco-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <Target className="w-8 h-8 text-tobacco-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">95%</div>
              <div className="text-tobacco-200">Customer Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <Globe className="w-8 h-8 text-tobacco-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">12</div>
              <div className="text-tobacco-200">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <Award className="w-8 h-8 text-tobacco-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">8</div>
              <div className="text-tobacco-200">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;