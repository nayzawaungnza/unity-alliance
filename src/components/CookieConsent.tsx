import  { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    hideBanner();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    // Clear any existing cookies/tracking
    clearCookies();
    hideBanner();
  };

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const clearCookies = () => {
    // Clear non-essential cookies
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      // Only clear non-essential cookies (preserve essential ones)
      if (!['cookieConsent', 'cookieConsentDate'].includes(name)) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isAnimating ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
    }`}>
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Cookie Icon and Content */}
            <div className="flex items-start space-x-4 flex-1">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-tobacco-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-tobacco-600" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-tobacco-800">Cookie Preferences</h3>
                  <Shield className="w-4 h-4 text-tobacco-600" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or reject 
                  non-essential cookies by clicking "Reject".
                </p>
                
                <div className="mt-2">
                  <Link 
                    to="/cookie-policy" 
                    className="text-tobacco-600 hover:text-tobacco-700 text-sm font-medium underline transition-colors duration-200"
                  >
                    Learn more about our cookie policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <button
                onClick={handleReject}
                className="flex items-center justify-center px-6 py-2.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md min-w-[120px]"
              >
                <X className="w-4 h-4 mr-2" />
                Reject
              </button>
              
              <button
                onClick={handleAccept}
                className="flex items-center justify-center px-6 py-2.5 bg-tobacco-600 hover:bg-tobacco-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg min-w-[120px]"
              >
                <Check className="w-4 h-4 mr-2" />
                Accept All
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-gradient-to-r from-tobacco-500 via-tobacco-600 to-tobacco-500"></div>
      </div>
    </div>
  );
};

export default CookieConsent;