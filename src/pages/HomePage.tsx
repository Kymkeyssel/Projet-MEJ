import { useSwipeable } from "react-swipeable";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Heart,
  Target,
  Stethoscope,
  Calendar,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  Clock,
  User,
  ArrowLeft,
  Maximize2,
  Minimize2,
  ChevronDown,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

// Import images
import heroImage from "../assets/WhatsApp Image 2026-01-03 at 17.20.44.jpeg";
import projectDev from "@/assets/project-development.jpg";
import projectHealth from "@/assets/project-health.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectAid from "@/assets/project-aid.jpg";
import presidentPortrait from "../assets/president-portrait.jpeg";

const stats = [
  { number: "15+", label: "Années d'Expérience" },
  { number: "50+", label: "Projets Réalisés" },
  { number: "10K+", label: "Bénéficiaires" },
];

const values = [
  {
    icon: Users,
    title: "Solidarité",
    description: "Nous croyons en la force de l'union et du soutien mutuel.",
  },
  {
    icon: Heart,
    title: "Humanité",
    description:
      "Chaque action est guidée par le respect et la dignité humaine.",
  },
  {
    icon: Target,
    title: "Engagement",
    description:
      "Nous nous engageons pleinement pour le bien-être de notre communauté.",
  },
  {
    icon: Stethoscope,
    title: "Santé et Bien-être Global",
    description:
      "Promotion de la santé physique (sexuelle) et mentale dans la communauté.",
  },
];

const featuredProjects = [
  {
    image: projectDev,
    title: "Développement Communautaire",
    description:
      "Construction d'infrastructures essentielles pour les villages.",
  },
  {
    image: projectHealth,
    title: "Santé pour Tous",
    description: "Programmes de sensibilisation et accès aux soins de santé.",
  },
  {
    image: projectEducation,
    title: "Éducation & Formation",
    description: "Soutien scolaire et formations professionnelles.",
  },
];

