import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import mikeIcon from "../../assets/mike.avif"
import threeD from "../../assets/3D.avif"
import dev from "../../assets/dev.avif"

const Services = () => {
  const serviceData = [
    {
      id: "brand",
      title: "Brand",
      items: ["Brand identity", "Positioning", "Motion design", "Animation"],
      bgColor: "bg-[#FFEBE7]",
      borderColor: "border-orange-100",
      icon: mikeIcon,
      iconPos: "-top-5 right-1 md:-right-7 w-30 md:w-40",
      checkBg: "bg-orange-500"
    },
    {
      id: "3d",
      title: "3D",
      items: ["Marketing Asset", "Guidelines", "Stream Asset", "Website Asset"],
      bgColor: "bg-[#E1F9FF]",
      borderColor: "border-cyan-100",
      icon: threeD,
      iconPos: "-top-4 right-1 md:-right-5 w-28 md:w-37",
      checkBg: "bg-cyan-500"
    },
    {
      id: "dev",
      title: "Dev",
      items: ["Framer", "Nuxt", "Webflow", "Front-end"],
      bgColor: "bg-[#EDE9FF]",
      borderColor: "border-indigo-100",
      icon: dev,
      iconPos: "-top-4 right-1 md:-right-5 w-28 md:w-37",
      checkBg: "bg-indigo-500"
    }
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    },
  };

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 italic">
            Web projects that create <br className="hidden md:block" /> meaningful impact
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            We plan, design, and refine websites that feel calm, confident, and commercially useful.
          </p>
        </motion.div>

        {/* Services Grid with Stagger Effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceData.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }} 
              className={`relative h-[320px] rounded-[2.5rem] p-12 border ${item.borderColor} ${item.bgColor} overflow-visible group`}
            >
              {/* Content Area */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-10">{item.title}</h3>
                
                <ul className="space-y-5">
                  {item.items.map((li, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-bold tracking-tight">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${item.checkBg} flex items-center justify-center`}>
                        <FiCheck className="text-white text-[12px] stroke-[4]" />
                      </div>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3D Icons with separate floating animation */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.12}
                animate={{ 
                  y: [0, -10, 0], 
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, cursor: 'grab' }}
                whileTap={{ scale: 0.9, cursor: 'grabbing' }}
                className={`absolute ${item.iconPos} z-20 select-none drop-shadow-2xl`}
              >
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-full h-auto pointer-events-none"
                  draggable="false"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;