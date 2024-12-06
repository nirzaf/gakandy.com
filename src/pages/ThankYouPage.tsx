import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"
      >
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold text-indigoDye-primary mb-4">
          Thank You for Contacting Us!
        </h1>
        <p className="text-gray-600 mb-8">
          We have received your message and will get back to you as soon as possible.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigoDye-primary hover:bg-indigoDye-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
