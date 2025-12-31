import { motion } from "framer-motion";
import { Eye, Target, Heart, CheckCircle, X, Goal } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-community.jpg";
import projectDev from "@/assets/project-development.jpg";

const objectives = [
  "Développer des programmes de prévention, de prise en charge globale des IST/VIH, et de promotion de la santé sexuelle et reproductive des enfants et des jeunes.",
  "Mettre à la disposition des enfants et des jeunes des espaces conviviaux répondant aux besoins de santé préventive.",
  "Mettre à la disposition des enfants et jeunes un centre de formation, d’information, de ressources et de divertissement.",
  "Apporter un appui psychosocial aux enfants et jeunes en difficulté.",
  "Apporter un  appui aux besoins pratiques des enfants et jeunes indigents et nécessiteux. ",
  "Accompagner à l’insertion et à la réinsertion sociale des enfants inadaptés sociaux et des jeunes.",
  "Accompagner les enfants en conflit et en contact avec la loi.",
  "Faciliter l’insertion sociale des jeunes désireux de s'orienter vers des activités génératrices de revenus.",
  "Renforcer les capacités des parents, des leaders traditionnels et  religieux, des élus locaux et autres leaders d’opinion pour des solutions globales aux problèmes des enfants et des jeunes.",
  "Participer à la recherche des solutions environnementales saines pour la protection des enfants et des jeunes et susciter la participation communautaire pérenne à la protection de l’environnement. ",
  "Contribuer à la lutte contre les inégalités de genre dans les interventions en faveur des enfants et des jeunes.",
];

// Données pour Vision et Mission
const visionMissionData = [
  {
    id: "vision",
    title: "Notre Vision",
    icon: Eye,
    color: "bg-secondary/20",
    iconColor: "text-secondary-foreground",
    description:
      "Construire une société où les enfants et jeunes vivent en bonne santé et jouissent du bien-être global, sans distinction de sexe et de genre.",
  },
  {
    id: "mission",
    title: "Notre Mission",
    icon: Target,
    color: "bg-primary/20",
    iconColor: "text-primary-foreground",
    description:
      "Contribuer a la bonne santé et au bien-etre global des enfants et des jeunes au cameroun.",
  },
];

const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Banner - Réduit */}
      <section className="relative h-[20vh] min-h-[200px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="À Propos de La MEJ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-accent-foreground mb-2 sm:mb-3 md:mb-4">
            À Propos de Nous
          </h1>
          <p className="text-accent-foreground/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Découvrez qui nous sommes et ce qui nous anime
          </p>
        </motion.div>
      </section>

      {/* Notre Organisation */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full text-primary font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                Notre Organisation
              </span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 sm:mb-5 md:mb-6">
                Une communauté unie:
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  La MEJ (La Maison de Enfants et des Jeunes) est une
                  association communautaire fondée sur les principes de
                  solidarité, de dialogue et d'entraide. Notre organisation
                  rassemble des membres de tous horizons, unis par une vision
                  commune : construire ensemble un avenir meilleur pour notre
                  communauté.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Depuis notre création, nous avons œuvré sans relâche pour le
                  bien-être de notre communauté, en mettant en place des projets
                  concrets qui répondent aux besoins réels des populations que
                  nous servons. Notre force réside dans l'engagement de nos
                  membres et la confiance de nos partenaires.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-warm">
                <img
                  src={projectDev}
                  alt="Notre Organisation"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-secondary/30 -z-10" />
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-primary/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Objectifs */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Version Desktop - Vision & Mission complètes */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
            {visionMissionData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${item.color} flex items-center justify-center mb-4 md:mb-5 lg:mb-6`}
                >
                  <item.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Version Responsive - Icônes et titres seulement sur une ligne */}
          <div className="md:hidden mb-8">
            <div className="flex flex-row sm:flex-row gap-4 sm:gap-6">
              {visionMissionData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <button
                    onClick={() => openModal(item)}
                    className="w-full flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 active:scale-95"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.color} flex items-center justify-center mb-3`}
                    >
                      <item.icon size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground text-center">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Cliquez pour en savoir plus
                    </p>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modal pour Vision/Mission */}
          {modalOpen && selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* En-tête du modal */}
                <div className="p-4 sm:p-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${selectedItem.color} flex items-center justify-center`}
                    >
                      <selectedItem.icon size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Contenu */}
                <div className="p-4 sm:p-5">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Bouton fermer */}
                <div className="p-4 sm:p-5 border-t border-gray-100">
                  <button
                    onClick={closeModal}
                    className="w-full py-2.5 sm:py-3 bg-primary text-white rounded-lg font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Nos Objectifs - Taille réduite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl sm:max-w-4xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-pastel-green/30 flex items-center justify-center mb-3 sm:mb-4">
                <Goal
                  size={24}
                  className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-foreground"
                />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-foreground">
                Nos Objectifs
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50"
                >
                  <CheckCircle
                    size={16}
                    className="sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {objective}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
