import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetailPage from "@/components/pages/projects/ProjectDetailPage";

export function generateStaticParams() {
    return projectsData
        .filter((p) => p.id !== "placeholder")
        .map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.id === slug);
    if (!project) return {};
    return { title: `${project.title.tr} | TDML Projeler` };
}

export default async function ProjelerSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.id === slug);

    if (!project || project.id === "placeholder") notFound();

    return <ProjectDetailPage project={project} locale="tr" />;
}
