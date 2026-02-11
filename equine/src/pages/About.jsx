import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiShield, FiStar, FiHome, FiActivity } from 'react-icons/fi';

function About() {
  const team = [
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Lead Surgeon',
      specialization: 'Equine Surgery & Orthopedics',
      credentials: 'BVSc, MSc, Specialist Surgeon',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Dr. Mike Ross',
      role: 'Internal Medicine Specialist',
      specialization: 'Equine Internal Medicine',
      credentials: 'BVSc, MMedVet (Med)',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Reproduction Specialist',
      specialization: 'Equine Reproduction & Stud Medicine',
      credentials: 'BVSc, PhD (Reproduction)',
      image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Dr. David Chen',
      role: 'Diagnostic Imaging',
      specialization: 'Advanced Imaging & Diagnostics',
      credentials: 'BVSc, Dip ECVDI',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop',
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Ambulatory Veterinarian',
      specialization: 'Field Medicine & Preventative Care',
      credentials: 'BVSc, MSc',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Emergency & Critical Care',
      specialization: 'Emergency Medicine',
      credentials: 'BVSc, Cert Eq Emergency',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const facilities = [
    { icon: FiActivity, title: 'Surgical Theatres', desc: 'Two fully-equipped operating theatres with advanced monitoring systems.' },
    { icon: FiHome, title: 'Stabling & Paddocks', desc: '16 individual stables with 24-hour CCTV surveillance and dedicated nursing care.' },
    { icon: FiShield, title: 'Diagnostic Equipment', desc: 'State-of-the-art diagnostic facilities including digital radiography and ultrasonography.' },
    { icon: FiStar, title: 'ICU & Recovery', desc: 'Dedicated intensive care unit with advanced life support systems for critical cases.' },
  ];

  const values = [
    { icon: FiHeart, title: 'Compassionate Care', desc: 'We treat every horse as if it were our own, with dignity and respect.' },
    { icon: FiAward, title: 'Clinical Excellence', desc: 'Our team continuously advances their skills through education and research.' },
    { icon: FiShield, title: 'Trust & Transparency', desc: 'We communicate openly with owners about diagnosis, treatment, and costs.' },
  ];

  return (
    <div className="bg-warm-cream">
       {/* Hero */}
       <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-hunter-dark/60" />
        <div className="absolute inset-0 noise-texture" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Our Legacy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-xl font-light leading-relaxed"
          >
             For over four decades, Fourways Equine Clinic has been at the forefront of equine veterinary medicine in South Africa.
          </motion.p>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="font-display text-4xl text-hunter mb-4">Our Mission</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               To provide world-class veterinary care that enhances the health, performance, and longevity of every horse we treat.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {values.map((val, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-warm-cream p-8 rounded-2xl text-center hover-lift"
               >
                 <div className="w-16 h-16 bg-hunter text-white rounded-full flex items-center justify-center mx-auto mb-6">
                   <val.icon size={30} />
                 </div>
                 <h3 className="font-display text-2xl text-hunter mb-3">{val.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{val.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-hunter mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Seven highly qualified veterinarians with diverse specializations, united by their passion for equine medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg group hover-lift"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hunter-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <p className="text-white text-sm">{member.credentials}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-hunter font-bold mb-1">{member.name}</h3>
                <p className="text-emergency font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl text-hunter mb-6">State-of-the-Art Facilities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our purpose-built clinic offers everything needed for comprehensive equine care, from routine procedures to complex surgeries.
              </p>
              <div className="grid gap-6">
                {facilities.map((fac, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-hunter-light/10 text-hunter flex items-center justify-center flex-shrink-0">
                      <fac.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-hunter text-lg">{fac.title}</h3>
                      <p className="text-gray-600 text-sm">{fac.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop" 
                 alt="Facility" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-hunter text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-texture opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-display text-4xl mb-12 text-center">Our Heritage</h2>
          <div className="space-y-12 border-l-2 border-white/20 pl-8 ml-4 md:ml-0">
            {[
              { year: '1980', title: 'Foundation', desc: 'Fourways Equine Clinic established in Kyalami, Johannesburg.' },
              { year: '1995', title: 'Surgical Excellence', desc: 'Expanded to include state-of-the-art surgical facilities.' },
              { year: '2010', title: 'Advanced Diagnostics', desc: 'Invested in cutting-edge digital radiography and imaging.' },
              { year: '2026', title: 'Continuing Excellence', desc: 'Serving South Africa\'s equestrian community with seven specialists.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-emergency rounded-full border-4 border-hunter-dark" />
                <div className="font-display text-3xl mb-1 text-emergency">{item.year}</div>
                <div className="text-xl font-bold mb-2">{item.title}</div>
                <p className="text-gray-300 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;