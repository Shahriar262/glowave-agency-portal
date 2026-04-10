import React from "react";
import FastMarquee from "react-fast-marquee";
import {
  SiFigma,
  SiFramer,
  SiReact,
  SiTailwindcss,
  SiWebflow,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";

const MarqueeSection = () => {
  const Marquee = FastMarquee.default || FastMarquee;

  const partners = [
    { name: "Figma", icon: SiFigma },
    { name: "Framer", icon: SiFramer },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Webflow", icon: SiWebflow },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vite", icon: SiVite },
    { name: "Adobe", icon: TbBrandAdobe },
  ];

  return (
    <section className="py-20 overflow-hidden mt-2 md:mt-20">
      <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white border border-slate-200 shadow rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Trusted by 2,000+ teams
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          Powering world-class digital experiences.
        </h2>
      </div>

      <div className="relative">
        {/* Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64  z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 z-10 pointer-events-none" />

        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {partners.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 mx-12 md:mx-20 group"
              >
                <span className="text-3xl md:text-5xl  group-hover:text-brand-blue transition-all duration-300 cursor-pointer">
                  <Icon />
                </span>
                <span className="text-xl md:text-2xl font-bold  group-hover:text-[#0f172a] transition-all duration-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeSection;
