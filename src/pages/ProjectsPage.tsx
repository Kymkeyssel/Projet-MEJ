import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import ip1 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.07.59.jpeg";
import ip2 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.06.58.jpeg";
import ip3 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.06.40.jpeg";
import ip4 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.06.56.jpeg";
import ip5 from "../assets/Projet_1/rub 2/WhatsApp Image 2026-01-03 at 14.06.16.jpeg";
import ip6 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.07.14.jpeg";
import ip7 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.08.02.jpeg";
import ip8 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.08.06.jpeg";
import ip9 from "../assets/Projet_1/rub 1/WhatsApp Image 2026-01-03 at 14.07.56.jpeg";
import ip11 from "../assets/Projet_1/rub 1/image1.jpeg";
import ip12 from "../assets/Projet_1/rub 2/WhatsApp Image 2026-01-03 at 14.06.39.jpeg";
import ip13 from "../assets/Projet_1/rub 2/WhatsApp Image 2026-01-03 at 14.06.56.jpeg";
import ip14 from "../assets/Projet_1/rub 2/WhatsApp Image 2026-01-03 at 14.06.58.jpeg";

import ip15 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.04.01.jpeg";
import ip16 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.06.09.jpeg";
import ip17 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.08.55.jpeg";
import ip18 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.16.23.jpeg";
import ip19 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.16.47.jpeg";
import ip20 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.18.33.jpeg";
import ip21 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.24.49.jpeg";
import ip22 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.24.50.jpeg";
import ip23 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.24.51.jpeg";
import ip24 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.26.19.jpeg";
import ip25 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.27.47.jpeg";
import ip26 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.34.45.jpeg";
import ip27 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.48.30.jpeg";
import ip28 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.48.57.jpeg";
import ip29 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.49.41.jpeg";
import ip30 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.50.17.jpeg";
import ip31 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 16.53.05.jpeg";
import ip32 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 17.21.12.jpeg";
import ip33 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 17.13.15.jpeg";
import ip34 from "../assets/Projet_2/WhatsApp Image 2026-01-03 at 17.12.46.jpeg";

// Tableau d'images pour chaque projet
const projectImages = [
  ip3,
  ip4,
  ip5,
  ip6,
  ip7,
  ip8,
  ip9,
  ip11,
  ip12,
  ip13,
  ip14,
  ip15,
  ip16,
  ip17,
  ip18,
  ip19,
  ip20,
  ip21,
  ip22,
  ip23,
  ip24,
  ip25,
  ip26,
  ip27,
  ip28,
  ip29,
  ip30,
  ip31,
  ip32,
  ip33,
  ip34,
  heroImage,
];

