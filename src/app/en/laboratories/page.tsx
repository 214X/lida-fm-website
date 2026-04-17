import LaboratoriesPage from "@/components/pages/laboratories/LaboratoriesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laboratories | LİDA - Laser and Advanced Detector Research Laboratory",
    description: "Discover the laboratories within TÜBİTAK UME LİDA. Laser metrology, humidity, radiation temperature, and thermophysical properties measurements.",
};

export default function Laboratories() {
    return <LaboratoriesPage locale="en" />;
}
