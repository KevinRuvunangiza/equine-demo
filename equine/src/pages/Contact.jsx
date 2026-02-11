import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiAlertCircle, FiSend } from 'react-icons/fi';

const EMERGENCY_PHONE = '063 149 4716';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    horseName: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        horseName: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: [EMERGENCY_PHONE, 'Emergency Line (24/7)'],
      link: `tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`,
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@fourwaysequine.co.za', 'General Inquiries'],
      link: 'mailto:info@fourwaysequine.co.za',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      details: ['Kyalami, Johannesburg', 'Gauteng, South Africa'],
      link: null,
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: ['24/7 Emergency Service', 'Office: Mon-Fri 8AM-5PM'],
      link: null,
    },
  ];

  const reasons = [
    'Routine Examination',
    'Pre-Purchase Vetting',
    'Vaccination',
    'Dental Care',
    'Lameness Evaluation',
    'Reproduction Services',
    'Surgery Consultation',
    'Other',
  ];

  return (
    <div className="bg-warm-cream">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-hunter text-white overflow-hidden">
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Contact us for appointments, questions, or to discuss your horse's care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-8 bg-emergency">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-4 text-white"
          >
            <FiAlertCircle className="w-8 h-8 flex-shrink-0 animate-pulse" />
            <div className="text-center md:text-left">
              <div className="font-bold text-lg mb-1">FOR EMERGENCIES, DO NOT EMAIL</div>
              <div className="text-sm">
                Call <a href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`} className="underline font-semibold">{EMERGENCY_PHONE}</a> immediately for urgent veterinary care
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-warm-cream rounded-2xl p-6 text-center hover-lift"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-hunter rounded-full mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-hunter mb-3">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="block text-gray-700 hover:text-hunter transition-colors"
                  >
                    <div className="font-medium mb-1">{info.details[0]}</div>
                    <div className="text-sm text-gray-500">{info.details[1]}</div>
                  </a>
                ) : (
                  <div className="text-gray-700">
                    <div className="font-medium mb-1">{info.details[0]}</div>
                    <div className="text-sm text-gray-500">{info.details[1]}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-hunter mb-6">
                Visit Our Clinic
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Kyalami's equestrian community, our clinic is easily accessible from Johannesburg and surrounding areas.
              </p>
              
              {/* Google Map Placeholder */}
              <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-hunter opacity-10" />
                <div className="relative z-10 text-center p-8">
                  <FiMapPin className="w-16 h-16 text-hunter mx-auto mb-4" />
                  <div className="text-xl font-semibold text-charcoal mb-2">
                    Fourways Equine Clinic
                  </div>
                  <div className="text-gray-600">
                    Kyalami, Johannesburg<br />
                    Gauteng, South Africa
                  </div>
                  <div className="mt-6 text-sm text-gray-500">
                    [Google Map would be embedded here]
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="mt-6 p-6 bg-white rounded-xl">
                <h3 className="font-semibold text-hunter mb-3">Directions</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-hunter rounded-full mr-3 mt-1.5" />
                    <span>From Sandton: Take the N1 North, exit at Allandale Road</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-hunter rounded-full mr-3 mt-1.5" />
                    <span>From Pretoria: Take the N1 South, exit at Allandale Road</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-hunter rounded-full mr-3 mt-1.5" />
                    <span>Ample parking available on-site</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-hunter mb-6">
                Request an Appointment
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to schedule your visit.
              </p>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Name */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-hunter focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Horse's Name */}
                <div className="mb-6">
                  <label htmlFor="horseName" className="block text-sm font-semibold text-charcoal mb-2">
                    Horse's Name *
                  </label>
                  <input
                    type="text"
                    id="horseName"
                    name="horseName"
                    value={formData.horseName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-hunter focus:outline-none transition-colors"
                    placeholder="Champion"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-hunter focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-hunter focus:outline-none transition-colors"
                      placeholder="082 123 4567"
                    />
                  </div>
                </div>

                {/* Reason for Visit */}
                <div className="mb-6">
                  <label htmlFor="reason" className="block text-sm font-semibold text-charcoal mb-2">
                    Reason for Visit *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-hunter focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a reason</option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-hunter focus:outline-none transition-colors resize-none"
                    placeholder="Please provide any additional details about your horse's condition or your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hunter hover:bg-hunter-dark text-white px-6 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Request Appointment</span>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center"
                  >
                    <div className="font-semibold mb-1">Thank you for contacting us!</div>
                    <div className="text-sm">We'll get back to you within 24 hours.</div>
                  </motion.div>
                )}

                {/* Disclaimer */}
                <p className="mt-6 text-xs text-gray-500 text-center">
                  * For emergencies, please call {EMERGENCY_PHONE} immediately instead of using this form.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-hunter mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What should I do in an emergency?',
                answer: `Call our emergency line at ${EMERGENCY_PHONE} immediately. Our vets are on call 24/7 and can provide guidance or dispatch an ambulatory vet to your location.`,
              },
              {
                question: 'Do I need an appointment for routine care?',
                answer: 'Yes, we recommend scheduling appointments for routine examinations, vaccinations, and non-emergency procedures. This ensures we can give your horse the time and attention they deserve.',
              },
              {
                question: 'Can you come to my stable?',
                answer: 'Absolutely! Our ambulatory service covers the greater Johannesburg area. We can perform many procedures at your stable, including vaccinations, dental care, and routine examinations.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, credit/debit cards, and EFT payments. For planned procedures, we can provide detailed cost estimates in advance.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-warm-cream rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-hunter mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;