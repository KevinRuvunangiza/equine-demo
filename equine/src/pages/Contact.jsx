import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend, FiClock, FiAlertCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const EMERGENCY_PHONE = '063 149 4716';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', horseName: '', email: '', phone: '', reason: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', horseName: '', email: '', phone: '', reason: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const faqs = [
    { q: 'What should I do in an emergency?', a: `Call our emergency line at ${EMERGENCY_PHONE} immediately. Our vets are on call 24/7.` },
    { q: 'Do I need an appointment for routine care?', a: 'Yes, we recommend scheduling appointments for routine exams and vaccinations.' },
    { q: 'Can you come to my stable?', a: 'Absolutely! Our ambulatory service covers the greater Johannesburg area.' },
    { q: 'What payment methods do you accept?', a: 'We accept cash, credit/debit cards, and EFT payments.' },
  ];

  return (
    <div className="bg-warm-cream">
       <div className="relative h-[50vh] flex items-center justify-center bg-hunter-dark overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534096210335-a3b9615e3e9e?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 noise-texture" />
        <h1 className="font-display text-5xl md:text-7xl text-white relative z-10 mt-20">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
         {/* Emergency Warning */}
         <div className="bg-emergency text-white p-6 rounded-2xl shadow-xl flex items-center justify-center gap-4 mb-12 animate-pulse-glow">
            <FiAlertCircle size={24} />
            <div className="font-bold">FOR EMERGENCIES: Call {EMERGENCY_PHONE} immediately. Do not email.</div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Left Column: Info & Map */}
           <div className="space-y-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg">
               <h2 className="font-display text-3xl text-hunter mb-8">Get in Touch</h2>
               <div className="space-y-6">
                  {[
                    { icon: FiPhone, title: 'Phone', text: '063 149 4716 (24/7)', sub: 'Emergency Line' },
                    { icon: FiMail, title: 'Email', text: 'info@fourwaysequine.co.za', sub: 'General Inquiries' },
                    { icon: FiMapPin, title: 'Visit Us', text: 'Kyalami, Johannesburg', sub: 'Gauteng, South Africa' },
                    { icon: FiClock, title: 'Hours', text: 'Mon-Fri: 8am - 5pm', sub: '24/7 Emergency Service' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center text-hunter flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal">{item.title}</h3>
                        <p className="text-hunter font-medium">{item.text}</p>
                        <p className="text-gray-500 text-sm">{item.sub}</p>
                      </div>
                    </div>
                  ))}
               </div>
             </div>

             {/* Map Placeholder */}
             <div className="bg-white p-4 rounded-3xl shadow-lg h-80 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gray-200">
                   {/* In a real app, embed Google Maps iframe here */}
                   <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">
                      <div className="text-center">
                        <FiMapPin size={40} className="mx-auto mb-2 text-hunter" />
                        <span className="font-display text-xl">Map Location</span>
                        <p className="text-sm px-8 mt-2">Kyalami, Johannesburg</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Directions */}
             <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="font-bold text-hunter mb-4">Directions</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                   <li>• From Sandton: Take N1 North, exit Allandale Road.</li>
                   <li>• From Pretoria: Take N1 South, exit Allandale Road.</li>
                   <li>• Ample parking available for horseboxes.</li>
                </ul>
             </div>
           </div>

           {/* Right Column: Form & FAQ */}
           <div className="space-y-8">
              {/* Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-4 border-hunter">
                 <h2 className="font-display text-3xl text-hunter mb-2">Request Appointment</h2>
                 <p className="text-gray-500 mb-8">We'll get back to you within 24 hours.</p>
                 
                 <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                         <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hunter focus:ring-1 focus:ring-hunter outline-none transition-all" />
                       </div>
                       <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Horse's Name</label>
                         <input required name="horseName" value={formData.horseName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hunter focus:ring-1 focus:ring-hunter outline-none transition-all" />
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                         <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hunter focus:ring-1 focus:ring-hunter outline-none transition-all" />
                       </div>
                       <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                         <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hunter focus:ring-1 focus:ring-hunter outline-none transition-all" />
                       </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Reason for Visit</label>
                      <select name="reason" value={formData.reason} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hunter focus:ring-1 focus:ring-hunter outline-none transition-all">
                        <option value="">Select a reason</option>
                        <option value="Routine">Routine Examination</option>
                        <option value="Vetting">Pre-Purchase Vetting</option>
                        <option value="Vaccination">Vaccination</option>
                        <option value="Dental">Dental Care</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hunter focus:ring-1 focus:ring-hunter outline-none transition-all" placeholder="Tell us more about your requirements..." />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-hunter text-white font-bold py-4 rounded-xl hover:bg-hunter-dark transition-all transform hover:-translate-y-1 shadow-md flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : <><FiSend /> Send Request</>}
                    </button>

                    {submitStatus === 'success' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-50 text-green-800 rounded-xl text-center font-medium">
                        Request sent successfully! We'll be in touch.
                      </motion.div>
                    )}
                 </form>
              </div>

              {/* FAQ Accordion */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                 <h2 className="font-display text-2xl text-hunter mb-6">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                   {faqs.map((faq, i) => (
                     <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                       <button 
                         onClick={() => setOpenFaq(openFaq === i ? null : i)}
                         className="w-full flex justify-between items-center text-left font-bold text-charcoal hover:text-hunter transition-colors"
                       >
                         {faq.q}
                         {openFaq === i ? <FiChevronUp /> : <FiChevronDown />}
                       </button>
                       {openFaq === i && (
                         <motion.p 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           className="mt-2 text-gray-600 text-sm leading-relaxed"
                         >
                           {faq.a}
                         </motion.p>
                       )}
                     </div>
                   ))}
                 </div>
              </div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default Contact;