"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import styles from "./NavbarStyles.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");
  const locale = isEnglish ? "en" : "tr";
  const oppositeLocale = locale === "tr" ? "en" : "tr";
  const closeMenu = () => setIsOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const currentRouteKey =
    (Object.keys(routes) as Array<keyof typeof routes>).find((key) => {
      return routes[key].tr === pathname || routes[key].en === pathname;
    }) ?? "home";

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.navbarInner}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src={
              scrolled || hovered
                ? "/images/ume-logo/UME-Yatay.png"
                : "/images/ume-logo/UME-Yatay-Beyaz.png"
            }
            alt="Logo"
            width={116}
            height={40}
            priority
          />
        </Link>

        <div className={styles.rightSection}>
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <Link
            href={routes[currentRouteKey][oppositeLocale]}
            className={styles.localeSwitch}
          >
            {locale === "tr" ? "EN" : "TR"}
          </Link>
        </div>

        <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <nav className={styles.menuContent}>
            <Link
              href="/"
              className={styles.menuLogoWrapper}
              onClick={closeMenu}
            >
              <Image
                src="/images/ume-logo/UME-Yatay.png"
                alt="MenuLogo"
                width={250}
                height={1}
                priority
              />
            </Link>

            <Link href={routes.home[locale]} className={styles.menuLink} onClick={closeMenu}>
              {locale === "tr" ? "Ana Sayfa" : "Home"}
            </Link>

            <Link href={routes.home[locale]} className={styles.menuLink} onClick={closeMenu}>
              {locale === "tr" ? "Hakkımızda" : "About us"}
            </Link>

            <Link href={routes.publications[locale]} className={styles.menuLink} onClick={closeMenu}>
              {locale === "tr" ? "Yayınlar" : "Publications"}
            </Link>

            {/* ----- LABORATORIES MENU STARTS ----- */}
            <button
              className={styles.menuLink}
              onClick={() => setLabsOpen(!labsOpen)}
            >
              {locale === "tr" ? "Laboratuvarlar" : "Laboratories"}
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${
                  labsOpen ? styles.rotate : ""
                }`}
              />
            </button>

            <div
              className={`${styles.subMenu} ${
                labsOpen ? styles.subMenuOpen : ""
              }`}
            >
              <div className={styles.subMenuInner}>
                <Link
                  href={routes.humidityLab[locale]}
                  className={styles.subMenuLink}
                  onClick={closeMenu}
                >
                  {locale === "tr"
                    ? "Nem Laboratuvarı"
                    : "Humidity Laboratory"}
                </Link>

                <Link
                  href={routes.radiationTemperatureLab[locale]}
                  className={styles.subMenuLink}
                  onClick={closeMenu}
                >
                  {locale === "tr"
                    ? "Radyasyon Sıcaklığı Laboratuvarı"
                    : "Radiation Temperature Laboratory"}
                </Link>

                <Link
                  href={routes.thermophysicalLab[locale]}
                  className={styles.subMenuLink}
                  onClick={closeMenu}
                >
                  {locale === "tr"
                    ? "Termofiziksel Özellikler Laboratuvarı"
                    : "Thermophysical Properties Laboratory"}
                </Link>
              </div>
            </div>
            {/* ----- LABORATORIES MENU ENDS ----- */}

            <Link href={routes.projects[locale]} className={styles.menuLink} onClick={closeMenu}>
              {locale === "tr" ? "Projeler" : "Projects"}
            </Link>

            <Link href={routes.contact[locale]} className={styles.menuLink} onClick={closeMenu}>
              {locale === "tr" ? "İletişim" : "Contact"}
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}