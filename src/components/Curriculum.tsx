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
  <section id="curriculum" className="py-24 bg-gradient-dark">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-4">Curriculum</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          What You Will <span className="text-gradient-gold">Master</span>
        </h2>
        <p className="font-body text-muted-foreground">8 comprehensive modules designed to make you job-ready</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={m.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-6 flex gap-5 group hover:border-primary/30 transition-all"
          >
            <span className="font-display text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors shrink-0">
              {m.num}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{m.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.topics}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 glass-card p-8 grid sm:grid-cols-4 gap-6 text-center"
      >
        {[
          ["Duration", "8 Weeks"],
          ["Schedule", "5 Days/Week"],
          ["Practicals", "Sat & Sun"],
          ["Mode", "In-Salon"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="font-display text-2xl font-bold text-gradient-gold">{value}</p>
            <p className="font-body text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Curriculum;
