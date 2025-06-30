import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../assets/css/Header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      hasDropdown: true,
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'CSR', href: '/csr' }
      ]
    },
    { name: 'Our Brands', href: '/brand' },
    { name: 'Agronomy', href: '/agronomy' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActiveRoute = (href: string, submenu?: any[]) => {
    if (submenu) {
      return submenu.some(item => location.pathname === item.href);
    }
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-tobacco-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">UA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-tobacco-800">Unity Alliance</h1>
                <p className="text-sm text-slate-600">Co., Ltd</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group flex items-center">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`relative flex items-center justify-center space-x-1 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 hover:scale-105 h-10 ${
                        isActiveRoute(item.href, item.submenu)
                          ? 'text-white bg-tobacco-500 shadow-lg shadow-tobacco-500/30'
                          : 'text-slate-700 hover:text-tobacco-600 hover:bg-tobacco-50'
                      }`}
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          isAboutDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                      {isActiveRoute(item.href, item.submenu) && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full shadow-sm"></div>
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        isAboutDropdownOpen 
                          ? 'opacity-100 visible transform translate-y-0' 
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      {item.submenu?.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`flex items-center px-4 py-3 text-sm transition-colors duration-200 ${
                            location.pathname === subItem.href
                              ? 'text-tobacco-600 bg-tobacco-50 border-r-2 border-tobacco-600'
                              : 'text-slate-700 hover:text-tobacco-600 hover:bg-tobacco-50'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative flex items-center justify-center px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 hover:scale-105 h-10 ${
                      location.pathname === item.href
                        ? 'text-white bg-tobacco-500 shadow-lg shadow-tobacco-500/30'
                        : 'text-slate-700 hover:text-tobacco-600 hover:bg-tobacco-50'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full shadow-sm"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-slate-700 hover:text-tobacco-600 focus:outline-none focus:text-tobacco-600 transition-colors duration-200"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white border-t border-slate-200">
            {navigation.map((item, index) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <div
                      className={`relative flex items-center px-4 py-3 rounded-sm text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                        isActiveRoute(item.href, item.submenu)
                          ? 'text-white bg-tobacco-500 shadow-lg shadow-tobacco-500/30'
                          : 'text-slate-700 hover:text-tobacco-600 hover:bg-tobacco-50'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{item.name}</span>
                        <div className="flex items-center space-x-2">
                          {isActiveRoute(item.href, item.submenu) && (
                            <div className="w-2 h-2 bg-gold-400 rounded-full shadow-sm"></div>
                          )}
                          <div className="w-1.5 h-1.5 bg-current rounded-full opacity-30"></div>
                        </div>
                      </div>
                      {isActiveRoute(item.href, item.submenu) && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gold-500 rounded-r-full shadow-sm"></div>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    <div className="ml-4 space-y-1">
                      {item.submenu?.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`flex items-center px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 ${
                            location.pathname === subItem.href
                              ? 'text-tobacco-600 bg-tobacco-50 border-l-2 border-tobacco-600'
                              : 'text-slate-600 hover:text-tobacco-600 hover:bg-tobacco-50'
                          }`}
                          style={{
                            animationDelay: `${(index + subIndex + 1) * 50}ms`,
                            animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                          }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative flex items-center px-4 py-3 rounded-sm text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                      location.pathname === item.href
                        ? 'text-white bg-tobacco-500 shadow-lg shadow-tobacco-500/30'
                        : 'text-slate-700 hover:text-tobacco-600 hover:bg-tobacco-50'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{item.name}</span>
                      <div className="flex items-center space-x-2">
                        {location.pathname === item.href && (
                          <div className="w-2 h-2 bg-gold-400 rounded-full shadow-sm"></div>
                        )}
                        <div className="w-1.5 h-1.5 bg-current rounded-full opacity-30"></div>
                      </div>
                    </div>
                    {location.pathname === item.href && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gold-500 rounded-r-full shadow-sm"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Header;