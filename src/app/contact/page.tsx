import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronRight, Home, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Lasante Vietnam',
  description: 'Get in touch with Lasante for inquiries, dealership opportunities, or customer support.',
};

export default function ContactUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="relative h-[300px] bg-[#1a2b4a] overflow-hidden">
        <img 
          src="/images/contact-bg.png" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white top-10">
          <h1 className="font-serif text-5xl font-medium mb-4 drop-shadow-md">Contact Us</h1>
          <p className="text-xl tracking-widest uppercase font-light drop-shadow">Connect / Support / Partner</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#C9A96E] transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#2d2d2d] font-medium">Contact</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl font-serif text-[#2d2d2d] mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            We are here to assist you. If you have any questions about our products, orders, or dealership opportunities, please feel free to reach out.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A96E] transition-colors duration-300">
                <MapPin className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#2d2d2d] mb-1">Office Address</h4>
                <p className="text-gray-600 leading-relaxed">42 Vo Thi Sau, Thanh Nhan Ward,<br/>Hai Ba Trung Dist, Hanoi, Vietnam</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A96E] transition-colors duration-300">
                <Phone className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#2d2d2d] mb-1">Phone Number</h4>
                <p className="text-gray-600 text-lg">0907.268.690</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A96E] transition-colors duration-300">
                <Mail className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#2d2d2d] mb-1">Email Address</h4>
                <p className="text-gray-600">lasantevietnam@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A96E] transition-colors duration-300">
                <Clock className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#2d2d2d] mb-1">Working Hours</h4>
                <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM<br/>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-2xl font-serif text-[#2d2d2d] mb-8">Send Us A Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Name *</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+84 123 456 789" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message *</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="bg-[#1a2b4a] hover:bg-[#C9A96E] text-white px-8 py-4 rounded-lg font-medium transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Map (Optional visual component) */}
      <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3638423605807!2d105.85043631533235!3d21.01812398600405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf3f5ba010d%3A0xe51de5fc625d9b50!2zNDIgVsO1IFRo4buLIFPDoXUsIFRoYW5oIE5ow6BuLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1655000000000!5m2!1sen!2s" 
          className="w-full h-full border-0 absolute inset-0 mix-blend-luminosity opacity-80" 
          loading="lazy"
        ></iframe>
      </div>
      
      <Footer />
    </>
  );
}
