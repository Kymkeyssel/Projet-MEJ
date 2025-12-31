import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import projectDev from "@/assets/project-development.jpg";
import projectHealth from "@/assets/project-health.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectAid from "@/assets/project-aid.jpg";

const projects = [
  {
    id: 1,
    title: "Sauver les nouvelles générations ",
    category: "Santé",
    image: projectDev,
    location: "Ouest Cameroun",
    date: "Chaque annee",
    beneficiaries: "Etablissements scolaire",
    shortDescription:
      "Prévention du VIH/sida basée sur le genre, la santé sexuelle et reproductive et les droits humains",
    fullDescription:
      "Prévention du VIH/sida basée sur le genre, la santé sexuelle et reproductive et les droits humains auprès des jeunes scolaires ruraux  dans l’Arrondissement de NkongNi, Menoua à l’Ouest Cameroun ».  Projet soutenu par Solidarité Sida Projet en cours dans 05 établissements scolaires: - Lycée de Bafou , -	Lycée de Baleveng , -	Lycée bilingue de Dziih Djutitsa , -	Collège IMOS à Dziih Djutitsa , -	Collège Polyvalent Saint Laurent de Bafou",
    status: "En cours",
    impact:
      "Sensibilisation, prevention et mise en garde de 90% de la jeunesse face aux dangers du VIH",
    budget: "....",
    duration: "...",
  },
  {
    id: 2,
    title:
      "Les reines contre les violences basées sur le genre et le VIH/sida à l’Ouest Cameroun",
    category: "Développement",
    image: projectHealth,
    location: "Ouest Cameroun",
    date: "Chaque annee",
    beneficiaries: "Reines et épouses de Notable dans la localité",
    shortDescription:
      "Projet communautaire impliquant la royauté : Reines et épouse de notables",
    fullDescription:
      "Ce projet soutenue par la Fondation de France, est d’une part, une innovation sociale qui enrôle les reines et les épouses des notables, jamais impliquées dans la vie publique de nos villages de l’Ouest Cameroun, dans la lutte contre les VBG, le VIH et SSR, et d’autre part, une poursuite des activités d’accompagnement au centre de la MEJ au profit de nos cibles surtout féminines.  C’est une initiative communautaire de diversification des acteurs traditionnels dans la lutte contre le VIH et les VBG en milieu rural.",
    status: "En cours",
    impact: "....",
    budget: "....",
    duration: "....",
  },
];

const categories = [
  "Tous",
  "Développement",
  "Santé",
  "Documentation",
  "Aides Directes",
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Banner - Réduit */}
      <section className="relative h-[20vh] min-h-[180px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Nos Projets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-accent-foreground mb-2 sm:mb-3 md:mb-4">
            Nos Projets
          </h1>
          <p className="text-accent-foreground/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Des actions concrètes pour un impact réel
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-8">
          {/* Titre */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
              Réalisations & Projets
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-4">
              Découvrez les initiatives que nous menons pour transformer notre
              communauté
            </p>
          </div>

          {/* Category Filter - Réduit */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                  category === selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-foreground/70 hover:bg-primary/10 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - En colonne simple sur mobile */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                {/* Carte compacte (état fermé) */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image - Toujours visible */}
                    <div className="w-full sm:w-1/3 md:w-2/5 lg:w-1/3 relative h-40 sm:h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Badge statut */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            project.status === "En cours"
                              ? "bg-secondary text-white"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      {/* Badge catégorie */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/90 text-foreground text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu principal */}
                    <div className="flex-1 p-4 sm:p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl text-foreground pr-4">
                          {project.title}
                        </h3>
                        <div className="flex-shrink-0">
                          {expandedProject === project.id ? (
                            <ChevronUp size={18} className="text-primary" />
                          ) : (
                            <ChevronDown size={18} className="text-primary" />
                          )}
                        </div>
                      </div>

                      {/* Description courte */}
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Métadonnées */}
                      <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-primary" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-primary" />
                          {project.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={12} className="text-primary" />
                          {project.beneficiaries}
                        </span>
                      </div>

                      {/* Indicateur pour dérouler */}
                      <div className="text-xs text-primary font-medium flex items-center gap-1">
                        <span>
                          {expandedProject === project.id
                            ? "Réduire les détails"
                            : "Voir plus de détails"}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Section déroulante */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/50">
                        {/* Description complète */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2">
                            Description du projet
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        {/* Détails supplémentaires */}
                        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div className="bg-white p-3 rounded-lg">
                            <div className="text-xs text-muted-foreground mb-1">
                              Impact
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {project.impact}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <div className="text-xs text-muted-foreground mb-1">
                              Budget
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {project.budget}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <div className="text-xs text-muted-foreground mb-1">
                              Durée
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {project.duration}
                            </div>
                          </div>
                        </div>

                        {/* Bouton pour réduire */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button
                            onClick={() => toggleProject(project.id)}
                            className="flex items-center gap-2 text-primary text-sm font-medium"
                          >
                            <ChevronUp size={16} />
                            <span>Réduire</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
