import { Award, Star, Globe, Shield } from 'lucide-react';

const Brand = () => {
  const brands = [
    {
      name: 'Lord Original',
      description: 'Our flagship premium cigarette brand, crafted from the finest tobacco leaves.',
      features: ['Premium Virginia tobacco', 'Gold-tipped filter', 'Smooth taste', 'Elegant packaging'],
      image: './src/assets/images/LordOriginal.jpg'
    },
    {
      name: 'Lord Blue',
      description: 'A traditional blend that combines heritage with modern quality standards.',
      features: ['Traditional blend', 'Consistent quality', 'Affordable pricing', 'Wide availability'],
      image: './src/assets/images/LordBlue.jpg'
    },
    // {
    //   name: 'Unity Special',
    //   description: 'Specially crafted for discerning smokers who appreciate quality and tradition.',
    //   features: ['Special tobacco blend', 'Enhanced flavor', 'Premium quality', 'Limited edition'],
    //   image: 'https://images.pexels.com/photos/4022091/pexels-photo-4022091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    // }
  ];

  const qualities = [
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: 'Premium Quality',
      description: 'Every cigarette is crafted using the finest tobacco leaves, ensuring consistent quality and taste.'
    },
    {
      icon: <Star className="w-8 h-8 text-gold-500" />,
      title: 'Expert Craftsmanship',
      description: 'Our experienced team combines traditional methods with modern technology for superior products.'
    },
    {
      icon: <Globe className="w-8 h-8 text-gold-500" />,
      title: 'Global Standards',
      description: 'All our brands meet international quality standards and regulatory requirements.'
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure every product meets our high standards.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tobacco-800 mb-6">Our Brands</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium cigarette brands, each crafted with care and attention to detail. 
            From traditional blends to premium selections, we offer quality products for every preference.
          </p>
        </div>

        {/* Brand Showcase */}
        <section className="mb-16">
          <div className="space-y-12">
            {brands.map((brand, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-tobacco-800 mb-4">{brand.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{brand.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-tobacco-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {brand.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16 bg-tobacco-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Why Choose Our Brands</h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence is reflected in every aspect of our brand development and production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {quality.icon}
                </div>
                <h3 className="text-xl font-semibold text-tobacco-800 mb-3">{quality.title}</h3>
                <p className="text-gray-600">{quality.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tobacco-800 mb-4">Our Brand Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Unity Alliance brand is built on our core values of quality, tradition, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Heritage</h3>
              <p className="text-gray-600">
                Our brands honor the rich tradition of tobacco cultivation and cigarette craftsmanship, 
                passed down through generations of expertise.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate our products and processes to meet evolving consumer preferences 
                while maintaining our commitment to quality.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-tobacco-800 mb-4">Responsibility</h3>
              <p className="text-gray-600">
                All our brands are developed with a focus on responsible manufacturing practices 
                and adherence to international standards.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-tobacco-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Brands?</h2>
          <p className="text-xl text-tobacco-200 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our brand portfolio, distribution opportunities, 
            or partnership possibilities.
          </p>
          <a
            href="/contact"
            className="btn-secondary inline-flex items-center"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default Brand;