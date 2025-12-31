import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";
import logoMej from "@/assets/Icone Mej.png";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/axes-strategiques", label: "Axes Stratégiques" },
  { href: "/projets", label: "Projets" },
  { href: "/gouvernance", label: "Gouvernance" },
  { href: "/contact", label: "Contact" },
];

interface HeaderProps {
  onPhotothequeOpen: () => void;
}

const Header = ({ onPhotothequeOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-br-2xl rounded-bl-2xl ${
        isScrolled
          ? "bg-primary/75 backdrop-blur-md shadow-soft "
          : "bg-accent/50 backdrop-blur-md shadow-soft "
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logoMej}
              alt="Logo"
              className="w-16 h-16 object-contain"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-xl text-primary hidden sm:block transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-primary"
                }`}
              >
                La MEJ
              </span>
              <span
                className={`text-sm font-medium text-accent-foreground hidden sm:block transition-colors duration-300 ${
                  isScrolled ? "text-accent/80" : "text-accent-foreground"
                }`}
              >
                La Maison des Enfants et des Jeunes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 rounded-2xl font-medium text-sm transition-all duration-300 gap-4 ${
                  location.pathname === link.href
                    ? link.label === "Contact"
                      ? "bg-secondary text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-pastel-green" // Style spécial pour Contact
                      : "bg-primary text-accent border-b-2 border-secondary font-semibold" // Style pour Accueil et autres items actifs
                    : link.label === "contact"
                    ? "bg-secondary/80 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-pastel-green" // Style Contact inactif
                    : "text-white hover:text-secondary border-b-2 border-primary" // Style normal pour autres items
                } ${link.label === "contact" ? "mx-2" : ""}`} // Marge pour le bouton Contact
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Photothèque Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPhotothequeOpen}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white font-medium text-sm transition-all duration-300 hover:shadow-community"
            >
              <Camera size={18} />
              <span className="hidden sm:inline">Photothèque</span>
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white hover:bg-white/60 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary/85 backdrop-blur-md border-t fixed
            top-20 right-4 rounded-2xl shadow-2xl border z-40
            min-w-[250px] max-h-[70vh] overflow-y-auto animate-in fade-in-0"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      location.pathname === link.href
                        ? "text-accent/95 bg-secondary/50"
                        : "text-white hover:bg-secondary/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
