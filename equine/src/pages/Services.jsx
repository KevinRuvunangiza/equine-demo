import { motion } from 'framer-motion';
import { FiHeart, FiTruck, FiAward, FiActivity, FiEye, FiCrosshair, FiShield, FiStar, FiTrendingUp } from 'react-icons/fi';

function Services() {
  const serviceCategories = [
    {
      category: 'Hospital & Surgical Services',
      icon: FiHeart,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-100',
      description: 'Advanced surgical and critical care facilities for complex cases',
      services: [
        {
          name: 'Colic Surgery',
          desc: 'Emergency abdominal surgery with advanced monitoring.',
          details: ['24/7 emergency availability', 'Advanced monitoring', 'Specialist surgeons', 'ICU recovery'],
          icon: FiActivity
        },
        {
          name: 'Arthroscopy',
          desc: 'Minimally invasive joint surgery for diagnosis and treatment.',
          details: ['Keyhole surgery', 'Faster recovery', 'Reduced scarring', 'State-of-the-art equipment'],
          icon: FiCrosshair
        },
        {
          name: 'Critical Care & ICU',
          desc: 'Intensive monitoring and treatment for critically ill horses.',
          details: ['24-hour nursing', 'Advanced life support', 'Continuous monitoring', 'IV therapy'],
          icon: FiShield
        },
        {
          name: 'Diagnostic Imaging',
          desc: 'Digital radiography, ultrasonography, and endoscopy.',
          details: ['Digital X-ray', 'Ultrasound', 'Gastroscopy', 'Respiratory endoscopy'],
          icon: FiEye
        },
        {
          name: 'Soft Tissue Surgery',
          desc: 'Advanced surgical procedures for wounds and masses.',
          details: ['Wound reconstruction', 'Mass removal', 'Hernia repair', 'Specialist techniques'],
          icon: FiActivity
        },
        {
          name: 'Post-Operative Care',
          desc: 'Comprehensive recovery and rehabilitation following surgery.',
          details: ['Padded recovery boxes', 'Pain management', 'Physiotherapy', 'Gradual return to work'],
          icon: FiStar
        },
      ],
    },
    {
      category: 'Ambulatory Services',
      icon: FiTruck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      description: 'Complete mobile veterinary care at your stable or farm',
      services: [
        {
          name: 'Vaccinations',
          desc: 'Routine and specialized vaccination programs.',
          details: ['Equine influenza', 'Tetanus', 'Rabies', 'African Horse Sickness'],
          icon: FiShield
        },
        {
          name: 'Pre-Purchase Vettings',
          desc: 'Comprehensive clinical examination for buyers.',
          details: ['Full clinical exam', 'Radiography available', 'Detailed report', 'Video documentation'],
          icon: FiEye
        },
        {
          name: 'Lameness Examinations',
          desc: 'Thorough assessment of lameness with diagnostics.',
          details: ['Flexion tests', 'Nerve blocks', 'Imaging', 'Treatment plans'],
          icon: FiActivity
        },
        {
          name: 'Dental Care',
          desc: 'Professional dental examinations and treatment.',
          details: ['Power floating', 'Wolf tooth removal', 'Sedation available', 'Regular maintenance'],
          icon: FiCrosshair
        },
        {
          name: 'Performance Medicine',
          desc: 'Medical support for competition horses.',
          details: ['Fitness assessment', 'Medication protocols', 'Competition preparation', 'Recovery support'],
          icon: FiTrendingUp
        },
        {
          name: 'Passport & Export',
          desc: 'Health certificates and documentation.',
          details: ['Coggins testing', 'Export certificates', 'Travel advice', 'Quarantine support'],
          icon: FiShield
        },
      ],
    },
    {
      category: 'Reproduction & Stud Services',
      icon: FiAward,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      description: 'Expert reproductive services for breeding excellence',
      services: [
        {
          name: 'Artificial Insemination',
          desc: 'Advanced reproductive technologies.',
          details: ['Fresh semen AI', 'Chilled semen AI', 'Frozen semen AI', 'Embryo transfer'],
          icon: FiStar
        },
        {
          name: 'Foaling Support',
          desc: '24-hour foaling attendance and neonatal care.',
          details: ['Foaling supervision', 'Dystocia assistance', 'Neonatal care', 'Post-foaling checks'],
          icon: FiHeart
        },
        {
          name: 'Pregnancy Monitoring',
          desc: 'Ultrasound scanning throughout pregnancy.',
          details: ['Early pregnancy detection', 'Fetal viability checks', 'Twin reduction', 'Pre-foaling scans'],
          icon: FiEye
        },
        {
          name: 'Breeding Soundness',
          desc: 'Comprehensive fertility evaluation.',
          details: ['Mare reproductive exams', 'Stallion breeding exams', 'Semen evaluation', 'Fertility treatments'],
          icon: FiActivity
        },
        {
          name: 'Stud Management',
          desc: 'Complete stud farm veterinary support.',
          details: ['Breeding programs', 'Synchronization', 'Health protocols', 'Record keeping'],
          icon: FiTrendingUp
        },
        {
          name: 'Reproductive Surgery',
          desc: 'Specialized surgical procedures.',
          details: ['Caslick procedures', 'Ovariectomy', 'Cesarean section', 'Retained placenta'],
          icon: FiShield
        },
      ],
    },
  ];

  return (
    <div className="bg-warm-cream">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598524627892-23fdbb0e86f0?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-hunter-dark/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emergency font-bold tracking-widest uppercase mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Clinical Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 font-light leading-relaxed"
          >
            From routine preventative care to advanced surgery, we provide the complete spectrum of equine veterinary services.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        {serviceCategories.map((cat, idx) => (
          <motion.div 
            key={cat.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-32 last:mb-0"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-b border-gray-200 pb-8">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${cat.bgColor} ${cat.color} shadow-sm`}>
                <cat.icon size={40} />
              </div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-hunter mb-2">{cat.category}</h2>
                <p className="text-xl text-gray-500">{cat.description}</p>
              </div>
            </div>
            
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.services.map((service, sIdx) => (
                <motion.div 
                  key={service.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.05 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover-lift border border-gray-100 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${cat.bgColor} ${cat.color}`}>
                      <service.icon size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-hunter mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[40px]">{service.desc}</p>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <ul className="space-y-3">
                      {service.details.map(d => (
                        <li key={d} className="flex items-start text-sm text-gray-600 group-hover:text-hunter transition-colors">
                          <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0 ${cat.color.replace('text', 'bg')}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;