import { motion } from "framer-motion";
import { Scissors, GraduationCap, HandMetal, BookOpen, Award, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-salon.jpg";

const reasons = [
  { icon: Scissors, title: "In-Salon Training", desc: "Professional salon environment." },
  { icon: GraduationCap, title: "Expert Trainers", desc: "Learn from senior stylists." },
  { icon: HandMetal, title: "100% Hands-On", desc: "Practice on real clients." },
  { icon: BookOpen, title: "Pro Curriculum", desc: "Basics to trending styles." },
  { icon: Award, title: "Certification", desc: "Industry recognized credentials." },
  { icon: Briefcase, title: "Career Support", desc: "Placement & freelance help." },
];

const WhyChoose = () => (
  <section 
    id="course" 
    className="py-16 md:py-24 px-6 lg:px-14" 
    style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF7ED 100%)' }}
  >
    <div className="container mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
        <p className="font-inter font-bold text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3 md:mb-4" style={{ color: '#906B3A' }}>
          Our Excellence
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl font-medium leading-tight" style={{ color: '#2C2521' }}>
          Why <span className="italic" style={{ color: '#906B3A' }}>Lumière Luxe</span> Academy?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Reasons Grid - Updated to 2 columns on mobile */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-10 md:gap-x-12 md:gap-y-16">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 p-2 rounded-lg" style={{ backgroundColor: 'rgba(144, 107, 58, 0.05)' }}>
                   <r.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#906B3A' }} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-playfair text-sm md:text-lg font-bold tracking-tight mb-1" style={{ color: '#2C2521' }}>
                    {r.title}
                  </h3>
                  <p className="font-inter text-[11px] md:text-sm leading-snug" style={{ color: '#7C716A' }}>
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative w-full max-w-[280px] md:max-w-sm">
            <div className="absolute -inset-2 md:-inset-3 border border-[#906B3A]/20 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5" />
            <img
              src={aboutImage}
              alt="Professional Training"
              className="relative w-full aspect-square object-cover shadow-2xl grayscale-[15%]"
            />
            
            {/* Elegant 8-Weeks Seal */}
            <div 
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center border-2 shadow-2xl z-10"
              style={{ backgroundColor: '#2C2521', borderColor: '#906B3A' }}
            >
              <span className="text-lg md:text-xl font-playfair font-bold text-white leading-none">8</span>
              <span className="text-[8px] md:text-[9px] uppercase mt-0.5 tracking-[0.1em] text-[#906B3A]">Weeks</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default WhyChoose;