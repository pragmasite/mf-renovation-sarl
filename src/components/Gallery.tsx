import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";
import { X } from "lucide-react";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: "/images/img-1.jpg", alt: lang === "fr" ? "Intérieur moderne" : "Modernes Interieur" },
    { src: "/images/img-2.jpg", alt: lang === "fr" ? "Salle multimédia" : "Multimediaraum" },
    { src: "/images/img-3.jpg", alt: lang === "fr" ? "Espace de vie" : "Wohnraum" },
    { src: "/images/img-4.jpg", alt: lang === "fr" ? "Salle de bain moderne" : "Modernes Badezimmer" },
    { src: "/images/img-5.jpg", alt: lang === "fr" ? "Aménagement complet" : "Komplette Einrichtung" },
    { src: "/images/img-6.jpg", alt: lang === "fr" ? "Rénovation extérieure" : "Außenrenovierung" },
  ];

  return (
    <section id="galerie" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t.gallery.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto rounded-2xl shadow-medium"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-4 -right-4 bg-background rounded-full p-2 shadow-soft hover:bg-accent hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <p className="text-center mt-4 text-white font-medium">{images[selectedIndex].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
