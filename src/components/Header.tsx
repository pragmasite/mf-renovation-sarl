import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>MF Rénovation</span>
          <span className={`text-xs tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>{t.nav.profession}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#a-propos" className={`text-sm ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>{t.about.label}</a>
          <a href="#prestations" className={`text-sm ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>{t.services.label}</a>
          <a href="#galerie" className={`text-sm ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>{t.gallery.label}</a>
          <a href="#horaires" className={`text-sm ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>{t.hours.label}</a>
          <a href="#contact" className={`text-sm ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>{t.contact.label}</a>

          {/* Language Switcher */}
          <Link to={otherLangPath} className={`flex items-center gap-1.5 text-sm ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm" className="gap-2">
            <a href="tel:+41764981428">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#a-propos" className="block text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t.about.label}</a>
            <a href="#prestations" className="block text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t.services.label}</a>
            <a href="#galerie" className="block text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t.gallery.label}</a>
            <a href="#horaires" className="block text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t.hours.label}</a>
            <a href="#contact" className="block text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t.contact.label}</a>
            <Link to={otherLangPath} className="block text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              <Globe className="h-4 w-4 inline mr-1" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild size="sm" className="w-full gap-2">
              <a href="tel:+41764981428">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
