import { Locale } from "@/types/locale";
import { homeContent } from "./homeContent";
import { ReactNode } from "react";
import { FiUsers } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import styles from "./HomePage.module.css";

type HomePageProps = {
    locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
    const content = homeContent[locale];

    return (
        <>
        <section className={styles.hero}>
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
            >
                <source src="videos/home/home-hero-background.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.heroWrapper}>
                <div className={styles.buttonsContainer}>
                    <HeroButton
                        name={locale==="tr" ? "Hakkımızda" : "About us"}
                        icon={<FiUsers />}
                    />
                    <div className={styles.buttonSeperatorLine}></div>
                    <HeroButton
                        name={locale==="tr" ? "Yayınlarımız" : "Our publications"}
                        icon={<FiBookOpen />}
                    />
                    <div className={styles.buttonSeperatorLine}></div>
                    <HeroButton
                        name={locale==="tr" ? "İletişim" : "Contact"}
                        icon={<FiMail />}
                    />
                </div>
                
                <div className={styles.heroContent}>
                    <h1 className={styles.abbreviation}>{content.abbreviation}</h1>
                    <h1 className={styles.name}>{content.name}</h1>
                    <p>{content.description}</p>
                </div>
            </div>
        </section>

        <section className={styles.content}>
            <h2>Devam Eden İçerik</h2>
            <p>
                Buradan sonra normal sayfa akışı devam eder.
            </p>
        </section>
        </>
    );
}



// HERO BUTTON
type HeroButtonProps = {
    name: string;
    icon?: ReactNode;
};
function HeroButton({ name, icon }: HeroButtonProps) {
    return (
        <button className={styles.heroButtonContainer}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span>{name}</span>
        </button>
    );
}
