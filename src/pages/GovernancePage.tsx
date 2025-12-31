import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Users,
  Crown,
  FileText,
  Briefcase,
  Shield,
  Calculator,
  PenTool,
  Heart,
  BookOpen,
  Stethoscope,
  HandHeart,
  UserCog,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SectionTitle from "@/components/SectionTitle";
import heroImage from "@/assets/hero-community.jpg";

interface Position {
  id: string;
  title: string;
  icon: typeof Users;
  description: string;
  responsibilities: string[];
  parent?: string;
}

const positions: Position[] = [
  // Assemblée Générale
  {
    id: "ag",
    title: "Assemblée Générale",
    icon: Users,
    description:
      "Instance suprême de décision de l'association. Elle réunit tous les membres et définit les orientations stratégiques.",
    responsibilities: [
      "Adoption et modification des statuts",
      "Élection des membres du bureau",
      "Approbation du rapport moral et financier",
      "Définition des grandes orientations",
    ],
  },
  // Bureau Exécutif
  {
    id: "bureau",
    title: "Bureau Exécutif",
    icon: Briefcase,
    description:
      "Organe exécutif de l'association chargé de la mise en œuvre des décisions de l'Assemblée Générale.",
    responsibilities: [
      "Mise en œuvre des décisions stratégiques",
      "Gestion opérationnelle quotidienne",
      "Coordination des différentes commissions",
      "Présentation des rapports d'activité",
    ],
    parent: "ag",
  },
  // Présidente
  {
    id: "president",
    title: "Présidente",
    icon: Crown,
    description:
      "Chef de l'association, elle représente La MEJ auprès des tiers et assure la coordination générale; Organise et coordonne la Direction Exécutive (DE) ou la Coordination de l’association en vue de l’exécution concrète des missions de l’association, selon les orientations de ‘AG à ce titre, il/elle ",
    responsibilities: [
      "Nomme le/la DE le.la Coordina.teur.trice après avis du bureau ; ",
      "Convoque et préside les réunions du BE ;",
      "Exécute les décisions de l’AG ;",
      "Donne délégation de signature dans les conditions précisées dans le règlement intérieur ;",
      "Coordonne et veille au bon fonctionnement de l'association ;",
      "Veille à l’exécution des décisions de l’AG ainsi qu'au respect des statuts et du règlement intérieur de l'association ;",
      "Représente l'association dans les actes de la vie civile ;",
      "Assure le suivi de la gestion administrative et financière ;",
      "Assure l’interface entre l’association, les partenaires institutionnels, techniques et financiers. ",
      "Coordonne la mobilisation des ressources.",
    ],
    parent: "bureau",
  },
  // Conseillers
  {
    id: "conseillers",
    title: "Conseillers",
    icon: UserCog,
    description:
      "Membres du bureau apportant leur expertise et conseils sur des domaines spécifiques.",
    responsibilities: [
      "Conseil stratégique",
      "Expertise thématique",
      "Participation aux décisions",
      "Représentation sectorielle",
    ],
    parent: "president",
  },
  // Vice-Présidente
  {
    id: "vice-presidente",
    title: "Vice-Présidente",
    icon: Shield,
    description:
      "Seconde la Présidente et la remplace en cas d'absence ou d'empêchement.",
    responsibilities: [
      "Exécute toutes les tâches qui lui sont confiées par le.la Président.e ;",
      "Remplace le.la Président.e en cas d'empêchement.",
    ],
    parent: "president",
  },
  // Postes sous Vice-Présidente
  {
    id: "tresorier",
    title: "Trésorier",
    icon: Calculator,
    description:
      "Gestionnaire des finances de l'association, garant de la bonne tenue des comptes.",
    responsibilities: [
      "Assure l'encaissement des fonds qu'il/elle dépose dans un compte ouvert à cet effet ;",
      "Exécute les dépenses ordonnées par le.la Président.e",
      "Tient les documents de gestion de l’association.",
    ],
    parent: "vice-president",
  },
  {
    id: "secretaire",
    title: "Secrétaire Générale",
    icon: PenTool,
    description:
      "Responsable de la gestion administrative et de la documentation de l'association.",
    responsibilities: [
      "Tient les registres de l'association ;",
      "Rédige les procès-verbaux des réunions ; ",
      "Assure l’archivage des documents de l’association.",
    ],
    parent: "vice-president",
  },
  {
    id: "commissaire",
    title: "Commissaire aux Comptes",
    icon: FileText,
    description:
      "Contrôleur indépendant chargé de vérifier la régularité des comptes.",
    responsibilities: [
      "Assure le contrôle et la régularité de la gestion financière ;",
      "Contrôle les différents mouvements financiers de l’association ;",
      "Vérifie les livrets de banque et les transactions financières ;",
      "Rend compte de la situation financière de l'association.",
    ],
    parent: "vice-president",
  },
  // Chargés des Programmes
  {
    id: "programmes",
    title: "Chargés des Programmes",
    icon: Briefcase,
    description:
      "Responsables de la conception, mise en œuvre et suivi des programmes de l'association.",
    responsibilities: [
      "Conception des programmes",
      "Coordination des projets",
      "Suivi et évaluation",
      "Reporting aux partenaires",
    ],
    parent: "bureau",
  },
  // Sous Chargés des Programmes
  {
    id: "documentation",
    title: "Documentation & Centre de Ressources",
    icon: BookOpen,
    description:
      "Gestion de l'information, archivage et capitalisation des expériences.",
    responsibilities: [
      "Collecte de données",
      "Archivage documentaire",
      "Production de supports",
      "Capitalisation des expériences",
    ],
    parent: "programmes",
  },
  {
    id: "developpement",
    title: "Femmes & Développement",
    icon: Heart,
    description:
      "Conduite des projets de développement communautaire et renforcement des capacités.",
    responsibilities: [
      "Projets de développement",
      "Renforcement des capacités",
      "Partenariats locaux",
      "Mobilisation communautaire",
    ],
    parent: "programmes",
  },
  {
    id: "sante",
    title: "Santé",
    icon: Stethoscope,
    description:
      "Mise en œuvre des programmes de santé communautaire et sensibilisation.",
    responsibilities: [
      "Campagnes de sensibilisation",
      "Programmes de santé",
      "Partenariats sanitaires",
      "Suivi des indicateurs santé",
    ],
    parent: "programmes",
  },
  {
    id: "aides",
    title: "Aides Directes",
    icon: HandHeart,
    description:
      "Organisation et distribution de l'aide aux personnes vulnérables.",
    responsibilities: [
      "Identification des bénéficiaires",
      "Distribution de l'aide",
      "Suivi des bénéficiaires",
      "Coordination des actions d'urgence",
    ],
    parent: "programmes",
  },
];

