import { motion } from "framer-motion";

const applicants = [
  "Complete beginners",
  "10th / 12th pass students",
  "Degree students",
  "Salon assistants",
  "Beauticians upgrading skills",
  "Housewives restarting career",
  "Anyone passionate about hair styling",
  "No prior experience required",
];

const careers = [
  "Junior Hair Stylist",
  "Salon Assistant",
  "Hair Color Technician",
  "Entry-Level Freelance Stylist",
];

const WhoCanApply = () => (
  <section id="careers" className="py-16 px-6 lg:px-24" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF7ED 100%)' }}>
    <div className="container mx-auto">
      {/* Reduced the main grid gap to bring columns closer */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        
        {/* Eligibility Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter font-bold text-[10px] tracking-[0.5em] uppercase mb-2" style={{ color: '#906B3A' }}>Eligibility</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-1 leading-tight mb-2" style={{ color: '#2C2521' }}>
            Who Can <span className="italic" style={{ color: '#906B3A' }}>Apply?</span>
          </h2>
          
          
          {/* Tightened space between bullet points */}
          <div className="space-y-4">
            {applicants.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#906B3A' }} />
                <span className="font-inter text-sm tracking-wide" style={{ color: '#2C2521' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Opportunities Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter font-bold text-[10px] tracking-[0.5em] uppercase mb-2" style={{ color: '#906B3A' }}>After Graduation</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-6 leading-tight" style={{ color: '#2C2521' }}>
            Career <span className="italic" style={{ color: '#906B3A' }}>Pathways</span>
          </h2>
          
          {/* Reduced py-4 to py-2 for a more compact list as seen in image */}
          <div className="space-y-2">
            {careers.map((item, i) => (
              <div key={item} className="group py-2 flex items-center gap-4">
                <span className="font-playfair text-3xl font-bold leading-none" style={{ color: '#906B3A', opacity: 0.15 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-inter text-base tracking-tight group-hover:translate-x-1 transition-transform duration-300" style={{ color: '#2C2521' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  </section>
);

export default WhoCanApply;