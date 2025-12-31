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

// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   ChevronLeft,
//   ChevronRight,
//   ZoomIn,
//   Image as ImageIcon,
//   Video,
//   File,
//   Loader2,
//   Calendar,
//   ExternalLink,
// } from "lucide-react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";

// interface DriveFile {
//   id: string;
//   name: string;
//   mimeType: string;
//   modifiedTime: string;
//   webViewLink: string;
//   thumbnailLink?: string;
//   category?: string;
// }

// interface DriveFileResponse {
//   id: string;
//   name: string;
//   mimeType: string;
//   modifiedTime: string;
//   webViewLink: string;
//   thumbnailLink?: string;
// }

// interface PhotothequeModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const PhotothequeModal = ({ isOpen, onClose }: PhotothequeModalProps) => {
//   const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);
//   const [activeCategory, setActiveCategory] = useState<string>("Tous");
//   const [files, setFiles] = useState<DriveFile[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>(
//     {}
//   );

//   // Configuration Drive
//   const FOLDER_ID = "15s8M4c9tOfdHkpoAT8tWwI0gF3m_Omsc";
//   const API_KEY = "AIzaSyA45rW5BUH7q435U6rC78gnSeYhB0wGI04";

//   // Définir les catégories depuis les fichiers
//   const categories = [
//     "Tous",
//     ...new Set(files.map((f) => f.category || "Général")),
//   ];

//   // Fonction pour extraire la catégorie du nom de fichier
//   const getCategoryFromName = useCallback((fileName: string): string => {
//     const categoriesMap: Record<string, string> = {
//       événement: "Événements",
//       event: "Événements",
//       projet: "Projets",
//       project: "Projets",
//       santé: "Santé",
//       health: "Santé",
//       formation: "Formation",
//       training: "Formation",
//       réunion: "Réunions",
//       meeting: "Réunions",
//       action: "Actions",
//       workshop: "Ateliers",
//       conference: "Conférences",
//       community: "Communauté",
//     };

//     const lowerName = fileName.toLowerCase();
//     for (const [key, value] of Object.entries(categoriesMap)) {
//       if (lowerName.includes(key)) {
//         return value;
//       }
//     }
//     return "Général";
//   }, []);

//   // Fonction pour formater la date
//   const formatDate = useCallback((dateString: string) => {
//     try {
//       const date = new Date(dateString);
//       const now = new Date();
//       const diffTime = Math.abs(now.getTime() - date.getTime());
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//       // Moins de 7 jours : afficher "Il y a X jours"
//       if (diffDays < 7) {
//         return `Il y a ${diffDays} ${diffDays === 1 ? "jour" : "jours"}`;
//       }

//       // Moins de 30 jours : afficher "Il y a X semaines"
//       if (diffDays < 30) {
//         const weeks = Math.floor(diffDays / 7);
//         return `Il y a ${weeks} ${weeks === 1 ? "semaine" : "semaines"}`;
//       }

//       // Format français complet
//       return date.toLocaleDateString("fr-FR", {
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//       });
//     } catch {
//       return "Date inconnue";
//     }
//   }, []);

//   // Obtenir l'URL de la miniature
//   const getThumbnailUrl = useCallback(
//     (fileId: string, mimeType: string): string => {
//       if (mimeType.includes("image")) {
//         return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
//       } else if (mimeType.includes("video")) {
//         return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
//       }
//       return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
//     },
//     []
//   );

//   // Obtenir l'URL de prévisualisation
//   const getPreviewUrl = useCallback((file: DriveFile): string => {
//     if (file.mimeType.includes("image")) {
//       return `https://drive.google.com/uc?export=view&id=${file.id}`;
//     } else if (file.mimeType.includes("video")) {
//       return `https://drive.google.com/file/d/${file.id}/preview`;
//     } else if (file.mimeType.includes("pdf")) {
//       return `https://drive.google.com/file/d/${file.id}/preview`;
//     }
//     return file.webViewLink;
//   }, []);

//   // Obtenir l'icône selon le type
//   const getFileIcon = useCallback((mimeType: string) => {
//     if (mimeType.includes("image")) return <ImageIcon className="w-4 h-4" />;
//     if (mimeType.includes("video")) return <Video className="w-4 h-4" />;
//     if (mimeType.includes("pdf")) return <File className="w-4 h-4" />;
//     return <File className="w-4 h-4" />;
//   }, []);

