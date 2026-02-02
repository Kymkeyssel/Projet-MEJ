import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Configuration Drive
const FOLDER_ID = "1kj62IEkAP7ZtOCjrERkKCKIzwF7ZJyB0";
const API_KEY = "AIzaSyA45rW5BUH7q435U6rC78gnSeYhB0wGI04";

interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
}

interface PhotothequeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotothequeModal = ({ isOpen, onClose }: PhotothequeModalProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  useEffect(() => {
    if (!isOpen) return;

    async function fetchFiles() {
      try {
        setLoading(true);
        const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,modifiedTime)&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.files) {
          const drivePhotos: Photo[] = data.files.map((file: any) => ({
            id: file.id,
            src: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`,
            title: file.name.replace(/\.[^/.]+$/, ""),
            category: "Général", // Catégorie par défaut car le Drive ne fournit pas cette info directement
          }));
          setPhotos(drivePhotos);
        }
      } catch (error) {
        console.error(
          "❌ Erreur lors du chargement de la photothèque :",
          error,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();
  }, [isOpen]);

  const categories = ["Tous", ...new Set(photos.map((p) => p.category))];

  const filteredPhotos =
    activeCategory === "Tous"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhoto !== null) {
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === selectedPhoto,
      );
      const prevIndex =
        (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedPhoto !== null) {
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === selectedPhoto,
      );
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex].id);
    }
  };

  const selectedPhotoData = photos.find((p) => p.id === selectedPhoto);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-hidden p-0 bg-card rounded-3xl">
        <DialogTitle className="sr-only">Photothèque La MEJ</DialogTitle>
        <DialogDescription className="sr-only">
          Galerie d'images synchronisée avec Google Drive.
        </DialogDescription>
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
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground animate-pulse">
                  Chargement des photos...
                </p>
              </div>
            ) : filteredPhotos.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">
                  Aucune photo disponible.
                </p>
              </div>
            ) : (
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
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://drive.google.com/uc?export=view&id=${photo.id}`;
                      }}
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
            )}
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
