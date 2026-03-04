import { Locale } from "@/types/locale";
import { homeContent } from "./homeContent";
import { ReactNode } from "react";
import Link from "next/link";
import { FiUsers, FiMail, FiBookOpen } from "react-icons/fi";
import styles from "./HomePage.module.css";
import { routes } from "@/lib/routes";

type HomePageProps = {
    locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
    const content = homeContent[locale];

    return (
        <>
        <section className={styles.hero}>
            {/* Background Video */}
            <video autoPlay muted loop playsInline className={styles.video}>
                <source
                    src="/videos/home/home-hero-background.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.heroWrapper}>
            <div className={styles.buttonsContainer}>
                <HeroButton
                    name={locale === "tr" ? "Hakkımızda" : "About us"}
                    icon={<FiUsers />}
                    href={routes.aboutUs[locale]}
                />

                <div className={styles.buttonSeperatorLine}></div>

                <HeroButton
                    name={locale === "tr" ? "Yayınlarımız" : "Our publications"}
                    icon={<FiBookOpen />}
                    href={routes.publications[locale]}
                />

                <div className={styles.buttonSeperatorLine}></div>

                <HeroButton
                    name={locale === "tr" ? "İletişim" : "Contact"}
                    icon={<FiMail />}
                    href={routes.contact[locale]}
                    />
                </div>

                <div className={styles.heroContent}>
                    <h1 className={styles.abbreviation}>{content.abbreviation}</h1>
                    <h1 className={styles.name}>{content.name}</h1>
                <p>{content.description}</p>
            </div>
            </div>
        </section>

        {/* Example sections */}
        <section id="about" className={styles.content}>
            <h2>{locale === "tr" ? "Hakkımızda" : "About Us"}</h2>
            <p>Buraya hakkımızda içeriği gelecek.</p>
        </section>

        <section id="publications" className={styles.content}>
            <h2>{locale === "tr" ? "Yayınlarımız" : "Publications"}</h2>
            <p>Buraya yayınlar içeriği gelecek.</p>
        </section>

        <section id="contact" className={styles.content}>
            <h2>{locale === "tr" ? "İletişim" : "Contact"}</h2>
            <p>Buraya iletişim bilgileri gelecek.</p>
        </section>
        </>
    );
}

/* HERO BUTTON */
type HeroButtonProps = {
    name: string;
    icon?: ReactNode;
    href: string;
};

function HeroButton({ name, icon, href }: HeroButtonProps) {
    return (
        <Link href={href} className={styles.heroButtonContainer}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span>{name}</span>
        </Link>
    );
}