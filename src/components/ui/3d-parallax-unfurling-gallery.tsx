"use client";

import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CLIENT_GALLERY_IMAGES } from "@/data/content";
import { Sparkles } from "lucide-react";

interface ImageCardProps {
  src: string;
  onLoad?: () => void;
}

const ImageCard = ({ src, onLoad }: ImageCardProps) => {
  return (
    <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] flex-shrink-0 bg-stone-900 transition-all duration-300 hover:scale-[1.03] cursor-pointer relative will-change-transform backface-hidden preserve-3d rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
      <img
        src={src}
        alt="Projeto do Cliente"
        loading="lazy"
        onLoad={onLoad}
        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

interface ParallaxGalleryProps {
  images?: string[];
}

export default function ParallaxGallery({ images = CLIENT_GALLERY_IMAGES }: ParallaxGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const loadedCountRef = useRef(0);

  const handleItemLoad = useCallback(() => {
    loadedCountRef.current += 1;
    if (!isReady && loadedCountRef.current >= 1) setIsReady(true);
  }, [isReady]);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  const colMedia = useMemo(() => {
    const list = images && images.length > 0 ? images : CLIENT_GALLERY_IMAGES;
    const col1Base = list.filter((_, i) => i % 4 === 0);
    const col2Base = list.filter((_, i) => i % 4 === 1);
    const col3Base = list.filter((_, i) => i % 4 === 2);
    const col4Base = list.filter((_, i) => i % 4 === 3);

    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    };
  }, [images]);

  // Integrated into page document scroll!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  // Banner animations: expanding smoothly to edge-to-edge
  const bannerWidth = useTransform(smoothProgress, [0, 0.18], ["92vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.18], ["82vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.18], ["36px", "0px"]);
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.18], ["1px", "0px"]);

  // 3D Matrix animations (Perspective rotation & Z-depth zoom)
  const rotateY = useTransform(smoothProgress, [0.08, 1], [-35, -4]);
  const rotateX = useTransform(smoothProgress, [0.08, 1], [20, 2]);
  const rotateZ = useTransform(smoothProgress, [0.08, 1], [10, 1]);
  const translateZ = useTransform(smoothProgress, [0.08, 1], [-700, 40]);

  // Track columns parallax animations (opposite flow velocities)
  const yCol1 = useTransform(smoothProgress, [0.08, 1], ["0%", "-42%"]);
  const yCol2 = useTransform(smoothProgress, [0.08, 1], ["-42%", "12%"]);
  const yCol3 = useTransform(smoothProgress, [0.08, 1], ["0%", "-42%"]);
  const yCol4 = useTransform(smoothProgress, [0.08, 1], ["-32%", "18%"]);

  // Header and indicator visibility based on scroll
  const headerOpacity = useTransform(smoothProgress, [0, 0.12, 0.88, 1], [1, 0, 0, 1]);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-stone-950 text-white select-none border-t border-stone-900"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        
        {/* Floating Header Overlay */}
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="absolute top-8 sm:top-12 z-30 flex flex-col items-center pointer-events-none text-center px-4 transition-opacity"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-xs font-semibold uppercase tracking-widest mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Cases & Portfólio dos Clientes
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Universo de Projetos & Resultados
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md">
            Role a página para navegar pela galeria imersiva 3D com as produções que colocamos no ar.
          </p>
        </motion.div>

        {/* 3D Framed Canvas */}
        <motion.div
          style={{
            width: bannerWidth,
            height: bannerHeight,
            borderRadius: bannerRadius,
            borderWidth: bannerBorderWidth,
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
          className="relative bg-stone-950 overflow-hidden flex items-center justify-center max-w-[1920px] mx-auto will-change-transform backface-hidden preserve-3d shadow-2xl"
        >
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{ perspective: "1000px" }}
          >
            {/* Ambient Lighting & Depth Box Masks */}
            <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_120px_160px_-40px_rgba(12,10,9,1),inset_0_-120px_160px_-40px_rgba(12,10,9,1)]" />
            <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_140px_0_160px_-40px_rgba(12,10,9,1),inset_-140px_0_160px_-40px_rgba(12,10,9,1)]" />

            {/* Parallax Image Grid Matrix in 3D Space */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                z: translateZ,
                transformStyle: "preserve-3d",
              }}
              className="flex gap-4 md:gap-6 justify-center items-center w-[125vw] h-[155vh] origin-center opacity-100 will-change-transform backface-hidden"
            >
              {/* Column 1 */}
              <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                {colMedia.col1.map((src, index) => (
                  <ImageCard key={`col1-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>

              {/* Column 2 */}
              <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                {colMedia.col2.map((src, index) => (
                  <ImageCard key={`col2-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>

              {/* Column 3 */}
              <motion.div style={{ y: yCol3 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                {colMedia.col3.map((src, index) => (
                  <ImageCard key={`col3-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>

              {/* Column 4 */}
              <motion.div style={{ y: yCol4 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                {colMedia.col4.map((src, index) => (
                  <ImageCard key={`col4-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
