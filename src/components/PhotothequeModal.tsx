import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample photos - in production, these would come from Google Drive API
import heroImage from "@/assets/hero-community.jpg";
import projectDev from "@/assets/project-development.jpg";
import projectHealth from "@/assets/project-health.jpg";

const samplePhotos = [
  {
    id: 1,
    src: heroImage,
    title: "Réunion communautaire",
    category: "Événements",
  },
  {
    id: 2,
    src: projectDev,
    title: "Projet développement",
    category: "Projets",
  },
  {
    id: 3,
    src: projectHealth,
    title: "Sensibilisation santé",
    category: "Santé",
  },
  {
    id: 4,
    src: heroImage,
    title: "Assemblée générale",
    category: "Gouvernance",
  },
  { id: 5, src: projectDev, title: "Aide directe", category: "Actions" },
  { id: 6, src: projectHealth, title: "Formation", category: "Éducation" },
];

interface PhotothequeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotothequeModal = ({ isOpen, onClose }: PhotothequeModalProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const categories = ["Tous", ...new Set(samplePhotos.map((p) => p.category))];

  const filteredPhotos =
    activeCategory === "Tous"
      ? samplePhotos
      : samplePhotos.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhoto !== null) {
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === selectedPhoto
      );
      const prevIndex =
        (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedPhoto !== null) {
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === selectedPhoto
      );
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex].id);
    }
  };

  const selectedPhotoData = samplePhotos.find((p) => p.id === selectedPhoto);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-hidden p-0 bg-card rounded-3xl">
        <div className="relative">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-heading font-bold text-xl text-foreground">
              Photothèque La MEJ
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Categories */}
          <div className="px-6 py-3 flex gap-2 flex-wrap border-b border-border bg-muted/30">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground/70 hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedPhoto(photo.id)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn
                      size={24}
                      className="text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-accent/80 to-transparent">
                    <p className="text-accent-foreground text-xs font-medium truncate">
                      {photo.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedPhoto !== null && selectedPhotoData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center"
                onClick={() => setSelectedPhoto(null)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
                >
                  <ChevronLeft size={24} className="text-card" />
                </button>

                <motion.img
                  key={selectedPhoto}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  src={selectedPhotoData.src}
                  alt={selectedPhotoData.title}
                  className="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl"
                  onClick={(e) => e.stopPropagation()}
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
                >
                  <ChevronRight size={24} className="text-card" />
                </button>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
                >
                  <X size={24} className="text-card" />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-card font-heading font-semibold">
                    {selectedPhotoData.title}
                  </p>
                  <p className="text-card/70 text-sm">
                    {selectedPhotoData.category}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotothequeModal;