const projects = [
  {
    id: 1,
    title: "Sauver les nouvelles générations",
    category: "Santé",
    // Projet 1 avec 2 rubriques
    images: [
      // Rubrique 1 : Sensibilisation scolaire
      {
        section: "Sensibilisation scolaire",
        images: [
          {
            src: projectImages[0],
            comment: "Séance de sensibilisation sur la prévention du VIH",
          },
          {
            src: projectImages[1],
            comment: "Distribution de matériel éducatif dans une classe",
          },
          {
            src: projectImages[3],
            comment: "Atelier d'échanges avec les élèves",
          },
          {
            src: projectImages[5],
            comment: "Présentation sur les droits reproductifs",
          },
          {
            src: projectImages[6],
            comment: "Discussion en groupe sur la santé sexuelle",
          },
          {
            src: projectImages[7],
            comment: "Session de questions-réponses avec les jeunes",
          },
          {
            src: projectImages[8],
            comment: "Activité interactive de prévention",
          },
          {
            src: projectImages[9],
            comment: "Rencontre avec l'équipe éducative de l'établissement",
          },
        ],
      },
      // Rubrique 2 : Ateliers pratiques
      {
        section: "Ateliers pratiques",
        images: [
          {
            src: projectImages[3],
            comment: "Formation des pairs éducateurs",
          },
          {
            src: projectImages[9],
            comment: "Exercice pratique de communication",
          },
          {
            src: projectImages[10],
            comment: "Travail en petits groupes",
          },
          {
            src: projectImages[12],
            comment: "Évaluation des connaissances acquises",
          },
        ],
      },
    ],
    location: "Ouest Cameroun",
    date: "Chaque année",
    beneficiaries: "Établissements scolaires",
    shortDescription:
      "Initiative communautaire de lutte contre le VIH et les IST, en prenant en compte le genre, les VBG et la SSR en milieu rural.",
    fullDescription:
      "Prévention du VIH/sida basée sur le genre, la santé sexuelle et reproductive et les droits humains auprès des jeunes scolaires ruraux dans l'Arrondissement de NkongNi, Menoua à l'Ouest Cameroun. Projet soutenu par Solidarité Sida Projet en cours dans 05 établissements scolaires:\n- Lycée de Bafou\n- Lycée de Baleveng\n- Lycée bilingue de Dziih Djutitsa\n- Collège IMOS à Dziih Djutitsa\n- Collège Polyvalent Saint Laurent de Bafou",
    status: "En cours",
    impact:
      "Sensibilisation, prévention et mise en garde de 90% de la jeunesse face aux dangers du VIH",
    budget: "À définir",
    duration: "En continu",
  },
  {
    id: 2,
    title:
      "Les reines contre les violences basées sur le genre et le VIH/sida à l'Ouest Cameroun",
    category: "Développement",
    // Projet 2 avec 1 seule rubrique
    images: [
      {
        section: "Activités communautaires",
        images: [
          {
            src: projectImages[13],
            comment: "Rencontre avec les reines de la communauté",
          },
          {
            src: projectImages[14],
            comment: "Cérémonie traditionnelle d'engagement",
          },
          {
            src: projectImages[15],
            comment: "Atelier de formation des leaders traditionnels",
          },
          {
            src: projectImages[16],
            comment: "Séance de travail avec les épouses de notables",
          },
          {
            src: projectImages[17],
            comment: "Action communautaire de sensibilisation",
          },
          {
            src: projectImages[18],
            comment: "Réunion de planification des activités",
          },
          {
            src: projectImages[19],
            comment: "Événement public de lancement du projet",
          },
          {
            src: projectImages[20],
            comment: "Travail de terrain avec les femmes leaders",
          },
          {
            src: projectImages[21],
            comment: "Célébration des premiers résultats obtenus",
          },
          {
            src: projectImages[22],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[23],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[24],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[25],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[26],
            comment: "Partage d'expériences entre les participantes",
          },

          {
            src: projectImages[27],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[28],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[29],
            comment: "Partage d'expériences entre les participantes",
          },
          {
            src: projectImages[30],
            comment: "Partage d'expériences entre les participantes",
          },
        ],
      },
    ],
    location: "Ouest Cameroun",
    date: "Chaque année",
    beneficiaries: "Reines et épouses de notables dans la localité",
    shortDescription:
      "Projet communautaire impliquant la royauté : Reines et épouses de notables",
    fullDescription:
      "Ce projet soutenu par la Fondation de France, est d'une part, une innovation sociale qui enrôle les reines et les épouses des notables, jamais impliquées dans la vie publique de nos villages de l'Ouest Cameroun, dans la lutte contre les VBG, le VIH et SSR, et d'autre part, une poursuite des activités d'accompagnement au centre de la MEJ au profit de nos cibles surtout féminines. C'est une initiative communautaire de diversification des acteurs traditionnels dans la lutte contre le VIH et les VBG en milieu rural.",
    status: "En cours",
    impact: "Renforcement du leadership féminin traditionnel",
    budget: "À définir",
    duration: "En continu",
  },
];

const categories = [
  "Tous",
  "Développement",
  "Santé",
  "Documentation",
  "Aides Directes",
];

