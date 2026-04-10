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
      iconPos: "-top-5 right-1 md:-right-7 w-30  md:w-40",
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

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-6">
            Web projects that create <br className="hidden md:block" /> meaningful impact
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            We plan, design, and refine websites that feel calm, confident, and commercially useful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((item) => (
            <div 
              key={item.id}
              className={`relative h-[320px] rounded-[2.5rem] p-12 border ${item.borderColor} ${item.bgColor} overflow-visible`}
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

              {/* Draggable 3D Icons positioning */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.12}
                whileHover={{ scale: 1.05, cursor: 'grab' }}
                whileTap={{ scale: 0.95, cursor: 'grabbing' }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`absolute ${item.iconPos} z-20 select-none drop-shadow-2xl`}
              >
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-full h-auto pointer-events-none"
                  draggable="false"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;