const GovernancePage = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null
  );

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Banner */}
      <section className="relative h-[20vh] min-h-[180px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gouvernance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/70 to-primary/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4">
            Gouvernance
          </h1>
          <p className="text-accent-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
            Notre structure organisationnelle au service de la communauté
          </p>
        </motion.div>
      </section>

      {/* Organigramme */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Organigramme"
            subtitle="La structure de gouvernance de La MEJ"
          />

          {/* Arbre généalogique EXACTEMENT comme l'image */}
          <div className="max-w-5xl mx-auto">
            {/* Niveau 1: Assemblée Générale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-1"
            >
              {/* Assemblée Générale */}
              <motion.div
                onClick={() => setSelectedPosition(positions[0])}
                className="px-8 py-4 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground rounded-2xl font-heading font-bold text-xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Users size={24} />
                  Assemblée Générale
                </div>
              </motion.div>

              {/* Ligne verticale vers Bureau Exécutif */}
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-border" />
            </motion.div>

            {/* Niveau 2: Bureau Exécutif */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Bureau Exécutif */}
              <motion.div
                onClick={() => setSelectedPosition(positions[1])}
                className="py-4 bg-gradient-to-r from-secondary/90 to-secondary text-secondary-foreground rounded-3xl font-heading font-bold text-xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full max-w-sm shadow-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <Briefcase size={28} />
                  Bureau Exécutif
                </div>
              </motion.div>

              {/* ligne verticale vers niveaux inférieurs */}
              <div className="flex justify-center gap-10">
                <div className="w-1 h-8 bg-border" />
              </div>
            </motion.div>

            {/* Niveau 3: Présidente avec Conseiller à droite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-16"
            >
              {/* Container pour Présidente et Conseiller */}
              <div className="flex items-start justify-center mb-8 gap-8">
                {/* Présidente */}
                <div className="flex flex-col items-center">
                  <motion.div
                    onClick={() => setSelectedPosition(positions[2])}
                    className="px-8 py-4 bg-gradient-to-r from-accent/90 to-accent text-accent-foreground rounded-2xl font-heading font-bold text-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center mb-4"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Crown size={22} />
                      Présidente
                    </div>
                  </motion.div>

                  {/* Ligne verticale vers Vice-Présidente */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                </div>

                {/* Conseiller à droite de la Présidente */}
                <div className="relative mt-8">
                  {/* Ligne horizontale vers Conseiller */}
                  <div className="absolute -left-8 top-1/2 w-8 h-0.5 bg-border" />

                  <motion.div
                    onClick={() => setSelectedPosition(positions[3])}
                    className="px-6 py-3 bg-muted text-muted-foreground rounded-xl font-heading font-semibold text-base cursor-pointer hover:shadow-sm hover:-translate-y-1 transition-all duration-300 text-center whitespace-nowrap"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <UserCog size={20} />
                      Conseillers
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Vice-Présidente sous la Présidente */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-8"
              >
                {/* Vice-Présidente */}
                <motion.div
                  onClick={() => setSelectedPosition(positions[4])}
                  className="px-8 py-4 bg-gradient-to-r from-accent/80 to-accent text-accent-foreground rounded-2xl font-heading font-bold text-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center mb-4 max-w-xs"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Shield size={22} />
                    Vice-Présidente
                  </div>
                </motion.div>

                {/* Lignes vers les 3 postes */}
                <div className="flex justify-center gap-2 mb-4">
                  <div className="w-0.5 h-6 bg-border" />
                  <div className="w-0.5 h-6 bg-border" />
                  <div className="w-0.5 h-6 bg-border" />
                </div>

                {/* Trésorier, Secrétaire Générale, Commissaire aux Comptes - EN LIGNE */}
                <div className="flex justify-center gap-4">
                  {positions
                    .filter((p) => p.parent === "vice-president")
                    .map((position) => (
                      <motion.div
                        key={position.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center min-w-[120px]"
                      >
                        <div
                          onClick={() => setSelectedPosition(position)}
                          className="community-card cursor-pointer hover:-translate-y-2 transition-all duration-300 p-3"
                        >
                          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                            <position.icon
                              size={20}
                              className="text-accent-foreground"
                            />
                          </div>
                          <h4 className="font-heading font-semibold text-xs text-foreground">
                            {position.title}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Ligne verticale depuis Bureau Exécutif vers Chargés des Programmes */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-8 bg-border" />
            </div>

            {/* Niveau 4: Chargés des Programmes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Chargés des Programmes */}
              <motion.div
                onClick={() => setSelectedPosition(positions[8])}
                className="px-8 py-4 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground rounded-2xl font-heading font-bold text-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-6 text-center max-w-sm"
              >
                <div className="flex items-center justify-center gap-3">
                  <Briefcase size={22} />
                  Chargés des Programmes
                </div>
              </motion.div>

              {/* Lignes vers les 4 départements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mx-auto">
                {positions
                  .filter((p) => p.parent === "programmes")
                  .map((position, index) => (
                    <motion.div
                      key={position.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      {/* Ligne verticale vers chaque département */}
                      <div className="flex justify-center mb-2">
                        <div className="w-0.5 h-4 bg-border" />
                      </div>

                      <div
                        onClick={() => setSelectedPosition(position)}
                        className="community-card cursor-pointer hover:-translate-y-2 transition-all duration-300 p-4"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                          <position.icon size={24} className="text-primary" />
                        </div>
                        <h4 className="font-heading font-semibold text-sm text-foreground">
                          {position.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Légende */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mt-12 p-6 bg-muted/30 rounded-2xl"
          >
            <h4 className="font-heading font-bold text-lg text-center mb-4">
              Structure Organisationnelle
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm text-muted-foreground">
                  Relations hiérarchiques descendantes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-border" />
                <span className="text-sm text-muted-foreground">
                  Relations fonctionnelles latérales
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-secondary/90 to-secondary" />
                <span className="text-sm text-muted-foreground">
                  Bureau Exécutif - Organe central
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Position Modal */}
      <Dialog
        open={selectedPosition !== null}
        onOpenChange={() => setSelectedPosition(null)}
      >
        <DialogContent className="max-w-lg p-0 overflow-hidden bg-card rounded-3xl">
          <AnimatePresence>
            {selectedPosition && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <selectedPosition.icon
                        size={32}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        {selectedPosition.title}
                      </h3>
                      {selectedPosition.parent && (
                        <span className="text-sm text-muted-foreground">
                          {
                            positions.find(
                              (p) => p.id === selectedPosition.parent
                            )?.title
                          }
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPosition(null)}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedPosition.description}
                </p>

                <div>
                  <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-foreground/80 mb-3">
                    Responsabilités
                  </h4>
                  <ul className="space-y-2">
                    {selectedPosition.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GovernancePage;
