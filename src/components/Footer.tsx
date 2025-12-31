import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import logoMej from "@/assets/logo-mej.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer - Padding vertical réduit */}
      <div className="container mx-auto px-4 md:px-8 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoMej}
                alt="La MEJ"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain bg-card rounded-full p-1"
              />
              <span className="font-heading font-bold text-lg sm:text-xl text-accent-foreground">
                La MEJ
              </span>
            </Link>
            <p className="text-accent-foreground/80 text-xs sm:text-sm leading-relaxed">
              Ensemble, nous construisons des solutions pour notre communauté.
              La parole de chacun compte.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h4 className="font-heading font-semibold text-base sm:text-lg">
              Liens Rapides
            </h4>
            <ul className="space-y-1">
              {[
                { href: "/a-propos", label: "À Propos" },
                { href: "/axes-strategiques", label: "Axes Stratégiques" },
                { href: "/projets", label: "Nos Projets" },
                { href: "/gouvernance", label: "Gouvernance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h4 className="font-heading font-semibold text-base sm:text-lg">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-accent-foreground/80">
                <MapPin
                  size={14}
                  className="sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0"
                />
                <span>Quartier Communautaire, Ville, Pays</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-accent-foreground/80">
                <Phone
                  size={14}
                  className="sm:w-4 sm:h-4 text-primary flex-shrink-0"
                />
                <span>+XX XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-accent-foreground/80">
                <Mail
                  size={14}
                  className="sm:w-4 sm:h-4 text-primary flex-shrink-0"
                />
                <span>contact@lamej.org</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h4 className="font-heading font-semibold text-base sm:text-lg">
              Restez Connecté
            </h4>
            <p className="text-accent-foreground/80 text-xs sm:text-sm">
              Rejoignez notre communauté et restez informé de nos actions.
            </p>
            <Link
              to="/contact"
              className="inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-xs sm:text-sm hover:shadow-warm transition-all duration-300"
            >
              Nous Contacter
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-accent-foreground/60">
            <p>© {currentYear} La MEJ. Tous droits réservés.</p>
            <p className="flex items-center gap-1">
              Fait avec{" "}
              <Heart
                size={12}
                className="sm:w-3 sm:h-3 text-pastel-pink fill-pastel-pink"
              />{" "}
              pour la communauté
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
