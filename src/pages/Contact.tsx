import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: './src/assets/images/gps.png',
  iconUrl: './src/assets/images/gps.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS credentials
  const serviceId = 'service_w22844x';
  const templateId = 'template_q9ilf7o';
  const publicKey = 'FHSkf0NsFFDDbXETt';
  const isEmailConfigured = serviceId && templateId && publicKey && !serviceId.includes('YOUR_') && !templateId.includes('YOUR_') && !publicKey.includes('YOUR_');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'naingwinaye@unity-alliance.com',
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapCenter: LatLngExpression = [16.8345, 96.1286]; // Explicitly type as LatLngExpression

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tobacco-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Unity Alliance Co., Ltd. We're here to answer your questions 
            and discuss potential partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-tobacco-800 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tobacco-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-tobacco-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tobacco-800 mb-2">Phone Numbers</h3>
                  <p className="text-gray-600">+336 528 112 35</p>
                  <p className="text-gray-600">+959 977 895 938</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tobacco-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-tobacco-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tobacco-800 mb-2">Email Addresses</h3>
                  <p className="text-gray-600">naingwinaye@unity-alliance.com</p>
                  <p className="text-gray-600">hamid@supersevenstars.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tobacco-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-tobacco-600" />
                  </div>
                </div>
                <div className="text-balance flex-1">
                  <h3 className="text-lg font-semibold text-tobacco-800 mb-2">Address</h3>
                  <p className="text-gray-600">
                    No.68/A, Kan Road, Hlaing Township, Yangon, Myanmar
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tobacco-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-tobacco-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tobacco-800 mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-8">
              <MapContainer
                center={mapCenter}
                zoom={20}
                style={{ height: '256px', width: '100%', borderRadius: '8px' }}
                className="shadow-inner border border-gray-500"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mapCenter}>
                  <Popup>
                    <h4 className="font-bold text-tobacco-600">Unity Alliance Co., Ltd.</h4>
                    <br />
                    No.68/A, Kan Road, Hlaing Township, Yangon, Myanmar
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-tobacco-800 mb-6">Send us a Message</h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Failed to send message</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tobacco-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tobacco-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tobacco-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tobacco-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tobacco-600 hover:bg-tobacco-700 disabled:bg-tobacco-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:hover:scale-100 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* EmailJS Setup Instructions */}
              {!isEmailConfigured && (
                <div className="mt-6 p-4 bg-tobacco-50 rounded-lg border border-tobacco-200">
                  <h4 className="text-sm font-semibold text-tobacco-800 mb-2">Email Configuration Required</h4>
                  <p className="text-xs text-tobacco-600">
                    To enable email functionality, please configure EmailJS with your service credentials in the Contact.tsx file.
                    Visit <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a> to set up your account.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;