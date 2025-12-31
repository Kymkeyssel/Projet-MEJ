import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersBand from "@/components/PartnersBand";
import PhotothequeModal from "@/components/PhotothequeModal";

const Layout = () => {
  const [isPhotothequeOpen, setIsPhotothequeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onPhotothequeOpen={() => setIsPhotothequeOpen(true)} />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <PartnersBand />
      <Footer />

      <PhotothequeModal
        isOpen={isPhotothequeOpen}
        onClose={() => setIsPhotothequeOpen(false)}
      />
    </div>
  );
};

export default Layout;
