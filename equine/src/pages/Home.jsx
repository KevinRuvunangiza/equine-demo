import { motion } from "framer-motion";
import {
  FiPhone,
  FiHeart,
  FiActivity,
  FiUsers,
  FiHome,
  FiTruck,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const EMERGENCY_PHONE = "063 149 4716";

function Home() {
  const stats = [
    {
      icon: FiHome,
      number: "16",
      label: "Stables",
      description: "24hr Surveillance",
    },
    {
      icon: FiUsers,
      number: "7",
      label: "Specialist Vets",
      description: "Expert Team",
    },
    {
      icon: FiActivity,
      number: "24/7",
      label: "Emergency Care",
      description: "Always Available",
    },
  ];

  const services = [
    {
      icon: FiHeart,
      title: "Hospital & Surgery",
      description:
        "State-of-the-art surgical facilities with advanced diagnostic equipment. From colic surgery to arthroscopy, we provide comprehensive surgical care.",
      features: [
        "Colic Surgery",
        "Arthroscopy",
        "Critical Care",
        "Post-Op Monitoring",
      ],
      link: "/services",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop",
    },
    {
      icon: FiTruck,
      title: "Ambulatory Services",
      description:
        "Complete mobile veterinary care at your stable. Our fully-equipped ambulatory service brings expert care directly to your horse.",
      features: [
        "Vaccinations",
        "Pre-Purchase Vettings",
        "Dental Care",
        "Lameness Exams",
      ],
      link: "/services",
      image:
        "https://images.unsplash.com/photo-1598524627892-23fdbb0e86f0?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: FiAward,
      title: "Reproduction & Stud",
      description:
        "Expert reproductive services including AI, pregnancy monitoring, and foaling support. We help ensure the next generation of champions.",
      features: [
        "Artificial Insemination",
        "Foaling Support",
        "Pregnancy Monitoring",
        "Breeding Consultation",
      ],
      link: "/services",
      image:
        "https://images.unsplash.com/photo-1570116686731-c593e98bfbca?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-warm-cream">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Vet examining horse */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 61, 50, 0.6), rgba(31, 61, 50, 0.4)), 
              url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop')`,
          }}
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 noise-texture" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              World-Class Equine Medicine in Kyalami
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Dedicated to the health and excellence of your horse since 1980
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
              className="bg-emergency hover:bg-emergency-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl flex items-center space-x-3 group"
            >
              <FiPhone className="w-6 h-6 group-hover:animate-pulse" />
              <span>Call Vet on Duty</span>
            </a>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center space-x-3"
            >
              <span>Our Services</span>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-white/80 text-sm uppercase tracking-widest"
          >
            Serving Johannesburg's Equestrian Community Since 1980
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-warm-cream hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hunter rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-display text-5xl text-hunter mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-charcoal mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-hunter mb-4">
              Comprehensive Equine Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine care to advanced surgery, we provide complete
              veterinary services for your horse
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <Link to={service.link} className="block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift h-full">
                    {/* Image Header with Icon Overlay */}
                    <div
                      className="h-48 relative overflow-hidden bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(rgba(46, 93, 75, 0.7), rgba(46, 93, 75, 0.5)), url(${service.image})`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="w-20 h-20 text-white relative z-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="font-display text-3xl text-hunter mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-hunter rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="text-hunter font-semibold group-hover:underline">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-hunter mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our purpose-built clinic in Kyalami offers everything your horse
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Feature Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:row-span-2"
            >
              <div
                className="h-full min-h-[400px] rounded-3xl bg-cover bg-center relative overflow-hidden group hover-lift"
                style={{
                  backgroundImage: `linear-gradient(rgba(46, 93, 75, 0.2), rgba(46, 93, 75, 0.3)), 
                    url('https://images.unsplash.com/photo-1588176084490-a3a04f88fe8a?q=80&w=2070&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-hunter-dark to-transparent">
                  <h3 className="text-2xl font-display text-white mb-2">
                    Premium Stabling
                  </h3>
                  <p className="text-gray-200">
                    16 individual stables with 24-hour surveillance
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div
                className="h-[200px] rounded-3xl bg-cover bg-center relative overflow-hidden group hover-lift"
                style={{
                  backgroundImage: `linear-gradient(rgba(46, 93, 75, 0.2), rgba(46, 93, 75, 0.3)), 
                    url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2070&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-hunter-dark to-transparent">
                  <h3 className="text-xl font-display text-white mb-1">
                    Surgical Suites
                  </h3>
                  <p className="text-sm text-gray-200">
                    State-of-the-art equipment
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="h-[200px] rounded-3xl bg-cover bg-center relative overflow-hidden group hover-lift"
                style={{
                  backgroundImage: `linear-gradient(rgba(46, 93, 75, 0.2), rgba(46, 93, 75, 0.3)), 
                    url('https://images.unsplash.com/photo-1602850974154-f3a1d7b4c4a3?q=80&w=2069&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-hunter-dark to-transparent">
                  <h3 className="text-xl font-display text-white mb-1">
                    Paddock Access
                  </h3>
                  <p className="text-sm text-gray-200">
                    Individual turnout areas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 61, 50, 0.9), rgba(31, 61, 50, 0.85)), 
              url('https://images.unsplash.com/photo-1446162203966-1e5709d41187?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Our emergency ambulatory service is available 24/7 to provide
              expert care when your horse needs it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
                className="bg-emergency hover:bg-emergency-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl inline-flex items-center justify-center space-x-3"
              >
                <FiPhone className="w-6 h-6" />
                <span>Emergency: {EMERGENCY_PHONE}</span>
              </a>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
