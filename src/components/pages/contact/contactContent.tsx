import type { Locale } from "@/types/locale";

type ContactPerson = {
    name: string;
    title: string;
    phone: string;
    fax: string;
    email: string;
};

type ContactContent = {
    title: string;
    subtitle: string;
    heroText: string;
    badge: string;
    infoTitle: string;
    infoHeading: string;
    infoText: string;
    cards: {
        label: string;
        value: string;
        href?: string;
    }[];
    person: ContactPerson;
    personLabel: string;
    orgName: string;
    orgAddress: string;
    orgCity: string;
    bottomText: string;
    emailBtn: string;
};

export const ContactContent: Record<Locale, ContactContent> = {
    tr: {
        title: "İletişim",
        subtitle: "Bize Ulaşın",
        heroText: "Kalibrasyon, ölçüm ve danışmanlık hizmetlerimiz hakkında bizimle iletişime geçin.",
        badge: "TDML",
        infoTitle: "İletişim Bilgileri",
        infoHeading: "Sizinle iletişime\ngeçmeyi bekliyoruz",
        infoText:
            "Kalibrasyon hizmetleri, ölçüm belirsizliği danışmanlığı veya laboratuvar işbirliği konularında sorularınızı bize iletebilirsiniz. En kısa sürede size dönüş yapacağız.",
        cards: [
            {
                label: "Laboratuvar E-Postası",
                value: "lidtume@gmail.com",
                href: "mailto:lidtume@gmail.com",
            },
        ],
        personLabel: "Laboratuvar Sorumlusu",
        person: {
            name: "Dr. Hümbet NASİBLİ",
            title: "Termodinamik Metroloji Laboratuvarı Sorumlusu",
            phone: "+90 262 679 5000 (dahili 3000)",
            fax: "+90 262 679 5001",
            email: "humbet.nasibli@tubitak.gov.tr",
        },
        orgName: "TÜBİTAK UME – Termal ve Dinamik Metroloji Laboratuvarları",
        orgAddress: "Gebze Yerleşkesi, P.K. 54",
        orgCity: "41470 Gebze / Kocaeli, Türkiye",
        bottomText:
            "Kalibrasyon taleplerini ve teknik sorularınızı e-posta yoluyla bize iletebilirsiniz. Çalışma saatlerimiz içinde en kısa sürede yanıt veririz.",
        emailBtn: "E-Posta Gönder",
    },
    en: {
        title: "Contact",
        subtitle: "Get in Touch",
        heroText: "Reach out to us regarding our calibration, measurement, and consultancy services.",
        badge: "TDML",
        infoTitle: "Contact Information",
        infoHeading: "We look forward to\nhearing from you",
        infoText:
            "Feel free to contact us for questions about calibration services, measurement uncertainty consultancy, or laboratory collaboration. We will get back to you as soon as possible.",
        cards: [
            {
                label: "Laboratory Email",
                value: "lidtume@gmail.com",
                href: "mailto:lidtume@gmail.com",
            },
        ],
        personLabel: "Laboratory Head",
        person: {
            name: "Dr. Hümbet NASİBLİ",
            title: "Head of Thermodynamic Metrology Laboratory",
            phone: "+90 262 679 5000 (ext. 3000)",
            fax: "+90 262 679 5001",
            email: "humbet.nasibli@tubitak.gov.tr",
        },
        orgName: "TÜBİTAK UME – Thermal & Dynamic Metrology Laboratories",
        orgAddress: "Gebze Campus, P.O. Box 54",
        orgCity: "41470 Gebze / Kocaeli, Turkey",
        bottomText:
            "You can send calibration requests and technical questions to us via e-mail. We respond within working hours as soon as possible.",
        emailBtn: "Send Email",
    },
};