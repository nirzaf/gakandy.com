import React from 'react';

interface GoogleMapProps {
  className?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-[450px] rounded-xl overflow-hidden ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.472708088047!2d80.63361057459565!3d7.300667992707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367d45ab920db%3A0x1eeb09eedbfaedea!2sGlobal%20Associates!5e0!3m2!1sen!2slk!4v1733557637971!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
