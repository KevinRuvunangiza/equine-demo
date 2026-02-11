import { motion } from 'framer-motion';
import { FiHeart, FiTruck, FiAward, FiActivity, FiEye, FiCrosshair, FiShield, FiStar, FiTrendingUp } from 'react-icons/fi';

function Services() {
  const serviceCategories = [
    {
      category: 'Hospital & Surgical Services',
      icon: FiHeart,
      color: 'bg-hunter',
      description: 'Advanced surgical and critical care facilities for complex cases',
      services: [
        {
          icon: FiActivity,
          name: 'Colic Surgery',
          description: 'Emergency abdominal surgery with advanced monitoring and intensive post-operative care.',
          details: ['24/7 emergency availability', 'Advanced monitoring', 'Specialist surgeons', 'ICU recovery'],
        },
        {
          icon: FiCrosshair,
          name: 'Arthroscopy',
          description: 'Minimally invasive joint surgery for diagnosis and treatment of lameness.',
          details: ['Keyhole surgery', 'Faster recovery', 'Reduced scarring', 'State-of-the-art equipment'],
        },
        {
          icon: FiShield,
          name: 'Critical Care & ICU',
          description: 'Intensive monitoring and treatment for critically ill horses.',
          details: ['24-hour nursing', 'Advanced life support', 'Continuous monitoring', 'IV therapy'],
        },
        {
          icon: FiEye,
          name: 'Diagnostic Imaging',
          description: 'Digital radiography, ultrasonography, and endoscopy for accurate diagnosis.',
          details: ['Digital X-ray', 'Ultrasound', 'Gastroscopy', 'Respiratory endoscopy'],
        },
        {
          icon: FiActivity,
          name: 'Soft Tissue Surgery',
          description: 'Advanced surgical procedures for wounds, masses, and other soft tissue conditions.',
          details: ['Wound reconstruction', 'Mass removal', 'Hernia repair', 'Specialist techniques'],
        },
        {
          icon: FiStar,
          name: 'Post-Operative Care',
          description: 'Comprehensive recovery and rehabilitation following surgery.',
          details: ['Padded recovery boxes', 'Pain management', 'Physiotherapy', 'Gradual return to work'],
        },
      ],
    },
    {
      category: 'Ambulatory Services',
      icon: FiTruck,
      color: 'bg-hunter-dark',
      description: 'Complete mobile veterinary care at your stable or farm',
      services: [
        {
          icon: FiShield,
          name: 'Vaccinations',
          description: 'Routine and specialized vaccination programs tailored to your horse.',
          details: ['Equine influenza', 'Tetanus', 'Rabies', 'African Horse Sickness'],
        },
        {
          icon: FiEye,
          name: 'Pre-Purchase Vettings',
          description: 'Comprehensive clinical examination for horses being bought or sold.',
          details: ['Full clinical exam', 'Radiography available', 'Detailed report', 'Video documentation'],
        },
        {
          icon: FiActivity,
          name: 'Lameness Examinations',
          description: 'Thorough assessment of lameness with advanced diagnostic techniques.',
          details: ['Flexion tests', 'Nerve blocks', 'Imaging', 'Treatment plans'],
        },
        {
          icon: FiCrosshair,
          name: 'Dental Care',
          description: 'Professional dental examinations and treatment for optimal oral health.',
          details: ['Power floating', 'Wolf tooth removal', 'Sedation available', 'Regular maintenance'],
        },
        {
          icon: FiTrendingUp,
          name: 'Performance Medicine',
          description: 'Medical support for competition horses to optimize performance.',
          details: ['Fitness assessment', 'Medication protocols', 'Competition preparation', 'Recovery support'],
        },
        {
          icon: FiShield,
          name: 'Passport & Export',
          description: 'Health certificates and documentation for travel and export.',
          details: ['Coggins testing', 'Export certificates', 'Travel advice', 'Quarantine support'],
        },
      ],
    },
    {
      category: 'Reproduction & Stud Services',
      icon: FiAward,
      color: 'bg-hunter-light',
      description: 'Expert reproductive services for breeding excellence',
      services: [
        {
          icon: FiStar,
          name: 'Artificial Insemination',
          description: 'Advanced reproductive technologies including fresh, chilled, and frozen semen.',
          details: ['Fresh semen AI', 'Chilled semen AI', 'Frozen semen AI', 'Embryo transfer'],
        },
        {
          icon: FiHeart,
          name: 'Foaling Support',
          description: '24-hour foaling attendance and neonatal care for safe deliveries.',
          details: ['Foaling supervision', 'Dystocia assistance', 'Neonatal care', 'Post-foaling checks'],
        },
        {
          icon: FiEye,
          name: 'Pregnancy Monitoring',
          description: 'Ultrasound scanning and monitoring throughout pregnancy.',
          details: ['Early pregnancy detection', 'Fetal viability checks', 'Twin reduction', 'Pre-foaling scans'],
        },
        {
          icon: FiActivity,
          name: 'Breeding Soundness',
          description: 'Comprehensive fertility evaluation for mares and stallions.',
          details: ['Mare reproductive exams', 'Stallion breeding exams', 'Semen evaluation', 'Fertility treatments'],
        },
        {
          icon: FiTrendingUp,
          name: 'Stud Management',
          description: 'Complete stud farm veterinary support and management.',
          details: ['Breeding programs', 'Synchronization', 'Health protocols', 'Record keeping'],
        },
        {
          icon: FiShield,
          name: 'Reproductive Surgery',
          description: 'Specialized surgical procedures for reproductive conditions.',
          details: ['Caslick procedures', 'Ovariectomy', 'Cesarean section', 'Retained placenta'],
        },
      ],
    },
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
              Comprehensive Equine Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              From routine preventative care to advanced surgery, we provide the complete spectrum of equine veterinary services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={category.category} 
          className={categoryIndex % 2 === 0 ? 'py-24 bg-white' : 'py-24 bg-warm-cream'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-full mb-6`}>
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-hunter mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.05 }}
                  className={`${
                    categoryIndex % 2 === 0 ? 'bg-warm-cream' : 'bg-white'
                  } rounded-2xl p-8 shadow-md hover-lift`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-xl mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-hunter mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-hunter rounded-full mr-3 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Emergency Services Callout */}
      <section className="py-24 bg-hunter text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emergency rounded-full mb-6">
              <FiActivity className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              24/7 Emergency Service
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Our ambulatory emergency service operates around the clock. Whether it's colic, lacerations, or acute lameness, our experienced vets are ready to respond immediately.
            </p>
            <a
              href="tel:0631494716"
              className="inline-flex items-center bg-emergency hover:bg-emergency-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl space-x-3"
            >
              <FiActivity className="w-6 h-6" />
              <span>Call Emergency: 063 149 4716</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-hunter mb-4">
              Why Choose Fourways Equine?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiStar,
                title: 'Specialist Team',
                description: 'Seven qualified vets with diverse specializations',
              },
              {
                icon: FiShield,
                title: 'Advanced Facilities',
                description: 'State-of-the-art surgical and diagnostic equipment',
              },
              {
                icon: FiActivity,
                title: '24/7 Availability',
                description: 'Round-the-clock emergency service and care',
              },
              {
                icon: FiHeart,
                title: '40+ Years',
                description: 'Four decades of equine excellence since 1980',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hunter rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-hunter mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;