//   // Obtenir le type de fichier en texte
//   const getFileTypeText = useCallback((mimeType: string) => {
//     if (mimeType.includes("image")) return "Image";
//     if (mimeType.includes("video")) return "Vidéo";
//     if (mimeType.includes("pdf")) return "PDF";
//     return "Fichier";
//   }, []);

//   // Formater le nom de fichier (supprimer extension et underscores)
//   const formatFileName = useCallback((fileName: string) => {
//     const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
//     return nameWithoutExt.replace(/_/g, " ").replace(/-/g, " ");
//   }, []);

//   // Fonction fetchFiles avec useCallback
//   const fetchFiles = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Récupérer tous les fichiers (images, vidéos, PDF)
//       const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+(mimeType contains 'image/' or mimeType contains 'video/' or mimeType contains 'application/pdf')&fields=files(id,name,mimeType,modifiedTime,webViewLink,thumbnailLink)&key=${API_KEY}&orderBy=modifiedTime desc`;

//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Erreur HTTP: ${response.status}`);
//       }

//       const data = await response.json();

//       // Enrichir les fichiers avec les miniatures et catégories
//       const enrichedFiles = (data.files || []).map(
//         (file: DriveFileResponse) => ({
//           ...file,
//           category: getCategoryFromName(file.name),
//           thumbnailLink:
//             file.thumbnailLink || getThumbnailUrl(file.id, file.mimeType),
//         })
//       );

//       setFiles(enrichedFiles);
//     } catch (err) {
//       console.error("❌ Erreur lors du chargement des fichiers :", err);
//       setError(
//         "Impossible de charger les fichiers depuis Google Drive. Veuillez réessayer."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, [FOLDER_ID, API_KEY, getCategoryFromName, getThumbnailUrl]);

//   useEffect(() => {
//     if (isOpen) {
//       fetchFiles();
//     }
//   }, [isOpen, fetchFiles]);

//   // Gérer le chargement d'image
//   const handleImageLoadStart = (fileId: string) => {
//     setImageLoading((prev) => ({ ...prev, [fileId]: true }));
//   };

//   const handleImageLoadComplete = (fileId: string) => {
//     setImageLoading((prev) => ({ ...prev, [fileId]: false }));
//   };

//   // Filtrer les fichiers par catégorie
//   const filteredFiles =
//     activeCategory === "Tous"
//       ? files
//       : files.filter((f) => f.category === activeCategory);

//   // Navigation dans la lightbox
//   const handlePrev = () => {
//     if (selectedFile) {
//       const currentIndex = filteredFiles.findIndex(
//         (f) => f.id === selectedFile.id
//       );
//       const prevIndex =
//         (currentIndex - 1 + filteredFiles.length) % filteredFiles.length;
//       setSelectedFile(filteredFiles[prevIndex]);
//       handleImageLoadStart(filteredFiles[prevIndex].id);
//     }
//   };

//   const handleNext = () => {
//     if (selectedFile) {
//       const currentIndex = filteredFiles.findIndex(
//         (f) => f.id === selectedFile.id
//       );
//       const nextIndex = (currentIndex + 1) % filteredFiles.length;
//       setSelectedFile(filteredFiles[nextIndex]);
//       handleImageLoadStart(filteredFiles[nextIndex].id);
//     }
//   };

//   // Afficher le nom du fichier formaté
//   const displayFileName = (file: DriveFile) => {
//     const formatted = formatFileName(file.name);
//     return formatted.length > 30
//       ? formatted.substring(0, 30) + "..."
//       : formatted;
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-hidden p-0 bg-card rounded-3xl border border-border">
//         <div className="relative">
//           {/* Header */}
//           <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm px-6 py-4 border-b border-border flex items-center justify-between">
//             <div>
//               <h2 className="font-heading font-bold text-xl text-foreground">
//                 Photothèque La MEJ
//               </h2>
//               <p className="text-sm text-muted-foreground mt-1">
//                 {files.length} fichiers disponibles • Synchronisé avec Google
//                 Drive
//               </p>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-2 rounded-full hover:bg-muted transition-colors"
//               aria-label="Fermer"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Catégories */}
//           <div className="px-6 py-3 flex gap-2 flex-wrap border-b border-border bg-muted/30">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-primary text-primary-foreground"
//                     : "bg-card text-foreground/70 hover:bg-primary/10"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Contenu principal */}
//           <div className="p-6 max-h-[60vh] overflow-y-auto">
//             {loading && (
//               <div className="flex flex-col items-center justify-center py-12">
//                 <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
//                 <p className="text-muted-foreground">
//                   Chargement des fichiers depuis Google Drive...
//                 </p>
//               </div>
//             )}

