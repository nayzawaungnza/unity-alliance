import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-tobacco-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold">UA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Unity Alliance</h3>
                <p className="text-slate-300">Co., Ltd</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Leading tobacco farm planting and cigarettes distribution company committed to quality and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-tobacco-400" />
                <div>
                  <p>+336 528 112 35</p>
                  <p>+959 977 895 938</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-tobacco-400" />
                <div>
                  <p>naingwinaye@unity-alliance.com</p>
                  <p>hamid@supersevenstars.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-tobacco-400 mt-1" />
                <p>No.68/A, Kan Road, Hlaing Township, Yangon, Myanmar</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-slate-300 hover:text-tobacco-400 transition-colors">About</a>
              <div className="ml-4 space-y-1">
                <a href="/about" className="flex items-center text-slate-300 hover:text-tobacco-400 transition-colors text-sm">
                  <span className="text-slate-500 mr-2">»</span>
                  About Us
                </a>
                <a href="/csr" className="flex items-center text-slate-300 hover:text-tobacco-400 transition-colors text-sm">
                  <span className="text-slate-500 mr-2">»</span>
                  CSR
                </a>
              </div>
              <a href="/brand" className="block text-slate-300 hover:text-tobacco-400 transition-colors">Our Brands</a>
              <a href="/agronomy" className="block text-slate-300 hover:text-tobacco-400 transition-colors">Agronomy</a>
              <a href="/contact" className="block text-slate-300 hover:text-tobacco-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © 2024 Unity Alliance Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;