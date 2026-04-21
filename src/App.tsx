/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MapPin, Zap, ShieldCheck, Clock, CheckCircle2, MessageSquare, Menu, X, AlertTriangle } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    title: "ΒΛΑΒΕΣ & ΕΠΙΣΚΕΥΕΣ",
    description: "Άμεση διάγνωση και αποκατάσταση βραχυκυκλωμάτων, πεσμένων ρελέ και διακοπών ρεύματος. Είμαστε εκεί σε 30'.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "ΗΛΕΚΤΡΟΛΟΓΙΚΟΙ ΠΙΝΑΚΕΣ",
    description: "Αντικατάσταση και αναβάθμιση παλαιών πινάκων με νέα, ασφαλή συστήματα σύμφωνα με τα ευρωπαϊκά πρότυπα.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "ΑΝΑΚΑΙΝΙΣΕΙΣ & ΕΡΓΑ",
    description: "Πλήρης καλωδίωση για νέα σπίτια, καταστήματα και βιομηχανικούς χώρους. Μελέτη και υλοποίηση.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    title: "SMART HOME & LED",
    description: "Εγκατάσταση έξυπνων συστημάτων, φωτισμού LED και θυροτηλεοράσεων. Τεχνολογία στην υπηρεσία σας.",
    icon: <Clock className="w-8 h-8" />,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner (Hazard Strip) */}
      <div className="h-2 hazard-stripes w-full"></div>

      {/* Header */}
      <header className="bg-black text-white py-4 px-4 sticky top-0 z-50 border-b-4 border-electric-yellow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
            <div className="bg-electric-yellow p-1.5 rotate-3 shrink-0 border-2 border-white">
              <Zap className="text-black w-6 h-6 sm:w-8 sm:h-8 fill-black" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xl sm:text-2xl tracking-tighter leading-none uppercase truncate text-white">ΗΛΕΚΤΡΟΛΟΓΟΣ ΜΑΡΟΥΣΙ</h1>
              <p className="text-[9px] sm:text-[11px] font-black text-electric-yellow tracking-[0.2em] uppercase truncate">ΕΞΥΠΗΡΕΤΗΣΗ 24/7</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-xs font-black hover:text-electric-yellow transition-colors tracking-widest uppercase">ΥΠΗΡΕΣΙΕΣ</a>
            <a href="#contact" className="text-xs font-black hover:text-electric-yellow transition-colors tracking-widest uppercase">ΕΠΙΚΟΙΝΩΝΙΑ</a>
            <a 
              href="tel:+306970000000" 
              className="bg-electric-yellow text-black px-6 py-3 font-black text-sm flex items-center gap-2 hover:bg-white transition-colors border-2 border-black active:translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-black" />
              697 XXX XXXX
            </a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-black bg-electric-yellow p-2 border-2 border-white active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={4} /> : <Menu size={24} strokeWidth={4} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-8 text-white md:hidden p-6 animate-in fade-in zoom-in duration-200">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-electric-yellow p-2"
          >
            <X size={32} />
          </button>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-display text-5xl hover:text-electric-yellow transition-colors">ΥΠΗΡΕΣΙΕΣ</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-display text-5xl hover:text-electric-yellow transition-colors">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          <div className="h-px w-20 bg-electric-yellow my-4"></div>
          <a href="tel:+306970000000" className="w-full bg-electric-yellow text-black py-6 font-display text-3xl flex items-center justify-center gap-4 active:scale-95 transition-transform">
            <Phone className="w-8 h-8 fill-black" />
            ΚΑΛΕΣΤΕ ΤΩΡΑ
          </a>
        </div>
      )}

      {/* Hero Section (Maximum Contrast Overhaul) */}
      <section className="relative min-h-[100svh] md:min-h-[85vh] flex items-center bg-black overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/electric-panel/1920/1080" 
            alt="Work" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-10 md:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex bg-white text-black px-4 py-1 font-black text-xs tracking-[0.3em] mb-8 border-2 border-electric-yellow uppercase shadow-[4px_4px_0px_0px_#facc15]">
                Certified Tech 24/7
              </div>
              
              <h2 className="font-display text-[11vw] sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[1] uppercase mb-8 tracking-tighter break-words">
                ΗΛΕΚΤΡΟΛΟΓΙΚΕΣ <br /> 
                <span className="text-electric-yellow font-display drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">ΛΥΣΕΙΣ ΤΩΡΑ</span>
              </h2>

              <p className="text-white text-lg sm:text-xl md:text-3xl max-w-2xl font-bold mb-10 md:mb-14 border-l-4 border-electric-yellow pl-4 sm:pl-8 leading-tight">
                Άμεση ανταπόκριση <span className="text-electric-yellow">στο Μαρούσι</span>. <br />
                Χωρίς κρυφές χρεώσεις. Πιστοποιημένη ασφάλεια.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="tel:+306970000000" 
                  className="bg-electric-yellow text-black px-8 py-6 font-display text-3xl sm:text-4xl active:translate-y-1 transition-all text-center flex items-center justify-center gap-4 border-4 border-black"
                >
                  <Phone className="w-8 h-8 fill-black" />
                  697 XXX XXXX
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-black px-8 py-6 font-display text-3xl sm:text-4xl active:translate-y-1 transition-all text-center border-4 border-black flex items-center justify-center"
                >
                  ΠΡΟΣΦΟΡΑ
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Live Status (Simplified for Mobile) */}
        <div className="absolute top-24 left-4 md:top-auto md:bottom-10 md:right-10 z-20">
          <div className="bg-black border-2 border-electric-yellow p-3 text-white flex items-center gap-3">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]"></div>
            <span className="font-black text-xs tracking-widest uppercase">Live: Available in Marousi</span>
          </div>
        </div>
      </section>

      {/* Services (High Contrast Grid) */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-20 gap-8">
            <h3 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none text-black break-words">ΥΠΗΡΕΣΙΕΣ</h3>
            <div className="h-4 bg-black w-full md:w-64"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="brutal-border p-8 bg-white hover:bg-black group transition-colors"
              >
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="bg-electric-yellow text-black p-6 group-hover:bg-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-3xl sm:text-4xl mb-4 leading-none uppercase text-black group-hover:text-white break-words">{service.title}</h4>
                    <p className="text-black group-hover:text-stone-300 font-bold text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust (Hazardous) */}
      <section className="bg-electric-yellow py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              { t: "ΧΩΡΙΣ ΚΡΥΦΕΣ ΧΡΕΩΣΕΙΣ", d: "Ξέρετε το κόστος πριν πιάσουμε κατσαβίδι στο χέρι μας." },
              { t: "ΚΑΘΑΡΙΟΤΗΤΑ & ΣΕΒΑΣΜΟΣ", d: "Το σπίτι σας θα μείνει καθαρό. Εγγυημένα." },
              { t: "ΑΜΕΣΗ ΑΝΤΑΠΟΚΡΙΣΗ", d: "Κατανοούμε τον πανικό της βλάβης. Είμαστε εκεί." }
            ].map((p, i) => (
              <div key={i} className="border-4 border-black p-6 sm:p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                <h5 className="font-display text-2xl sm:text-3xl mb-3 sm:mb-4 leading-none uppercase break-words">{p.t}</h5>
                <p className="font-bold text-sm sm:text-base text-neutral-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (High Contrast) */}
      <section id="contact" className="py-20 md:py-32 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <h3 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-electric-yellow mb-8 leading-none break-words">ΕΠΙΚΟΙΝΩΝΙΑ</h3>
              <p className="text-xl sm:text-3xl font-bold mb-12 sm:mb-20 text-white max-w-xl">
                Μαρούσι & Βόρεια Προάστια. <br />
                <span className="text-electric-yellow">Δίπλα σας για κάθε ηλεκτρολογικό πρόβλημα.</span>
              </p>
              
              <div className="grid gap-10">
                <a href="tel:+306970000000" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-electric-yellow flex items-center justify-center shrink-0 border-4 border-white group-hover:bg-white transition-colors">
                    <Phone className="text-black w-8 h-8 fill-black" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display uppercase tracking-tighter hover:text-electric-yellow transition-colors leading-none">697 XXX XXXX</div>
                </a>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white flex items-center justify-center shrink-0 text-black border-4 border-electric-yellow">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display uppercase tracking-tighter leading-none">ΜΑΡΟΥΣΙ, ΑΤΤΙΚΗ</div>
                </div>
              </div>

              {/* Map (Industrial BW) */}
              <div className="mt-16 sm:mt-24 h-72 border-4 border-electric-yellow grayscale invert opacity-50 hover:opacity-100 transition-all shadow-[10px_10px_0px_0px_rgba(250,204,21,0.2)]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12557!2d23.805!3d38.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1713698483" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-white text-black p-6 sm:p-14 border-b-[10px] sm:border-b-[15px] border-r-[10px] sm:border-r-[15px] border-electric-yellow brutal-border">
              <h4 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-12 uppercase tracking-tighter leading-none break-words">ΡΑΝΤΕΒΟΥ</h4>
              <form className="space-y-6 sm:space-y-10" onSubmit={e => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="font-black text-xs uppercase tracking-[0.2em] text-black">Ονοματεπώνυμο</label>
                  <input className="w-full border-b-8 border-black p-4 font-bold focus:bg-electric-yellow outline-none transition-all placeholder:text-neutral-300 text-xl" placeholder="π.χ. ΝΙΚΟΣ Π." />
                </div>
                <div className="space-y-3">
                  <label className="font-black text-xs uppercase tracking-[0.2em] text-black">Τηλέφωνο Επικοινωνίας</label>
                  <input className="w-full border-b-8 border-black p-4 font-bold focus:bg-electric-yellow outline-none transition-all placeholder:text-neutral-300 text-xl" placeholder="69XXXXXXXX" />
                </div>
                <div className="space-y-3">
                  <label className="font-black text-xs uppercase tracking-[0.2em] text-black">Είδος Εργασίας</label>
                  <div className="relative">
                    <select className="w-full border-b-8 border-black p-4 font-bold focus:bg-electric-yellow outline-none bg-white appearance-none cursor-pointer uppercase text-xl">
                      <option>ΕΠΕΙΓΟΥΣΑ ΒΛΑΒΗ</option>
                      <option>ΑΝΑΚΑΙΝΙΣΗ</option>
                      <option>ΠΙΝΑΚΑΣ</option>
                      <option>ΑΛΛΟ</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Zap size={28} className="fill-black" />
                    </div>
                  </div>
                </div>
                <button className="w-full bg-black text-white p-6 sm:p-10 font-display text-3xl sm:text-5xl hover:bg-electric-yellow hover:text-black active:scale-95 transition-all uppercase tracking-tighter shadow-[5px_5px_0px_0px_#facc15] sm:shadow-[10px_10px_0px_0px_#facc15] hover:shadow-none break-words">
                  ΑΠΟΣΤΟΛΗ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Hazard Stripes) */}
      <footer className="bg-black text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
          <div className="font-display text-2xl sm:text-3xl uppercase tracking-tighter text-center sm:text-left">© 2026 ΗΛΕΚΤΡΟΛΟΓΟΣ ΜΑΡΟΥΣΙ</div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 font-bold text-[10px] tracking-widest opacity-50 uppercase">
             <span>Powered by HighVoltage</span>
             <span>Security Guaranteed</span>
          </div>
        </div>
        <div className="h-4 sm:h-6 hazard-stripes w-full mt-10"></div>
      </footer>
    </div>
  );
}
