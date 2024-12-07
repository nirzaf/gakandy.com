import React, { useState } from 'react';
import { HiPhone, HiMail, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { supabase } from '../lib/supabase';
import { ContactFormData } from '../types/contact';
import { toast } from 'react-hot-toast';
import { GoogleMap } from './GoogleMap';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const domain = window.location.hostname;
      const subjectWithDomain = `${formData.subject} (${domain})`;

      const { error } = await supabase
        .from('quadrate_contact_submissions')
        .insert([{
          ...formData,
          subject: subjectWithDomain
        }]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,32,74,0.03),transparent_40%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,32,74,0.03),transparent_40%)] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#00204A] mb-4">
            Get in Touch
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#00204A]/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Phone Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-[#00204A]/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#00204A]/5 rounded-lg">
                    <HiPhone className="w-6 h-6 text-[#00204A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00204A] mb-1">Phone</h3>
                    <a 
                      href="tel:+94 81 123 4567" 
                      className="text-lg text-[#00204A]/80 hover:text-[#00204A] hover:underline"
                    >
                      +94 81 123 4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-[#00204A]/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#00204A]/5 rounded-lg">
                    <HiMail className="w-6 h-6 text-[#00204A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00204A] mb-1">Email</h3>
                    <a 
                      href="mailto:info@gakandy.com" 
                      className="text-lg text-[#00204A]/80 hover:text-[#00204A] hover:underline"
                    >
                      info@gakandy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#00204A]/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#00204A]/90">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-[#00204A]/5 border border-[#00204A]/10 rounded-md shadow-sm focus:ring-2 focus:ring-[#00204A] focus:border-transparent text-[#00204A] placeholder-[#00204A]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#00204A]/90">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-[#00204A]/5 border border-[#00204A]/10 rounded-md shadow-sm focus:ring-2 focus:ring-[#00204A] focus:border-transparent text-[#00204A] placeholder-[#00204A]/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#00204A]/90">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-[#00204A]/5 border border-[#00204A]/10 rounded-md shadow-sm focus:ring-2 focus:ring-[#00204A] focus:border-transparent text-[#00204A] placeholder-[#00204A]/50"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#00204A]/90">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 bg-[#00204A]/5 border border-[#00204A]/10 rounded-md shadow-sm focus:ring-2 focus:ring-[#00204A] focus:border-transparent text-[#00204A] placeholder-[#00204A]/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#00204A] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-[#00204A]/90'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map, Business Hours */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Map Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <GoogleMap />
              </div>

              {/* Business Hours Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-[#00204A]/10">
                <h3 className="text-xl font-semibold text-[#00204A] mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#00204A]/70">Monday - Friday</span>
                    <span className="text-[#00204A] font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#00204A]/70">Saturday</span>
                    <span className="text-[#00204A] font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#00204A]/70">Sunday</span>
                    <span className="text-[#00204A]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00204A]/20 to-transparent"></div>
    </div>
  );
}