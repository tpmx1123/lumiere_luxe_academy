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
    className="py-24 px-6 lg:px-14" 
    style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF7ED 100%)' }}
  >
    <div className="container mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="font-inter font-bold text-xs tracking-[0.5em] uppercase mb-4" style={{ color: '#906B3A' }}>
          Our Excellence
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-medium leading-tight" style={{ color: '#2C2521' }}>
          Why <span className="italic" style={{ color: '#906B3A' }}>Lumière Luxe</span> Academy?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Reasons Grid */}
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6" // Using items-center to keep icon in the middle of the text block
              >
                {/* Icon Container - Centered vertically relative to title + desc */}
                <div className="flex-shrink-0">
                   <r.icon className="w-6 h-6" style={{ color: '#906B3A' }} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-playfair text-lg font-bold tracking-tight mb-1" style={{ color: '#2C2521' }}>
                    {r.title}
                  </h3>
                  <p className="font-inter text-sm leading-snug" style={{ color: '#7C716A' }}>
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
          className="relative w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 border border-[#906B3A]/20 translate-x-5 translate-y-5" />
            <img
              src={aboutImage}
              alt="Professional Training"
              className="relative w-full aspect-square object-cover shadow-2xl grayscale-[15%]"
            />
            
            {/* Elegant 8-Weeks Seal */}
            <div 
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 shadow-2xl"
              style={{ backgroundColor: '#2C2521', borderColor: '#906B3A' }}
            >
              <span className="text-xl font-playfair font-bold text-white leading-none">8</span>
              <span className="text-[9px] uppercase  mt-0.5 tracking-[0.1em] ">Weeks</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default WhyChoose;