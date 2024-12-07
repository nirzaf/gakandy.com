import Contact from '../components/Contact';
import AppointmentCalendar from '../components/contact/AppointmentCalendar';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
      
      {/* Appointment Calendar Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AppointmentCalendar />
          </div>
        </div>
      </section>
    </div>
  );
}
