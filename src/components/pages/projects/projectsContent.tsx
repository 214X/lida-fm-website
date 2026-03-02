import type { Locale } from "@/types/locale";

type ProjectsContent = {
    title: string;
};

export const ProjectsContent: Record<Locale, ProjectsContent> = {
    tr: {
        title: "Projeler",
    },
    en: {
        title: "Projects",
    },
};