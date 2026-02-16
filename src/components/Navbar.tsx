import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <button onClick={() => scrollTo("hero")} className="flex flex-col items-start">
          <span className="font-display text-xl tracking-[0.2em] text-gradient-gold">LUMIÈRE LUXE</span>
          <span className="font-serif text-xs tracking-[0.3em] text-muted-foreground">ACADEMY BY SASHA</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            ["About", "about"],
            ["Course", "course"],
            ["Curriculum", "curriculum"],
            ["Careers", "careers"],
            ["Apply", "apply"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-body text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+919234569999"
            className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-body tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-gold/10 px-4 py-6 space-y-4">
          {[
            ["About", "about"],
            ["Course", "course"],
            ["Curriculum", "curriculum"],
            ["Careers", "careers"],
            ["Apply", "apply"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left font-body text-sm tracking-widest text-muted-foreground hover:text-primary uppercase"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+919234569999"
            className="flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 text-sm font-body tracking-wider uppercase"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
