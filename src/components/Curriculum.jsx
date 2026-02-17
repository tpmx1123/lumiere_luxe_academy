import { motion } from "framer-motion";

const modules = [
  { num: "01", title: "Trichology", topics: "Structure, growth, scalp analysis" },
  { num: "02", title: "Hair Cutting", topics: "Tools, blunt, layer & graduation" },
  { num: "03", title: "Short Hair", topics: "Fades, beard & face analysis" },
  { num: "04", title: "Treatments", topics: "Damage repair & smoothing" },
  { num: "05", title: "Coloring", topics: "Theory, grey & root touch-ups" },
  { num: "06", title: "Balayage", topics: "Foil, freehand & ombre" },
  { num: "07", title: "Styling", topics: "Volume & round brush mastery" },
  { num: "08", title: "Salon Mgmt", topics: "Etiquette, pricing & hygiene" },
];

const Curriculum = () => (
  <section id="curriculum" className="py-16 px-4 md:px-6 lg:px-24" style={{ background: 'linear-gradient(-90deg, #FFFFFF 0%, #FFF7ED 100%)' }}>
    <div className="container mx-auto">
      
      {/* Editorial Header - Optimized for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-12 text-center md:text-left"
      >
        <p className="font-inter font-bold text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3" style={{ color: '#906B3A' }}>
          Course Structure
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <h2 className="font-playfair text-3xl md:text-6xl font-medium leading-tight md:leading-none" style={{ color: '#2C2521' }}>
            What You Will <span className="italic" style={{ color: '#906B3A' }}>Master</span>
          </h2>
          <p className="font-inter text-[10px] md:text-[11px] uppercase tracking-widest max-w-xs leading-tight mx-auto md:mx-0" style={{ color: '#7C716A' }}>
            A precise roadmap to excellence.
          </p>
        </div>
      </motion.div>

      {/* Grid: 2 columns on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-12 md:gap-y-12">
        {modules.map((m, i) => (
          <motion.div
            key={m.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.6 }}
            className="group flex flex-col md:flex-row gap-2 md:gap-4"
          >
            {/* Numbering */}
            <span className="font-playfair text-2xl md:text-4xl font-bold leading-none tracking-tighter" style={{ color: '#906B3A', opacity: 0.5 }}>
              {m.num}
            </span>
            
            <div className="flex flex-col">
              <h3 className="font-playfair text-sm md:text-lg font-bold tracking-tight mb-1" style={{ color: '#2C2521' }}>
                {m.title}
              </h3>
              <p className="font-inter text-[11px] md:text-[13px] leading-snug text-[#7C716A]">
                {m.topics}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Stats Bar - 2 columns on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 pt-8 border-t grid grid-cols-2 md:flex md:flex-wrap justify-between gap-6"
        style={{ borderColor: 'rgba(144, 107, 58, 0.15)' }}
      >
        {[
          ["Duration", "8 Weeks"],
          ["Schedule", "5 Days/Week"],
          ["Practicals", "Daily Live"],
          ["Mode", "In-Salon"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-inter text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1" style={{ color: '#7C716A' }}>{label}</span>
            <span className="font-playfair text-lg md:text-xl font-medium" style={{ color: '#906B3A' }}>{value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Curriculum;