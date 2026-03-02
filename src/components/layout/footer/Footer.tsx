import styles from "./FooterStyles.module.css"
import { Locale } from "@/types/locale";

type FooterProps = {
    locale: Locale
}

export default function Footer ({locale}: FooterProps) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <p className={styles.content}>
                {locale === "en"
                    ? "This website is the official site of the UME Thermodynamics Laboratory."
                    : "Bu site UME Termodinamik Laboratuvarı’nın resmi web sitesidir."}
                </p>

                <p className={styles.copy}>
                © {new Date().getFullYear()} UME
                </p>
            </div>
        </footer>
    );
}