import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import luxeLog from "../assets/luxe-log.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b shadow-sm" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <div className="flex items-center gap-4">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
            <img src={luxeLog} alt="Lumière Luxe" className="h-12 w-auto" />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 gap-6">
          <div className="flex items-center gap-6">
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
                className="font-inter text-sm tracking-[0.1em] font-bold hover:opacity-80 transition-opacity uppercase"
                style={{ color: '#906B3A' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex">
          <a
            href="tel:+919234569999"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-inter tracking-[0.1em] uppercase hover:opacity-90 transition-opacity rounded-full"
            style={{ backgroundColor: '#906B3A', color: 'white' }}
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:+919234569999"
            className="flex items-center gap-2 px-3 py-2 text-sm font-inter tracking-[0.1em] uppercase hover:opacity-90 transition-opacity rounded-full"
            style={{ backgroundColor: '#906B3A', color: 'white' }}
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'white' }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t px-4 py-6 space-y-4" style={{ borderColor: '#906B3A', backgroundColor: '#2C2521' }}>
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
              className="block w-full text-left font-inter text-sm tracking-[0.1em] hover:opacity-80 uppercase"
              style={{ color: '#906B3A' }}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+919234569999"
            className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-inter tracking-[0.1em] uppercase"
            style={{ backgroundColor: '#906B3A', color: 'white' }}
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
