import { motion } from "framer-motion";
import { FiPhone, FiHeart, FiActivity, FiUsers, FiHome, FiTruck, FiAward, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const EMERGENCY_PHONE = "063 149 4716";

function Home() {
  const stats = [
    { icon: FiHome, number: "16", label: "Stables", description: "24hr Surveillance" },
    { icon: FiUsers, number: "7", label: "Specialist Vets", description: "Expert Team" },
    { icon: FiActivity, number: "24/7", label: "Emergency Care", description: "Always Available" },
  ];

  const services = [
    {
      icon: FiHeart,
      title: "Hospital & Surgery",
      description: "State-of-the-art surgical facilities with advanced diagnostic equipment. From colic surgery to arthroscopy, we provide comprehensive surgical care.",
      features: ["Colic Surgery", "Arthroscopy", "Critical Care", "Post-Op Monitoring"],
      link: "/services",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop",
    },
    {
      icon: FiTruck,
      title: "Ambulatory Services",
      description: "Complete mobile veterinary care at your stable. Our fully-equipped ambulatory service brings expert care directly to your horse.",
      features: ["Vaccinations", "Pre-Purchase Vettings", "Dental Care", "Lameness Exams"],
      link: "/services",
      image: "https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: FiAward,
      title: "Reproduction & Stud",
      description: "Expert reproductive services including AI, pregnancy monitoring, and foaling support. We help ensure the next generation of champions.",
      features: ["Artificial Insemination", "Foaling Support", "Pregnancy Monitoring", "Breeding Consultation"],
      link: "/services",
      image: "https://images.unsplash.com/photo-1547581849-38ba650ad0de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-warm-cream">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 61, 50, 0.4), rgba(31, 61, 50, 0.3)), 
              url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 noise-texture" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-white/30 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm tracking-[0.2em] uppercase mb-8">
              Since 1980
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-white mb-6 leading-[0.9] drop-shadow-2xl">
              World-Class <br/> Equine Medicine
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light drop-shadow-md"
          >
             Dedicated to the health and excellence of your horse in Kyalami.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
              className="bg-emergency hover:bg-emergency-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:scale-105 flex items-center space-x-3 group"
            >
              <FiPhone className="w-6 h-6 group-hover:animate-pulse" />
              <span>Call Vet on Duty</span>
            </a>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-hunter border-2 border-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-2"
            >
              <span>Our Services</span>
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Floating Stats */}
      <section className="relative -mt-24 z-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-2xl hover-lift flex flex-col items-center text-center border-t-4 border-hunter relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-700">
                  <stat.icon className="w-32 h-32 text-hunter" />
                </div>
                <div className="w-16 h-16 bg-warm-cream rounded-2xl flex items-center justify-center mb-6 text-hunter">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="font-display text-5xl text-hunter mb-2 font-bold">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-charcoal mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl text-hunter mb-6">Comprehensive Equine Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine care to advanced surgery, we provide complete veterinary services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[600px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl"
              >
                <Link to={service.link}>
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hunter-dark via-hunter-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-white mb-4">{service.title}</h3>
                      <p className="text-gray-200 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {service.description}
                      </p>
                      
                      {/* Features List (Visible on Hover) */}
                      <ul className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-center text-white/90 text-sm">
                            <div className="w-1.5 h-1.5 bg-emergency rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-white font-bold tracking-widest text-sm group-hover:text-emergency transition-colors">
                        LEARN MORE <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Bento Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-hunter mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Purpose-built clinic in Kyalami offering everything your horse needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
             {/* Large Left Image - Stables */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:col-span-8 rounded-3xl overflow-hidden relative group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Stables" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-display text-3xl">Premium Stabling</h3>
                  <p className="text-gray-300 mt-2">16 individual stables with 24-hour surveillance</p>
                </div>
             </motion.div>

             {/* Top Right - Surgery */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="lg:col-span-4 bg-hunter-light rounded-3xl overflow-hidden relative group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Surgery" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <FiActivity className="text-white w-8 h-8 mb-4" />
                  <h3 className="text-white font-display text-2xl mb-1">Surgical Suites</h3>
                  <p className="text-white/80 text-sm">State-of-the-art equipment</p>
                </div>
             </motion.div>

             {/* Bottom Left - Paddock */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="lg:col-span-5 bg-hunter-dark rounded-3xl overflow-hidden relative group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1647875028604-b32263c1dcf6?q=80&w=651&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Paddocks" 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-display text-2xl">Paddock Access</h3>
                  <p className="text-gray-300 text-sm mt-1">Individual turnout areas</p>
                </div>
             </motion.div>

             {/* Bottom Right - Text Block */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="lg:col-span-7 bg-warm-cream rounded-3xl p-10 flex flex-col justify-center items-start border border-gray-100"
             >
                <h3 className="font-display text-3xl text-hunter mb-4">Visit Our Clinic</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located in the heart of the equestrian community, our facilities are designed for the comfort and safety of your horse.
                </p>
                <Link to="/contact" className="text-hunter font-bold tracking-wider hover:text-emergency transition-colors flex items-center gap-2">
                  VIEW MAP <FiArrowRight />
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446162203966-1e5709d41187?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-hunter-dark/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
              Our emergency ambulatory service is available 24/7 to provide expert care when your horse needs it most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
                className="bg-emergency hover:bg-emergency-dark text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FiPhone /> Emergency: {EMERGENCY_PHONE}
              </a>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-hunter px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center"
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