//             {error && (
//               <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
//                 <File className="w-12 h-12 text-destructive mx-auto mb-4" />
//                 <p className="font-medium text-destructive mb-2">{error}</p>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Vérifiez que le dossier Drive est bien accessible
//                 </p>
//                 <button
//                   onClick={fetchFiles}
//                   className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
//                 >
//                   Réessayer le chargement
//                 </button>
//               </div>
//             )}

//             {!loading && !error && filteredFiles.length === 0 && (
//               <div className="text-center py-12">
//                 <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//                 <p className="text-muted-foreground">
//                   Aucun fichier dans cette catégorie
//                 </p>
//               </div>
//             )}

//             {!loading && !error && filteredFiles.length > 0 && (
//               <>
//                 {/* Grille de fichiers */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {filteredFiles.map((file, index) => (
//                     <motion.div
//                       key={file.id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: index * 0.05 }}
//                       onClick={() => {
//                         setSelectedFile(file);
//                         handleImageLoadStart(file.id);
//                       }}
//                       className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
//                     >
//                       {/* Miniature avec loader */}
//                       <div className="w-full h-full bg-muted flex items-center justify-center relative">
//                         {imageLoading[file.id] && (
//                           <div className="absolute inset-0 flex items-center justify-center bg-card/50 z-10">
//                             <Loader2 className="w-6 h-6 animate-spin text-primary" />
//                           </div>
//                         )}

//                         {file.mimeType.includes("image") ? (
//                           <img
//                             src={getThumbnailUrl(file.id, file.mimeType)}
//                             alt={formatFileName(file.name)}
//                             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                             onLoad={() => handleImageLoadComplete(file.id)}
//                             onError={(e) => {
//                               handleImageLoadComplete(file.id);
//                               e.currentTarget.src = `https://via.placeholder.com/400x400?text=${encodeURIComponent(
//                                 displayFileName(file)
//                               )}`;
//                             }}
//                           />
//                         ) : file.mimeType.includes("video") ? (
//                           <div className="relative w-full h-full">
//                             <img
//                               src={getThumbnailUrl(file.id, file.mimeType)}
//                               alt={formatFileName(file.name)}
//                               className="w-full h-full object-cover"
//                               onLoad={() => handleImageLoadComplete(file.id)}
//                             />
//                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                               <Video className="w-8 h-8 text-white" />
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="flex flex-col items-center justify-center p-4">
//                             <File className="w-12 h-12 text-muted-foreground mb-2" />
//                             <p className="text-xs text-muted-foreground text-center truncate w-full">
//                               {displayFileName(file)}
//                             </p>
//                           </div>
//                         )}
//                       </div>

//                       {/* Overlay */}
//                       <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/40 transition-colors duration-300 flex items-center justify-center">
//                         <ZoomIn
//                           size={24}
//                           className="text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                         />
//                       </div>

//                       {/* Infos bas */}
//                       <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
//                         <div className="flex items-center gap-2 mb-1">
//                           {getFileIcon(file.mimeType)}
//                           <p className="text-xs text-white font-medium truncate">
//                             {displayFileName(file)}
//                           </p>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs text-white/80 bg-foreground/30 px-2 py-0.5 rounded-full">
//                             {file.category}
//                           </span>
//                           <div className="flex items-center gap-1 text-xs text-white/60">
//                             <Calendar className="w-3 h-3" />
//                             <span>{formatDate(file.modifiedTime)}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Compteur */}
//                 <div className="mt-6 text-center">
//                   <p className="text-sm text-muted-foreground">
//                     {filteredFiles.length} fichier(s) dans "{activeCategory}"
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Lightbox */}
//           <AnimatePresence>
//             {selectedFile && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
//                 onClick={() => setSelectedFile(null)}
//               >
//                 {/* Bouton précédent */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handlePrev();
//                   }}
//                   className="absolute left-4 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors z-10"
//                   aria-label="Image précédente"
//                 >
//                   <ChevronLeft size={24} className="text-card" />
//                 </button>

