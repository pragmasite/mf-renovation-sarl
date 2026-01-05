import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-2">MF Rénovation</h3>
            <p className="text-white/70 text-sm">{t.footer.tagline}</p>
            <p className="text-white/60 text-xs mt-3">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <nav className="space-y-2">
              <a href="#a-propos" className="block text-white/70 hover:text-white text-sm transition-colors">{t.about.label}</a>
              <a href="#prestations" className="block text-white/70 hover:text-white text-sm transition-colors">{t.services.label}</a>
              <a href="#galerie" className="block text-white/70 hover:text-white text-sm transition-colors">{t.gallery.label}</a>
              <a href="#horaires" className="block text-white/70 hover:text-white text-sm transition-colors">{t.hours.label}</a>
              <a href="#contact" className="block text-white/70 hover:text-white text-sm transition-colors">{t.contact.label}</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.contact.label}</h4>
            <div className="space-y-2">
              <a href="tel:+41764981428" className="block text-white/70 hover:text-white text-sm transition-colors">+41 76 498 14 28</a>
              <a href="mailto:mfrenovation25@gmail.com" className="block text-white/70 hover:text-white text-sm transition-colors break-all">mfrenovation25@gmail.com</a>
              <p className="text-white/70 text-sm">Rue de Malagny 12<br />1196 Gland, CH</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/20 pt-8 text-center text-white/60 text-sm"
        >
          <p>&copy; {currentYear} MF Rénovation Sàrl. {t.footer.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
