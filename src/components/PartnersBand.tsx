import { motion } from "framer-motion";

// Utilisez directement les chemins en utilisant new URL() qui fonctionne toujours
const partners = [
  {
    name: "Partenaire 1",
    logo: new URL("../assets/Image1.jpg", import.meta.url).href,
  },
  {
    name: "Partenaire 2",
    logo: new URL("../assets/Image2.jpg", import.meta.url).href,
  },
  {
    name: "Partenaire 3",
    logo: new URL("../assets/Image3.jpg", import.meta.url).href,
  },
  {
    name: "Partenaire 4",
    logo: new URL("../assets/Image4.jpg", import.meta.url).href,
  },
];

const PartnersBand = () => {
  return (
    <section className="bg-cream  sm:py-4 md:py-5 overflow-hidden">
      <div className="container mx-auto  sm:px-4 md:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center font-heading font-semibold text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6"
        >
          Nos Partenaires
        </motion.h3>

        <div className="relative">
          <div className="flex items-center justify-center md:justify-center overflow-x-auto pb-4 space-x-4 sm:space-x-6 md:space-x-8 scrollbar-hide">
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-lg sm:rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 p-2 sm:p-3 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain rounded"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      e.currentTarget.src = `https://via.placeholder.com/150x80/4F46E5/FFFFFF?text=${partner.name}`;
                    }}
                  />
                </div>
                {/* <p className="text-center text-[10px] sm:text-xs mt-1 sm:mt-2 text-muted-foreground truncate max-w-[70px] sm:max-w-[80px] md:max-w-[90px] mx-auto">
                  {partner.name}
                </p> */}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden text-center mt-2">
            <span className="text-xs text-muted-foreground italic">
              ← Glissez pour voir plus →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersBand;
