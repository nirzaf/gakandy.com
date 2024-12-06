import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';
import Button from '../shared/Button';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '../../utils/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Message sent successfully!');
      setTimeout(() => {
        navigate('/thanks');
      }, 1000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+9481-2225 488',
        '+94777654509',
        '+94764760225'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@gakandy.com',
        'aashikkhan@gakandy.com'
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'No 291, D.S Senanayake Veediya,',
        'Kandy, Sri Lanka'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigoDye-primary font-serif mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={slideInFromLeft}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <TextArea
                  label="Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  loading={loading}
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pictonBlue-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigoDye-primary mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
