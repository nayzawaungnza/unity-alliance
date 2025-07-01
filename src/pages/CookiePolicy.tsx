import React from 'react';
import { Shield, Cookie, Eye, Lock, Settings, Calendar } from 'lucide-react';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Session management', 'Security tokens', 'Cookie consent preferences'],
      retention: 'Session or 1 year',
      required: true
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Google Analytics', 'Page views', 'User behavior tracking'],
      retention: '2 years',
      required: false
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'Region settings', 'Accessibility options'],
      retention: '1 year',
      required: false
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-600" />,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness.',
      examples: ['Ad targeting', 'Social media integration', 'Marketing campaigns'],
      retention: '1-2 years',
      required: false
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-tobacco-100 rounded-full flex items-center justify-center">
              <Cookie className="w-8 h-8 text-tobacco-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-tobacco-800 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This Cookie Policy explains how Unity Alliance Co., Ltd uses cookies and similar technologies 
            when you visit our website.
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: December 2024
          </div>
        </div>

        {/* What are Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-6">What are Cookies?</h2>
          <div className="bg-tobacco-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners. 
              Cookies allow websites to remember your preferences, improve your browsing experience, and provide 
              personalized content.
            </p>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-6">How We Use Cookies</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Unity Alliance Co., Ltd uses cookies to enhance your experience on our website, analyze website traffic, 
            and understand where our visitors are coming from. We use both first-party cookies (set by our website) 
            and third-party cookies (set by external services we use).
          </p>
        </section>

        {/* Types of Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-8">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-tobacco-800">{type.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        type.required 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {type.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-tobacco-700 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-tobacco-400 rounded-full mr-2"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-tobacco-700 mb-2">Retention Period:</h4>
                        <p className="text-sm text-gray-600">{type.retention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-6">Managing Your Cookie Preferences</h2>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-tobacco-800 mb-4">You have several options to manage cookies:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-tobacco-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-tobacco-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-tobacco-700">Browser Settings</h4>
                  <p className="text-gray-600 text-sm">Most browsers allow you to control cookies through their settings preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-tobacco-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-tobacco-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-tobacco-700">Cookie Banner</h4>
                  <p className="text-gray-600 text-sm">Use our cookie consent banner to accept or reject non-essential cookies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-tobacco-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-tobacco-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-tobacco-700">Third-Party Opt-Out</h4>
                  <p className="text-gray-600 text-sm">Visit third-party websites directly to manage their cookies and tracking preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-6">Third-Party Services</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may use third-party services that set their own cookies. These services include:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-tobacco-600 rounded-full mr-3"></div>
                <span><strong>Google Analytics:</strong> For website analytics and performance monitoring</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-tobacco-600 rounded-full mr-3"></div>
                <span><strong>Social Media Platforms:</strong> For social sharing and integration features</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-tobacco-600 rounded-full mr-3"></div>
                <span><strong>Email Services:</strong> For contact form functionality and communication</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-6">Contact Us</h2>
          <div className="bg-tobacco-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Cookie Policy or our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> naingwinaye@unity-alliance.com</p>
              <p><strong>Phone:</strong> +336 528 112 35</p>
              <p><strong>Address:</strong> No.68/A, Kan Road, Hlaing Township, Yangon, Myanmar</p>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-tobacco-800 mb-6">Policy Updates</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
            updated policy on our website with a new "Last updated" date.
          </p>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-tobacco-600 hover:bg-tobacco-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;