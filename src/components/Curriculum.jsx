import { motion } from "framer-motion";

const modules = [
  { num: "01", title: "Trichology", topics: "Hair structure, growth cycle, scalp conditions, product knowledge, client analysis" },
  { num: "02", title: "Hair Cutting", topics: "Tools, sectioning, blunt, layer, step & graduation cuts" },
  { num: "03", title: "Short Haircuts", topics: "Men's fades, beard shaping, women's short styles, face shape analysis" },
  { num: "04", title: "Hair Treatments & Spa", topics: "Damage repair, deep conditioning, smoothing treatments" },
  { num: "05", title: "Hair Coloring", topics: "Color theory, grey coverage, root touch-ups, global coloring" },
  { num: "06", title: "Highlights & Balayage", topics: "Foil & freehand techniques, ombre styling" },
  { num: "07", title: "Blow Drying & Styling", topics: "Volume, smooth, bouncy styles, round brush mastery" },
  { num: "08", title: "Salon Management", topics: "Client consultation, pricing, etiquette, hygiene, service recommendations" },
];

const Curriculum = () => (
  <section id="curriculum" className="py-16 px-6 lg:px-24" style={{ background: 'linear-gradient(-90deg, #FFFFFF 0%, #FFF7ED 100%)' }}>
    <div className="container mx-auto">
      
      {/* Tightened Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center md:text-left"
      >
        <p className="font-inter font-bold text-xs tracking-[0.5em] uppercase mb-4" style={{ color: '#906B3A' }}>Course Structure</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-medium leading-none" style={{ color: '#2C2521' }}>
            What You Will <span className="italic" style={{ color: '#906B3A' }}>Master</span>
          </h2>
          <p className="font-inter text-[11px] uppercase tracking-widest max-w-xs leading-tight" style={{ color: '#7C716A' }}>
            A precise roadmap to excellence.
          </p>
        </div>
      </motion.div>

      {/* Reduced Gap Grid Layout */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {modules.map((m, i) => (
          <motion.div
            key={m.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.6 }}
            className="group flex gap-4"
          >
            {/* Elegant Translucent Numbering - Tighter Kerning */}
            <span className="font-playfair text-4xl font-bold leading-none tracking-tighter" style={{ color: '#906B3A', opacity: 0.5 }}>
              {m.num}
            </span>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-playfair text-lg font-bold tracking-tight" style={{ color: '#2C2521' }}>
                  {m.title}
                </h3>
              </div>
              <p className="font-inter text-[13px] leading-snug max-w-sm" style={{ color: '#7C716A' }}>
                {m.topics}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compact Footer Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 pt-8 border-t flex flex-wrap justify-between gap-6"
        style={{ borderColor: 'rgba(144, 107, 58, 0.15)' }}
      >
        {[
          ["Duration", "8 Weeks"],
          ["Schedule", "5 Days/Week"],
          ["Practicals", "Sat & Sun"],
          ["Mode", "In-Salon"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <span className="font-inter text-[9px] uppercase tracking-[0.3em] mb-1" style={{ color: '#7C716A' }}>{label}</span>
            <span className="font-playfair text-xl font-medium" style={{ color: '#906B3A' }}>{value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Curriculum;