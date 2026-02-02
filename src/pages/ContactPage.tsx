import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-community.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, contact, subject, message } = formData;

    // =========================
    // CAS WHATSAPP (INCHANGÉ)
    // =========================
    if (contactMethod === "whatsapp") {
      const whatsappMessage = `
*Nouveau message LAMEJ*
──────────────
*Nom:* ${name}
*Contact:* ${contact}
*Sujet:* ${subject}

*Message:*
${message}
──────────────
Envoyé depuis le site LAMEJ
    `;

      window.open(
        `https://wa.me/+237673219476?text=${encodeURIComponent(
          whatsappMessage,
        )}`,
        "_blank",
      );

      setIsSubmitting(false);
      toast({
        title: "Message WhatsApp prêt !",
        description: "Ouvrez WhatsApp pour envoyer votre message.",
      });
      setFormData({ name: "", contact: "", subject: "", message: "" });
      return;
    }

    // =========================
    // CAS EMAIL (EMAILJS)
    // =========================
    try {
      await emailjs.send(
        "service_oqw4f2y",
        "template_i2ke7ol",
        {
          formData: {
            name,
            contact,
            subject,
            message,
          },
          subject,
        },
        "azY2-lnYLqnhSFQVl",
      );

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      setFormData({ name: "", contact: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Pour le champ contact (email ou whatsapp)
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, contact: e.target.value });
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
            {/* Contact Info */}
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
                      Bafou-Dschang, Région de l'Ouest
                      <br />
                      Cameroun
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
                      +237 6 73 21 94 76
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
                      lamaisonej@yahoo.fr
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
                      Mercredi & Dimanche: 8h00 - 15h00
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Déclaration Légale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl"
              >
                <h3 className="font-heading font-bold text-sm sm:text-xl mb-2 sm:mb-3">
                  Déclaration Légale
                </h3>
                <p className="text-primary-foreground/90 text-[10px] sm:text-sm leading-tight sm:leading-relaxed">
                  Association à but non lucratif créée sous la Déclaration
                  Déclaration N°80/RDA/F.34/BAPP du 22 Décembre 2008.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
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
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm sm:text-base"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label
                        htmlFor="contact"
                        className="block text-xs sm:text-sm font-medium text-foreground"
                      >
                        {contactMethod === "email" ? "Email" : "WhatsApp"} *
                      </label>
                      <div className="flex items-center gap-1 sm:gap-2 bg-card p-0.5 sm:p-1 rounded-full">
                        <button
                          type="button"
                          onClick={() => setContactMethod("email")}
                          className={`px-2 sm:px-3 py-1 text-[10px] sm:text-sm rounded-full transition-all ${
                            contactMethod === "email"
                              ? "bg-background shadow text-primary"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setContactMethod("whatsapp")}
                          className={`px-2 sm:px-3 py-1 text-[10px] sm:text-sm rounded-full transition-all ${
                            contactMethod === "whatsapp"
                              ? "bg-background shadow text-accent"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          WhatsApp
                        </button>
                      </div>
                    </div>
                    <input
                      type={contactMethod === "email" ? "email" : "tel"}
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleContactChange}
                      required
                      className="mt-1 block w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder={
                        contactMethod === "email"
                          ? "votre@email.com"
                          : "Votre numéro WhatsApp (ex: +237 XXX XXX XXX)"
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1"
                    >
                      Sujet *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      </div>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 rounded-lg sm:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 sm:focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm sm:text-base appearance-none"
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

      {/* Section Opportunités de Collaboration */}
      <section className="py-6 sm:py-12 md:py-16 bg-card">
        <div className="container mx-auto px-3 sm:px-6 md:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl text-foreground mb-2 sm:mb-4">
              Opportunités de Collaboration
            </h2>
            <div className="w-12 sm:w-24 h-0.5 sm:h-1 bg-primary mx-auto mb-3 sm:mb-6"></div>
            <p className="text-muted-foreground text-xs sm:text-base md:text-lg max-w-3xl mx-auto">
              Nous sommes ouverts à diverses formes de collaboration pour
              amplifier notre impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-background p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-border">
              <h3 className="font-heading font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-4">
                Partenariats
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Collaborations institutionnelles, académiques et avec les
                organisations internationales pour des projets de recherche et
                développement.
              </p>
            </div>

            <div className="bg-background p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-border">
              <h3 className="font-heading font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-4">
                Projets Communautaires
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Initiatives locales d'accompagnement et de formation des
                communautés sur la gestion durable de leurs ressources.
              </p>
            </div>

            <div className="bg-background p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-border">
              <h3 className="font-heading font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-4">
                Consultance
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Services d'expertise pour les études environnementales,
                l'évaluation d'impacts et le développement de stratégies
                durables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
