import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/SectionTitle";
import heroImage from "@/assets/hero-community.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Banner */}
      <section className="relative h-[20vh] min-h-[180px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-accent/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-2 sm:mb-4">
            Contactez-Nous
          </h1>
          <p className="text-accent-foreground/90 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
            Nous sommes à votre écoute
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-6 sm:py-12 md:py-16 lg:section-padding bg-background">
        <div className="container mx-auto px-3 sm:px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 sm:gap-10 md:gap-12">
            {/* Contact Info - 2 colonnes sur mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-xl sm:text-3xl text-foreground mb-3 sm:mb-6">
                Restons en Contact
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-8 leading-relaxed text-xs sm:text-base">
                N'hésitez pas à nous contacter pour toute question, suggestion
                ou demande de partenariat. Notre équipe est là pour vous
                répondre dans les plus brefs délais.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:block">
                {/* Adresse */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="sm:flex sm:items-start sm:gap-4 p-3 rounded-xl bg-card border border-border"
                >
                  <div className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-2">
                    <div className="flex items-center sm:w-12 gap-2 mb-1 sm:mb-1">
                      <div className="sm:hidden w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin size={14} className="text-primary" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground text-xs sm:text-base">
                        Adresse
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-[10px] sm:text-sm leading-tight sm:leading-normal">
                      Quartier Communautaire, BP 123
                      <br />
                      Ville, Pays
                    </p>
                  </div>
                </motion.div>

                {/* Téléphone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="sm:flex sm:items-start sm:gap-4 p-3 rounded-xl bg-card border border-border"
                >
                  <div className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/20 items-center justify-center flex-shrink-0">
                    <Phone
                      size={20}
                      className="sm:w-6 sm:h-6 text-secondary-foreground"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 sm:mb-1">
                      <div className="sm:hidden w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Phone
                          size={14}
                          className="text-secondary-foreground"
                        />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground text-xs sm:text-base">
                        Téléphone
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-[10px] sm:text-sm leading-tight sm:leading-normal">
                      +XX XXX XXX XXX
                      <br />
                      +XX XXX XXX XXX
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="sm:flex sm:items-start sm:gap-4 p-3 rounded-xl bg-card border border-border"
                >
                  <div className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pastel-green/30 items-center justify-center flex-shrink-0">
                    <Mail size={20} className="sm:w-6 sm:h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 sm:mb-1">
                      <div className="sm:hidden w-6 h-6 rounded-full bg-pastel-green/30 flex items-center justify-center">
                        <Mail size={14} className="text-foreground" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground text-xs sm:text-base">
                        Email
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-[10px] sm:text-sm leading-tight sm:leading-normal">
                      contact@lamej.org
                      <br />
                      info@lamej.org
                    </p>
                  </div>
                </motion.div>

                {/* Horaires */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="sm:flex sm:items-start sm:gap-4 p-3 rounded-xl bg-card border border-border"
                >
                  <div className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pastel-orange/30 items-center justify-center flex-shrink-0">
                    <Clock
                      size={20}
                      className="sm:w-6 sm:h-6 text-foreground"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 sm:mb-1">
                      <div className="sm:hidden w-6 h-6 rounded-full bg-pastel-orange/30 flex items-center justify-center">
                        <Clock size={14} className="text-foreground" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground text-xs sm:text-base">
                        Horaires
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-[10px] sm:text-sm leading-tight sm:leading-normal">
                      Lundi - Vendredi: 8h00 - 17h00
                      <br />
                      Samedi: 9h00 - 13h00
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form - Optimisé mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="community-card p-3 sm:p-6">
                <h3 className="font-heading font-bold text-lg sm:text-2xl text-foreground mb-3 sm:mb-6">
                  Envoyez-nous un Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1"
                    >
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm sm:text-base appearance-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="general">Renseignement général</option>
                      <option value="membership">Devenir membre</option>
                      <option value="partnership">Partenariat</option>
                      <option value="donation">Don / Soutien</option>
                      <option value="volunteer">Bénévolat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-4 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-heading font-semibold hover:shadow-warm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-base shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 sm:w-5 sm:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span className="text-xs sm:text-sm">
                          Envoi en cours...
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs sm:text-sm">
                          Envoyer le Message
                        </span>
                        <Send size={14} className="sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