const news = [
  {
    id: 1,
    title: "Nouveau programme de formation",
    excerpt:
      "Découvrez notre nouveau programme de formation dédié aux jeunes entrepreneurs.",
    date: "15 mars 2024",
    content:
      "La MEJ lance un programme de formation innovant pour accompagner les jeunes entrepreneurs dans leur développement. Ce programme intensif de 6 mois comprend des ateliers pratiques, des mentors individuels et des sessions de networking.",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Marie Laurent",
    readTime: "3 min",
    category: "Formation",
  },
  {
    id: 2,
    title: "Événement annuel de networking",
    excerpt: "Notre événement annuel réunira plus de 500 entrepreneurs.",
    date: "22 mars 2024",
    content:
      "L'événement annuel de networking de la MEJ promet d'être exceptionnel cette année. Plus de 500 entrepreneurs, investisseurs et experts se réuniront pour échanger et créer des opportunités de collaboration.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Dubois",
    readTime: "4 min",
    category: "Événement",
  },
  {
    id: 3,
    title: "Partenariat stratégique",
    excerpt:
      "Nous annonçons un nouveau partenariat avec une institution majeure.",
    date: "29 mars 2024",
    content:
      "La MEJ est fière d'annoncer un nouveau partenariat stratégique avec l'Institut d'Innovation. Ce partenariat permettra d'offrir des ressources supplémentaires à nos membres et d'élargir notre réseau.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sophie Martin",
    readTime: "2 min",
    category: "Partenariat",
  },
  {
    id: 4,
    title: "Lancement de la plateforme digitale",
    excerpt: "Découvrez notre nouvelle plateforme pour les membres.",
    date: "5 avril 2024",
    content:
      "Après plusieurs mois de développement, nous lançons notre nouvelle plateforme digitale exclusive aux membres. Cette plateforme offre des outils de gestion, des ressources pédagogiques et un espace de collaboration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Alexandre Petit",
    readTime: "5 min",
    category: "Technologie",
  },
  {
    id: 5,
    title: "Ateliers pratiques gratuits",
    excerpt:
      "Participez à nos ateliers pratiques pour développer vos compétences.",
    date: "12 avril 2024",
    content:
      "Nous organisons une série d'ateliers pratiques gratuits pour nos membres. Ces ateliers couvrent des sujets variés : gestion financière, marketing digital, pitch d'entreprise et développement commercial.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Camille Rousseau",
    readTime: "3 min",
    category: "Atelier",
  },
  {
    id: 6,
    title: "Succès des incubés",
    excerpt: "Félicitations à nos startups incubées qui lèvent des fonds.",
    date: "19 avril 2024",
    content:
      "Trois startups incubées par la MEJ viennent de réussir des levées de fonds totalisant plus de 2 millions d'euros. Un succès qui témoigne de la qualité de notre programme d'accompagnement.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Julien Moreau",
    readTime: "4 min",
    category: "Success Story",
  },
  {
    id: 7,
    title: "Forum de l'emploi 2024",
    excerpt: "Rencontrez les recruteurs des plus grandes entreprises.",
    date: "26 avril 2024",
    content:
      "Le Forum de l'emploi MEJ 2024 rassemblera plus de 50 entreprises à la recherche de jeunes talents.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Lisa Bernard",
    readTime: "3 min",
    category: "Emploi",
  },
  {
    id: 8,
    title: "Mentorat international",
    excerpt: "Développez votre réseau à l'international.",
    date: "3 mai 2024",
    content:
      "Le programme de mentorat international MEJ connecte nos membres avec des entrepreneurs expérimentés.",
    image:
      "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Pierre Leclerc",
    readTime: "4 min",
    category: "International",
  },
  {
    id: 9,
    title: "Workshop Innovation",
    excerpt: "Apprenez les dernières techniques d'innovation.",
    date: "10 mai 2024",
    content:
      "Workshop intensif sur les méthodologies d'innovation les plus récentes.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Dubois",
    readTime: "2 min",
    category: "Workshop",
  },
  {
    id: 10,
    title: "Financement participatif",
    excerpt: "Nouvelle plateforme de financement pour vos projets.",
    date: "17 mai 2024",
    content:
      "Lancement de notre plateforme de financement participatif dédiée aux membres.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Marc Lefevre",
    readTime: "3 min",
    category: "Finance",
  },
  {
    id: 11,
    title: "Réseau alumni",
    excerpt: "Rejoignez notre réseau alumni croissant.",
    date: "24 mai 2024",
    content:
      "Notre réseau alumni compte désormais plus de 1000 membres à travers le monde.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Julie Martin",
    readTime: "2 min",
    category: "Réseau",
  },
  {
    id: 12,
    title: "Conférence annuelle",
    excerpt: "Inscrivez-vous à notre conférence annuelle 2024.",
    date: "31 mai 2024",
    content:
      "La conférence annuelle MEJ 2024 réunira les meilleurs experts du secteur.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Leroy",
    readTime: "4 min",
    category: "Conférence",
  },
];

