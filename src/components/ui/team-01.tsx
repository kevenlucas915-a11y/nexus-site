"use client";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { motion } from "motion/react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-linkedin-team01)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team01">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type team = {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
}[];

const teamData: team = [
  {
    name: "Keven",
    role: "Co-Founder & Estratégia de Tecnologia",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Gabriel",
    role: "Co-Founder & Direção Criativa e Audiovisual",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vitória",
    role: "Co-Founder & Gestão e Operações",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <section id="criadores" className="bg-stone-50 border-t border-stone-200">
      <div className="lg:py-24 sm:py-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4"
          >
            <Badge variant={"outline"} className="px-3 py-1 h-auto text-xs uppercase tracking-wider font-semibold">
              Os Criadores
            </Badge>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
              Mentes estratégicas à frente da Nexus Digital
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {teamData?.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group flex flex-col items-center justify-center gap-6 bg-white p-6 rounded-3xl border border-stone-200 shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 group-hover:grayscale transition-all duration-500"
                      src={value.image}
                      alt={value.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4 items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {value.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={value.socials.website}
                        className="p-2 hover:bg-stone-100 rounded-full text-stone-600 hover:text-stone-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="p-2 hover:bg-stone-100 rounded-full text-stone-600 hover:text-stone-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