//                 {/* Contenu principal */}
//                 <div className="relative max-w-[90vw] max-h-[85vh]">
//                   {/* Loader pendant le chargement */}
//                   {imageLoading[selectedFile.id] && (
//                     <div className="absolute inset-0 flex items-center justify-center z-10">
//                       <div className="bg-card/50 rounded-2xl p-8">
//                         <Loader2 className="w-12 h-12 animate-spin text-card" />
//                       </div>
//                     </div>
//                   )}

//                   {selectedFile.mimeType.includes("image") && (
//                     <div onClick={(e) => e.stopPropagation()}>
//                       <motion.img
//                         key={selectedFile.id}
//                         initial={{ opacity: 0 }}
//                         animate={{
//                           opacity: imageLoading[selectedFile.id] ? 0 : 1,
//                         }}
//                         exit={{ opacity: 0 }}
//                         src={getPreviewUrl(selectedFile)}
//                         alt={formatFileName(selectedFile.name)}
//                         className="max-w-full max-h-[85vh] object-contain rounded-2xl"
//                         onLoad={() => handleImageLoadComplete(selectedFile.id)}
//                         onError={(e) => {
//                           handleImageLoadComplete(selectedFile.id);
//                           e.currentTarget.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(
//                             formatFileName(selectedFile.name).substring(0, 30)
//                           )}`;
//                         }}
//                       />
//                     </div>
//                   )}

//                   {selectedFile.mimeType.includes("video") && (
//                     <div
//                       className="w-full max-w-4xl"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <iframe
//                         src={getPreviewUrl(selectedFile)}
//                         title={formatFileName(selectedFile.name)}
//                         className="w-full aspect-video rounded-2xl"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         onLoad={() => handleImageLoadComplete(selectedFile.id)}
//                       />
//                     </div>
//                   )}

//                   {selectedFile.mimeType.includes("pdf") && (
//                     <div
//                       className="w-full max-w-4xl"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <iframe
//                         src={getPreviewUrl(selectedFile)}
//                         title={formatFileName(selectedFile.name)}
//                         className="w-full aspect-[4/3] rounded-2xl"
//                         frameBorder="0"
//                         onLoad={() => handleImageLoadComplete(selectedFile.id)}
//                       />
//                     </div>
//                   )}

//                   {/* Bouton suivant */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleNext();
//                     }}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
//                     aria-label="Image suivante"
//                   >
//                     <ChevronRight size={24} className="text-card" />
//                   </button>

//                   {/* Bouton fermer */}
//                   <button
//                     onClick={() => setSelectedFile(null)}
//                     className="absolute -top-12 right-0 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
//                     aria-label="Fermer la visionneuse"
//                   >
//                     <X size={24} className="text-card" />
//                   </button>

//                   {/* Infos du fichier */}
//                   <div className="absolute -bottom-16 left-0 right-0 text-center space-y-2">
//                     <p className="text-card font-heading font-semibold text-lg">
//                       {formatFileName(selectedFile.name)}
//                     </p>
//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2">
//                       <span className="text-card/80 text-sm bg-card/20 px-3 py-1 rounded-full">
//                         {selectedFile.category}
//                       </span>
//                       <span className="text-card/60 text-sm flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         {formatDate(selectedFile.modifiedTime)}
//                       </span>
//                       <span className="text-card/60 text-sm">
//                         {getFileTypeText(selectedFile.mimeType)}
//                       </span>
//                       <a
//                         href={`https://drive.google.com/file/d/${selectedFile.id}/view`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-card/80 text-sm bg-card/20 px-3 py-1 rounded-full hover:bg-card/40 transition-colors flex items-center gap-1"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <ExternalLink className="w-3 h-3" />
//                         Ouvrir dans Drive
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Indicateur de navigation */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
//                   {filteredFiles.map((file) => (
//                     <button
//                       key={file.id}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedFile(file);
//                         handleImageLoadStart(file.id);
//                       }}
//                       className={`w-2 h-2 rounded-full transition-all ${
//                         selectedFile.id === file.id
//                           ? "bg-card w-4"
//                           : "bg-card/40 hover:bg-card/60"
//                       }`}
//                       aria-label={`Aller à l'image ${formatFileName(
//                         file.name
//                       )}`}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default PhotothequeModal;
