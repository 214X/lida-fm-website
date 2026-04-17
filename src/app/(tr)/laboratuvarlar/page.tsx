import LaboratoriesPage from "@/components/pages/laboratories/LaboratoriesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laboratuvarlar | LİDA - Lazer ve İleri Dedektör Araştırma Laboratuvarı",
    description: "TÜBİTAK UME LİDA bünyesindeki laboratuvarlarımızı keşfedin. Lazer metrolojisi, nem, radyasyon sıcaklığı ve termofiziksel özellikler ölçümleri.",
};

export default function Laboratuvarlar() {
    return <LaboratoriesPage locale="tr" />;
}
