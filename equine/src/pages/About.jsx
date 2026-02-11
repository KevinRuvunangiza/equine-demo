import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiShield, FiStar, FiHome, FiActivity } from 'react-icons/fi';

function About() {
  const team = [
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Lead Surgeon',
      specialization: 'Equine Surgery & Orthopedics',
      credentials: 'BVSc, MSc, Specialist Surgeon',
      image: 'linear-gradient(135deg, #2E5D4B 0%, #3D7360 100%)',
    },
    {
      name: 'Dr. Mike Ross',
      role: 'Internal Medicine Specialist',
      specialization: 'Equine Internal Medicine',
      credentials: 'BVSc, MMedVet (Med)',
      image: 'linear-gradient(135deg, #1F3D32 0%, #2E5D4B 100%)',
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Reproduction Specialist',
      specialization: 'Equine Reproduction & Stud Medicine',
      credentials: 'BVSc, PhD (Reproduction)',
      image: 'linear-gradient(135deg, #3D7360 0%, #4A8A74 100%)',
    },
    {
      name: 'Dr. David Chen',
      role: 'Diagnostic Imaging',
      specialization: 'Advanced Imaging & Diagnostics',
      credentials: 'BVSc, Dip ECVDI',
      image: 'linear-gradient(135deg, #2E5D4B 0%, #1F3D32 100%)',
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Ambulatory Veterinarian',
      specialization: 'Field Medicine & Preventative Care',
      credentials: 'BVSc, MSc',
      image: 'linear-gradient(135deg, #4A8A74 0%, #3D7360 100%)',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Emergency & Critical Care',
      specialization: 'Emergency Medicine',
      credentials: 'BVSc, Cert Eq Emergency',
      image: 'linear-gradient(135deg, #1F3D32 0%, #3D7360 100%)',
    },
  ];

  const facilities = [
    {
      icon: FiActivity,
      title: 'Surgical Theatres',
      description: 'Two fully-equipped operating theatres with advanced monitoring systems and recovery facilities.',
      features: ['Gas anesthesia', 'Digital X-ray', 'Padded recovery boxes'],
    },
    {
      icon: FiHome,
      title: 'Stabling & Paddocks',
      description: '16 individual stables with 24-hour CCTV surveillance and dedicated nursing care.',
      features: ['24hr monitoring', 'Climate controlled', 'Individual turnout paddocks'],
    },
    {
      icon: FiShield,
      title: 'Diagnostic Equipment',
      description: 'State-of-the-art diagnostic facilities including digital radiography and ultrasonography.',
      features: ['Digital radiography', 'Ultrasound', 'Endoscopy', 'Laboratory'],
    },
    {
      icon: FiStar,
      title: 'ICU & Recovery',
      description: 'Dedicated intensive care unit with advanced life support systems for critical cases.',
      features: ['Continuous monitoring', 'IV therapy', 'Specialist nursing'],
    },
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Compassionate Care',
      description: 'We treat every horse as if it were our own, with dignity and respect.',
    },
    {
      icon: FiAward,
      title: 'Clinical Excellence',
      description: 'Our team continuously advances their skills through education and research.',
    },
    {
      icon: FiShield,
      title: 'Trust & Transparency',
      description: 'We communicate openly with owners about diagnosis, treatment, and costs.',
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
              Dedicated to the Horse Since 1980
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              For over four decades, Fourways Equine Clinic has been at the forefront of equine veterinary medicine in South Africa, combining advanced medical expertise with genuine care for your horse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-hunter mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To provide world-class veterinary care that enhances the health, performance, and longevity of every horse we treat, while supporting the passionate horse owners and trainers who trust us with their animals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-warm-cream hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hunter rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-hunter mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-hunter mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven highly qualified veterinarians with diverse specializations, united by their passion for equine medicine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
              >
                {/* Avatar Placeholder */}
                <div 
                  className="h-64 flex items-center justify-center relative overflow-hidden"
                  style={{ background: member.image }}
                >
                  <div className="absolute inset-0 noise-texture" />
                  <div className="relative z-10 text-white text-6xl font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-hunter mb-1">{member.name}</h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-700 mb-2">{member.specialization}</p>
                  <p className="text-sm text-gray-500">{member.credentials}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
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
              Our purpose-built clinic offers everything needed for comprehensive equine care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-warm-cream rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-hunter rounded-xl flex items-center justify-center">
                      <facility.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-hunter mb-3">{facility.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-hunter rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-hunter text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              Our Heritage
            </h2>
            <p className="text-xl text-gray-200">
              Four decades of dedication to equine excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="border-l-4 border-white/30 pl-8 py-4">
              <div className="text-3xl font-display mb-2">1980</div>
              <div className="text-xl mb-2">Foundation</div>
              <p className="text-gray-300">
                Fourways Equine Clinic established in Kyalami, Johannesburg, with a vision to provide specialized equine care.
              </p>
            </div>

            <div className="border-l-4 border-white/30 pl-8 py-4">
              <div className="text-3xl font-display mb-2">1995</div>
              <div className="text-xl mb-2">Surgical Excellence</div>
              <p className="text-gray-300">
                Expanded to include state-of-the-art surgical facilities, becoming a referral center for complex cases.
              </p>
            </div>

            <div className="border-l-4 border-white/30 pl-8 py-4">
              <div className="text-3xl font-display mb-2">2010</div>
              <div className="text-xl mb-2">Advanced Diagnostics</div>
              <p className="text-gray-300">
                Invested in cutting-edge diagnostic equipment including digital radiography and advanced imaging systems.
              </p>
            </div>

            <div className="border-l-4 border-white pl-8 py-4">
              <div className="text-3xl font-display mb-2">2026</div>
              <div className="text-xl mb-2">Continuing Excellence</div>
              <p className="text-gray-300">
                Serving South Africa's equestrian community with seven specialist veterinarians and comprehensive care facilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;