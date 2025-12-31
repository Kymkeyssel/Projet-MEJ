import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import heroImage from "@/assets/hero-community.jpg";
import projectDevelopment from "@/assets/project-development.jpg";
import projectHealth from "@/assets/project-health.jpg";
import projectAid from "@/assets/project-aid.jpg";
import projectEducation from "@/assets/project-education.jpg";
import {
  FileText,
  Heart,
  GraduationCap,
  HandHeart,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  X,
  Target,
  Users,
  Leaf,
  TrendingUp,
} from "lucide-react";

// Icônes pour les axes
const axisIcons = {
  "Développement Communautaire": Users,
  "Environnement & Durabilité": Leaf,
  "Éducation & Formation": Target,
  "Innovation & Croissance": TrendingUp,
};

const strategicAxes = [
  {
    icon: FileText,
    title: "Santé communautaire",
    shortDescription: "Facilitation de la prévention de plusieurs maladies ",
    fullDescription:
      "Facilitation de la prévention de plusieurs maladies notamment le VIH/sida et autres IST, l’éducation à la santé sexuelle et reproductive, paludisme, tuberculose, maladies métaboliques, le renforcement des capacités des acteurs, la facilitation de l’accès aux soins à nos cibles.",
    image: projectEducation,
    color: "bg-secondary/20",
    iconColor: "text-secondary-foreground",
    expandDirection: "right",
  },
  {
    icon: GraduationCap,
    title: "Genre et développement ",
    shortDescription: "Accompagnement des jeunes filles, parfois filles-mères ",
    fullDescription:
      "Accompagnement des jeunes filles, parfois filles-mères à mieux reprendre l’estime et le contrôle de soi. Encadrement des femmes parfois seules ou veuves dans le développement des AGR et sur la responsabilité parentale en matière d’éducation des filles et des garçons dans un contexte socioculturel très conservateur. ",
    image: projectDevelopment,
    color: "bg-primary/20",
    iconColor: "text-primary-foreground",
    expandDirection: "left",
  },
  {
    icon: Heart,
    title: "Aides directes et autonomisation",
    shortDescription: "Appuis directs aux bénéficiaires ",
    fullDescription:
      "Appuis directs aux bénéficiaires : scolarité et fournitures scolaires, aide aux soins, appuis vestimentaires, appuis nutritionnels, médiations familiales, écoute, référence et accompagnement, suivi à domicile. Résolution des besoins spécifiques des jeunes filles en ce qui concerne leur hygiène sexuelle, conseils pratiques, écoute, orientation, accompagnement, octroi des aides diverses aux jeunes filles mères.",
    image: projectHealth,
    color: "bg-pastel-pink/30",
    iconColor: "text-foreground",
    expandDirection: "right",
  },
  {
    icon: HandHeart,
    title: "Documentation et centre de ressources ",
    shortDescription: "...",
    fullDescription:
      "A travers cet axe, nous nous assurons que les enfants adolescents et jeunes des zones rurales aient aussi accès à l'écoute, aux documents et jeux éducatifs, films éducatifs, accès aux NTIC",
    image: projectAid,
    color: "bg-pastel-orange/30",
    iconColor: "text-foreground",
    expandDirection: "left",
  },
  {
    icon: HandHeart,
    title: "Environnement et protection de la nature.",
    shortDescription: "...",
    fullDescription:
      "Activités d’adaptation aux changements climatiques et de protection des femmes et des enfants dans l’agriculture familiale. ",
    image: projectAid,
    color: "bg-pastel-orange/30",
    iconColor: "text-foreground",
    expandDirection: "right",
  },
];