// Composant Carrousel pour une rubrique d'images
const ImageCarousel = ({ images, sectionName, autoPlayInterval = 4000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showComment, setShowComment] = useState(true);
  const timerRef = useRef(null);

  // Défilement automatique
  useEffect(() => {
    if (!isPaused && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, images.length, autoPlayInterval]);

  // Navigation manuelle
  const goToNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index, e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Image actuelle */}
      <div className="absolute inset-0">
        <img
          src={currentImage.src}
          alt={`Image ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Nom de la section */}
      {sectionName && (
        <div className="absolute top-2 left-2 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          {sectionName}
        </div>
      )}

      {/* Commentaire sur l'image */}
      {showComment && currentImage.comment && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white z-20"
        >
          <div className="flex items-start gap-2">
            <MessageSquare size={14} className="mt-0.5 flex-shrink-0" />
            <p className="text-xs sm:text-sm leading-tight">
              {currentImage.comment}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowComment(false);
            }}
            className="absolute top-2 right-2 text-white/70 hover:text-white text-xs"
            aria-label="Masquer le commentaire"
          >
            ×
          </button>
        </motion.div>
      )}

      {/* Bouton pour afficher/masquer le commentaire */}
      {currentImage.comment && !showComment && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowComment(true);
          }}
          className="absolute bottom-2 right-2 z-20 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
          aria-label="Afficher le commentaire"
        >
          <MessageSquare size={14} />
        </button>
      )}

      {/* Boutons de navigation (visible au survol) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft size={16} className="sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Image suivante"
          >
            <ChevronRight size={16} className="sm:w-4 sm:h-4" />
          </button>
        </>
      )}

      {/* Indicateurs de progression (points) */}
      {images.length > 1 && (
        <div className="absolute bottom-12 sm:bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToImage(index, e)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Compteur d'images */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full z-10">
          {currentImageIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

// Composant principal pour afficher les carrousels d'un projet
const ProjectImageCarousels = ({ project }) => {
  const [activeCarousel, setActiveCarousel] = useState(0);
  const currentSection = project.images[activeCarousel];

  return (
    <div className="relative w-full h-full">
      {/* Carrousel actif */}
      <div className="absolute inset-0">
        <ImageCarousel
          images={currentSection.images}
          sectionName={currentSection.section}
          autoPlayInterval={5000}
        />
      </div>

      {/* Badges superposés */}
      <div className="absolute top-3 left-3 z-30">
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
      <div className="absolute top-3 right-3 z-30">
        <span className="px-2.5 py-1 rounded-full bg-white/90 text-foreground text-xs font-medium">
          {project.category}
        </span>
      </div>

      {/* Navigation entre rubriques (si plus d'une) */}
      {project.images.length > 1 && (
        <>
          {/* Indicateur de rubriques */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-30">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCarousel(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeCarousel
                    ? "bg-white scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Aller à la rubrique ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Indicateur carrousel */}
      {currentSection.images.length > 1 && (
        <div className="absolute bottom-2 left-3 z-20">
          <div className="flex items-center gap-1 text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
            <div className="flex items-center">
              {[...Array(Math.min(3, currentSection.images.length))].map(
                (_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white mx-0.5"
                  />
                )
              )}
              {currentSection.images.length > 3 && (
                <span className="text-xs ml-1">
                  +{currentSection.images.length - 3}
                </span>
              )}
            </div>
            <span className="text-xs ml-1">
              {project.images.length > 1 &&
                `(${activeCarousel + 1}/${project.images.length})`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Formater la description avec les tirets pour les listes
  const formatDescription = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.trim().startsWith("-")) {
        return (
          <div key={index} className="ml-4 text-sm text-muted-foreground">
            {line}
          </div>
        );
      }
      return (
        <p
          key={index}
          className="mb-2 text-sm text-muted-foreground leading-relaxed"
        >
          {line}
        </p>
      );
    });
  };

  // Filtrer les projets par catégorie
  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Banner */}
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

          {/* Category Filter */}
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

          {/* Projects Grid */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
              >
                {/* Carte compacte (état fermé) */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Zone du carrousel */}
                    <div className="w-full sm:w-1/3 md:w-2/5 lg:w-1/3 relative h-40 sm:h-48">
                      {/* Carrousel(s) d'images */}
                      <ProjectImageCarousels project={project} />
                    </div>

                    {/* Contenu principal */}
                    <div className="flex-1 p-4 sm:p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading font-bold text-base sm:text-xl md:text-2xl text-foreground pr-4">
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

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.shortDescription}
                      </p>

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
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {formatDescription(project.fullDescription)}
                          </div>
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

                        {/* Galerie d'images par rubrique */}
                        {project.images.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3">
                              Galerie du projet
                            </h4>

                            {project.images.map((section, sectionIndex) => (
                              <div
                                key={sectionIndex}
                                className="mb-6 last:mb-0"
                              >
                                <h5 className="text-sm font-medium text-foreground mb-2">
                                  {section.section} ({section.images.length}{" "}
                                  photos)
                                </h5>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                  {section.images.map((img, imgIndex) => (
                                    <div
                                      key={imgIndex}
                                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
                                    >
                                      <img
                                        src={img.src}
                                        alt={`${section.section} - Image ${
                                          imgIndex + 1
                                        }`}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute top-2 left-2 bg-primary text-white text-xs px-1.5 py-0.5 rounded">
                                        {sectionIndex + 1}.{imgIndex + 1}
                                      </div>
                                      {/* Commentaire au survol */}
                                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex items-end">
                                        <div className="text-white text-xs">
                                          <div className="flex items-center gap-1 mb-1">
                                            <MessageSquare size={12} />
                                            <span className="font-medium">
                                              Commentaire :
                                            </span>
                                          </div>
                                          <p>
                                            {img.comment || "Image du projet"}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

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