const HomePage = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const carouselRef = useRef(null);

  // Configuration responsive - 2 mobile / 3 tablette / 4 desktop
  const itemsPerView = {
    base: 2, // 2 sur mobile (< 768px)
    md: 3, // 3 sur tablette (768px - 1024px)
    lg: 4, // 4 sur desktop (>= 1024px)
  };

  // Détection du responsive
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkResponsive();
    window.addEventListener("resize", checkResponsive);

    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  // Calcul du nombre d'éléments visibles actuel
  const getCurrentItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return itemsPerView.lg; // 4
      if (window.innerWidth >= 768) return itemsPerView.md; // 3
    }
    return itemsPerView.base; // 2
  };

  // Gestion du swipe avec react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    delta: 30, // Distance minimale de swipe réduite
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });

  // Navigation
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = getCurrentItemsPerView();
      return prevIndex >= news.length - itemsPerView ? 0 : prevIndex + 1;
    });
  }, [news.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = getCurrentItemsPerView();
      return prevIndex <= 0 ? news.length - itemsPerView : prevIndex - 1;
    });
  }, [news.length]);

  // Lecture d'une actualité
  const handleReadMore = (item) => {
    setSelectedNews(item);
  };

  // Fermeture du modal
  const closeModal = () => {
    setSelectedNews(null);
  };

  // Calcul de la translation
  const currentItemsPerView = getCurrentItemsPerView();
  const translateX = -currentIndex * (100 / currentItemsPerView);

  // Nombre total de slides
  const totalSlides = Math.ceil(news.length / currentItemsPerView);
  const currentSlide = Math.floor(currentIndex / currentItemsPerView) + 1;

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Layout texte à gauche */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Communauté La MEJ"
            className="w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-black/30" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/70 via-accent/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        {/* Decorative Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-10 left-1/4 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-primary blur-2xl sm:blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-1/4 right-10 sm:right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-secondary blur-2xl sm:blur-3xl"
        />
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center py-8 sm:py-12 lg:py-0 lg:min-h-[70vh]">
            {/* Colonne texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-primary/25 backdrop-blur-sm rounded-full text-primary-foreground font-medium text-sm sm:text-base mb-2 sm:mb-4 border border-primary/30"
              >
                Bienvenue à La MEJ
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-accent-foreground leading-tight sm:leading-tight"
              >
                <div className="font-heading font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-accent-foreground leading-tight sm:leading-tight">
                  La Maison de Enfants et des Jeunes.
                </div>
                <div className=" text-xl sm:text-lg md:text-lg lg:text-xl xl:text-xl text-primary leading-tight sm:leading-tight">
                  <span className=" mr-2 text-primary relative">
                    C'est donner un peu de nous
                    {/* <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className=" absolute bottom-1 sm:bottom-1.5 left-0 h-0.5 sm:h-1 bg-primary/50 rounded-full"
                    /> */}
                  </span>
                  pour les autres.
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-accent-foreground/95 font-accent italic border-l-3 sm:border-l-4 border-primary/40 pl-4 sm:pl-6 py-1 sm:py-2 my-4 sm:my-6"
              >
                "Association créée au Cameroun (Préfecture de Dschang) sous la
                Déclaration N°80/RDA/F.34/BAPP du 22 Décembre 2008."
              </motion.p>

              {/* Boutons sur la même ligne */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <Link
                  to="/a-propos"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-warm hover:-translate-y-1 hover:scale-105 group flex-1 min-w-[140px]"
                >
                  <span>Découvrir La MEJ</span>
                  <ArrowRight
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-card/90 backdrop-blur-sm text-foreground border border-primary/40 rounded-full font-heading font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-primary/15 hover:border-primary/60 flex-1 min-w-[140px]"
                >
                  <Users size={18} className="sm:w-5 sm:h-5" />
                  <span>Nous Rejoindre</span>
                </Link>
              </motion.div>

              {/* Stats compactes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8 mt-4 sm:mt-8 border-t border-accent-foreground/10"
              >
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-accent-foreground/70">
                    Membres actifs
                  </div>
                </div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">
                    25+
                  </div>
                  <div className="text-xs sm:text-sm text-accent-foreground/70">
                    Événements
                  </div>
                </div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-accent-foreground/70">
                    Communautés
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne visuelle/image - Optimisée pour responsive */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex items-center justify-end relative"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-secondary/20 rounded-full blur-xl"
                />
                <div className="relative bg-card/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl sm:shadow-2xl">
                  <div className="aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Play size={32} className="sm:w-12 sm:h-12 text-primary" />
                  </div>
                  <p className="text-center mt-4 sm:mt-6 text-sm sm:text-base text-accent-foreground/80">
                    Découvrez notre communauté en action
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Scroll indicator pour mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden"
        >
          <ChevronDown size={24} className="text-primary/60 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-center p-2 sm:p-1 bg-white/40 backdrop-blur-sm rounded-lg sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="block font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary ">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight sm:leading-normal">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* President's Message Section - Photo cube en responsive */}
      <section className="section-padding bg-gradient-to-br from-ocre-light via-background to-turquoise-light">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Mot de la Présidente"
            subtitle="Un message de Bienvenue de notre fondatrice et guide"
          />

          {/* Version Desktop - Layout original */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-warm">
                <img
                  src={presidentPortrait}
                  alt="Présidente de La MEJ"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-secondary/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic font-accent text-xl">
                " La MEJ, c’est une histoire et une identité, une histoire qui
                continue de se forger depuis plus de 15 ans en s’appuyant sur de
                nombreuses personnes qui ont très vite compris que le
                développement passe par l’éducation précoce et la prévention en
                santé avec une vision selon laquelle il est possible de
                construire une société où les enfants et jeunes vivent en bonne
                santé et jouissent du bien-être global, sans distinction
                aucune.. Avec une vision très ambitieuse, nous avions toujours
                ce goût de l’inachevé, mais des ressources intangibles autour de
                nous, et de nombreux partenaires, nous ont donné l’envie et la
                force de continuer notre mission sociale. Acteurs et actrices
                communautaires, nos membres se sont inscrits dans une
                perspective globale de développement. L’équipe de la MEJ, malgré
                les ressources limitées garde le cap, restant consciente des
                enjeux de santé préventive et communautaire, d’écoute et
                d’accompagnement de nos cibles nécessiteuses de plus en plus
                nombreuses, de soutien aux femmes et filles victimes de
                violences basées sur le genre et vers leur autonomisation,
                d’implication dans la lutte contre les changements climatiques
                pour une santé globale. "
              </blockquote>
              <div className="pt-4">
                <p className="font-heading italic font-semibold text-lg text-accent">
                  Mme YMELE NOUAZI Berte FLorence
                </p>
                <p className="text-muted-foreground ">Presidente MEJ</p>
                <p className="text-muted-foreground font-thin text-sm mt-2">
                  Assistante Principale des Affaires Sociales Experte
                  consultante en Développement Genre et droits humains en santé.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Version Responsive (mobile/tablette) - Photo cube dans le texte */}
          <div className="lg:hidden max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
            >
              {/* En-tête avec photo cube et titre */}
              <div className="flex items-start gap-4 mb-6">
                {/* Photo cube */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-md ring-2 ring-primary/30">
                    <img
                      src={presidentPortrait}
                      alt="Président de La MEJ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge décoratif */}
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    Presi
                  </div>
                </div>

                {/* Titre et infos */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Mot de la Présidente
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    Mme Ymele Nouazi Berthe Florence • Presidente MEJ
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-muted-foreground">
                    <Calendar size={12} className="text-primary" />
                    <span>Depuis 2008</span>
                  </div>
                </div>
              </div>

              {/* Message avec même style que desktop */}
              <blockquote className="text-2xl md:text-3xl text-foreground/90 leading-relaxed italic font-accent text-2xl">
                " La MEJ, c’est une histoire et une identité, une histoire qui
                continue de se forger depuis plus de 15 ans en s’appuyant sur de
                nombreuses personnes qui ont très vite compris que le
                développement passe par l’éducation précoce et la prévention en
                santé avec une vision selon laquelle il est possible de
                construire une société où les enfants et jeunes vivent en bonne
                santé et jouissent du bien-être global, sans distinction
                aucune.. Avec une vision très ambitieuse, nous avions toujours
                ce goût de l’inachevé, mais des ressources intangibles autour de
                nous, et de nombreux partenaires, nous ont donné l’envie et la
                force de continuer notre mission sociale. Acteurs et actrices
                communautaires, nos membres se sont inscrits dans une
                perspective globale de développement. L’équipe de la MEJ, malgré
                les ressources limitées garde le cap, restant consciente des
                enjeux de santé préventive et communautaire, d’écoute et
                d’accompagnement de nos cibles nécessiteuses de plus en plus
                nombreuses, de soutien aux femmes et filles victimes de
                violences basées sur le genre et vers leur autonomisation,
                d’implication dans la lutte contre les changements climatiques
                pour une santé globale."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-1 sm:mb-2">
            Nos Valeurs
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mb-2 mx-auto px-4">
            Les principes qui guident notre action quotidienne
          </p>

          {/* Version Desktop - 4 colonnes (inchangé) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="community-card text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Version Responsive (mobile/tablette) - 2 colonnes compactes */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-30px" }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Icône plus petite */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon
                      size={20}
                      className="sm:w-6 sm:h-6 text-primary"
                    />
                  </div>

                  {/* Titre plus court */}
                  <h3 className="font-heading font-semibold text-sm sm:text-base mb-1 sm:mb-2 text-foreground line-clamp-2">
                    {value.title}
                  </h3>

                  {/* Description réduite */}
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      {/* <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nos Projets Phares"
            subtitle="Découvrez les initiatives qui transforment notre communauté"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-warm transition-all duration-300"
            >
              Voir tous les projets
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* News Section */}
      {/* <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Actualités"
            subtitle="Les dernières nouvelles de La MEJ"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="community-card group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Lire plus <ChevronRight size={16} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
       */}

      <section className="section-padding bg-secondary/10" id="actualites">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* En-tête avec titre et contrôles */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                Actualités
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl">
                Les dernières nouvelles de La MEJ
              </p>
            </div>

            {/* Contrôles et indicateurs */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Bouton mode compact (optionnel) */}
              <button
                onClick={() => setCompactMode(!compactMode)}
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                title={compactMode ? "Mode normal" : "Mode compact"}
              >
                {compactMode ? (
                  <Maximize2 size={18} />
                ) : (
                  <Minimize2 size={18} />
                )}
                <span className="text-sm font-medium">
                  {compactMode ? "Étendu" : "Compact"}
                </span>
              </button>

              {/* Indicateur de progression */}
              <div className="text-sm text-muted-foreground bg-white/50 px-3 py-1.5 rounded-lg ml-auto md:ml-0">
                <span className="font-semibold text-primary">
                  {currentSlide}
                </span>
                <span className="mx-1">/</span>
                <span>{totalSlides}</span>
              </div>

              {/* Contrôles navigation desktop */}
              <div className="hidden md:flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary/5 transition-all border border-gray-200"
                  aria-label="Précédent"
                >
                  <ChevronLeft size={20} className="text-primary" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary/5 transition-all border border-gray-200"
                  aria-label="Suivant"
                >
                  <ChevronRight size={20} className="text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicateur de swipe mobile */}
          {isMobile && (
            <div className="md:hidden flex justify-center items-center gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/80 px-3 py-1.5 rounded-full">
                <ArrowLeft size={14} className="text-primary" />
                <span className="font-medium">Glisser</span>
                <ArrowRight size={14} className="text-primary" />
              </div>
            </div>
          )}

          {/* Carrousel */}
          <div
            {...swipeHandlers}
            className="relative overflow-hidden rounded-xl bg-white/20 p-2"
          >
            <motion.div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translateX(${translateX}%)`,
                touchAction: "pan-y",
              }}
            >
              {news.map((item) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`community-card group cursor-pointer flex-shrink-0 ${
                    compactMode ? "p-3" : "p-3 sm:p-4"
                  }`}
                  style={{
                    width: `${100 / currentItemsPerView}%`,
                    // Ajustements pour le mode compact
                    ...(compactMode && {
                      maxWidth: "280px",
                      margin: "0 auto",
                    }),
                  }}
                  onClick={() => handleReadMore(item)}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-lg mb-3 ${
                      compactMode ? "h-32" : "h-36 sm:h-40"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span
                        className={`px-2 py-0.5 bg-primary text-white font-semibold rounded-full ${
                          compactMode ? "text-[10px]" : "text-xs"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-2">
                    {/* Date */}
                    <div className="flex items-center gap-1.5">
                      <Calendar
                        size={compactMode ? 12 : 14}
                        className="text-primary"
                      />
                      <span
                        className={`text-muted-foreground ${
                          compactMode ? "text-[11px]" : "text-xs sm:text-sm"
                        }`}
                      >
                        {item.date}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3
                      className={`font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
                        compactMode
                          ? "text-sm leading-tight"
                          : "text-base sm:text-lg leading-snug"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Extrait */}
                    {!compactMode && (
                      <p className="text-muted-foreground line-clamp-2 text-xs sm:text-sm leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Métadonnées */}
                    {!compactMode && (
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <User size={12} />
                            <span className="hidden xs:inline">
                              {item.author}
                            </span>
                            <span className="xs:hidden">
                              {item.author.split(" ")[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bouton Lire plus */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadMore(item);
                      }}
                      className={`inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all ${
                        compactMode ? "text-xs" : "text-sm"
                      }`}
                    >
                      <span>Lire</span>
                      <ChevronRight
                        size={compactMode ? 12 : 14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Flèches de navigation mobile (overlay) */}
            {isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm z-10"
                  aria-label="Précédent"
                >
                  <ChevronLeft size={18} className="text-primary" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm z-10"
                  aria-label="Suivant"
                >
                  <ChevronRight size={18} className="text-primary" />
                </button>
              </>
            )}
          </div>

          {/* Indicateurs de points et bouton Voir tout */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            {/* Points indicateurs */}
            <div className="flex gap-1.5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * currentItemsPerView)}
                  className={`transition-all duration-300 rounded-full ${
                    index === Math.floor(currentIndex / currentItemsPerView)
                      ? "bg-primary w-6 sm:w-8 h-2"
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {currentItemsPerView} articles visibles
              </span>
              <button
                onClick={() => setCurrentIndex(0)}
                className="text-sm text-primary font-medium hover:text-primary/80 transition-colors px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Voir toutes les actualités
              </button>
            </div>
          </div>
        </div>

        {/* Modal de lecture */}
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl sm:rounded-2xl max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* En-tête du modal */}
              <div className="sticky top-0 bg-white px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b flex justify-between items-start z-10">
                <div className="pr-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full mb-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {selectedNews.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    {selectedNews.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors shrink-0"
                  aria-label="Fermer"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Contenu défilable */}
              <div className="overflow-y-auto flex-1">
                {/* Image héro */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenu détaillé */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Métadonnées */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <div>
                        <div className="font-medium">Date</div>
                        <div className="text-foreground">
                          {selectedNews.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-primary" />
                      <div>
                        <div className="font-medium">Auteur</div>
                        <div className="text-foreground">
                          {selectedNews.author}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <div>
                        <div className="font-medium">Lecture</div>
                        <div className="text-foreground">
                          {selectedNews.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu principal */}
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedNews.content}
                    </p>

                    {/* Section points clés */}
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 my-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        Points clés
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight
                            size={14}
                            className="text-primary mt-1"
                          />
                          <span>
                            Programme adapté aux besoins des entrepreneurs
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight
                            size={14}
                            className="text-primary mt-1"
                          />
                          <span>
                            Accompagnement personnalisé par des experts
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight
                            size={14}
                            className="text-primary mt-1"
                          />
                          <span>Réseau de partenaires et d'investisseurs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pied de modal */}
              <div className="sticky bottom-0 bg-white px-4 sm:px-6 py-3 sm:py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Article publié par La MEJ • {selectedNews.date}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Fermer
                  </button>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(window.location.href)
                    }
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    Partager
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${projectAid})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-accent-foreground mb-4">
              Rejoignez Notre Mouvement
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8">
              Ensemble, nous pouvons faire la différence. Rejoignez notre
              communauté et participez à la construction d'une communauté
              meilleure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold hover:shadow-warm transition-all duration-300"
            >
              Devenir Membre
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