// Composant StrategicAxisCard pour desktop
const StrategicAxisCard = ({
  axis,
  index,
}: {
  axis: (typeof strategicAxes)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isLeftExpand = axis.expandDirection === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        className={`community-card overflow-hidden flex ${
          isLeftExpand ? "flex-row-reverse" : "flex-row"
        }`}
        animate={{
          width: isExpanded ? "100%" : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Image Section */}
        <div className="w-2/5 min-h-[280px] relative overflow-hidden flex-shrink-0">
          <img
            src={axis.image}
            alt={axis.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-${
              isLeftExpand ? "l" : "r"
            } from-transparent to-card/20`}
          />
        </div>

        {/* Content Section */}
        <div className="w-3/5 p-6 flex flex-col justify-center relative">
          <div
            className={`w-14 h-14 ${axis.color} rounded-xl flex items-center justify-center mb-4`}
          >
            <axis.icon size={28} className={axis.iconColor} />
          </div>

          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            {axis.title}
          </h3>

          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.p
                key="full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {axis.fullDescription}
              </motion.p>
            ) : (
              <motion.p
                key="short"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {axis.shortDescription}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`absolute top-1/2 -translate-y-1/2 ${
              isLeftExpand ? "-left-3" : "-right-3"
            } w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center z-10`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered || isExpanded ? 1 : 0,
              scale: isHovered || isExpanded ? 1 : 0.8,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              <X size={16} />
            ) : isLeftExpand ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Composant item de liste pour mobile
const StrategicAxisItem = ({
  axis,
  index,
  onOpenModal,
}: {
  axis: (typeof strategicAxes)[0];
  index: number;
  onOpenModal: () => void;
}) => {
  const Icon = axisIcons[axis.title] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
    >
      <button
        onClick={onOpenModal}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <axis.icon size={20} className="sm:w-6 sm:h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-0.5">
              {axis.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
              {axis.shortDescription}
            </p>
          </div>
        </div>
        <ChevronRight size={18} className="text-primary/60" />
      </button>
    </motion.div>
  );
};

// Composant Modal pour afficher les détails
const AxisModal = ({
  isOpen,
  onClose,
  axis,
}: {
  isOpen: boolean;
  onClose: () => void;
  axis: (typeof strategicAxes)[0] | null;
}) => {
  if (!axis) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50">
          {/* Overlay cliquable pour fermer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-lg sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* En-tête avec image en fond */}
            <div className="relative h-32 sm:h-40">
              <img
                src={axis.image}
                alt={axis.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Bouton fermer */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full z-10"
              >
                <X size={20} />
              </button>

              {/* Titre et icône */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <axis.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {axis.title}
                </h3>
              </div>
            </div>

            {/* Contenu défilable */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {/* Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Description
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {axis.fullDescription}
                </p>
              </div>
            </div>

            {/* Bouton d'action */}
            <div className="p-4 sm:p-6 border-t border-gray-100">
              <button
                onClick={onClose}
                className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AxesStrategiquesPage = () => {
  // États pour gérer le modal - DÉPLACÉS ICI, à l'intérieur du composant
  const [selectedAxis, setSelectedAxis] = useState<
    (typeof strategicAxes)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (axis: (typeof strategicAxes)[0]) => {
    setSelectedAxis(axis);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAxis(null), 300);
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Banner - Réduit */}
      <section className="relative h-[20vh] min-h-[200px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Axes Stratégiques"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-secondary/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-accent-foreground mb-2 sm:mb-4">
            Axes Stratégiques
          </h1>
          <p className="text-accent-foreground/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto">
            Nos domaines d'intervention pour un impact durable
          </p>
        </motion.div>
      </section>

      {/* Introduction - Réduite */}
      <section className="py-8 sm:py-10 md:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl sm:max-w-3xl mx-auto text-center"
          >
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Notre action s'articule autour de quatre axes stratégiques
              complémentaires. Ces axes nous permettent d'aborder le
              développement communautaire de manière holistique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Axes - Version Desktop (inchangée) */}
      <section className="hidden lg:block section-padding bg-gradient-to-br from-ocre-light via-background to-turquoise-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {strategicAxes.map((axis, index) => (
              <StrategicAxisCard key={axis.title} axis={axis} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Axes - Version Responsive (liste avec modals) */}
      <section className="lg:hidden py-6 sm:py-8 bg-gradient-to-br from-ocre-light via-background to-turquoise-light">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="space-y-3 sm:space-y-4">
            {strategicAxes.map((axis, index) => (
              <StrategicAxisItem
                key={axis.title}
                axis={axis}
                index={index}
                onOpenModal={() => openModal(axis)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal pour axe stratégique (responsive uniquement) */}
      <AxisModal
        isOpen={isModalOpen}
        onClose={closeModal}
        axis={selectedAxis}
      />

      {/* CTA - Réduit */}
      <section className="py-8 sm:py-10 md:py-12 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent-foreground mb-2 sm:mb-3 md:mb-4">
              Découvrez nos réalisations
            </h2>
            <p className="text-accent-foreground/80 mb-4 sm:mb-6 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
              Explorez les projets concrets que nous avons menés.
            </p>
            <Link
              to="/projets"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm sm:text-base hover:shadow-warm transition-all duration-300"
            >
              Voir nos projets
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AxesStrategiquesPage;
