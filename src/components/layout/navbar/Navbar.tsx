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

  const [isOpen, setIsOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(true);

  const closeMenu = () => {
    setIsOpen(false);
    setLabsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLabsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const currentRouteKey =
    (Object.keys(routes) as Array<keyof typeof routes>).find((key) => {
      return routes[key].tr === pathname || routes[key].en === pathname;
    }) ?? "home";

  const isActive = (route: string) => pathname === route;

  const isLabActive =
    isActive(routes.humidityLab[locale]) ||
    isActive(routes.radiationTemperatureLab[locale]) ||
    isActive(routes.thermophysicalLab[locale]);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.navbarInner}>
        <Link href={routes.home[locale]} className={styles.logoWrapper}>
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

        <div className={styles.navLinks}>
          <Link
            href={routes.home[locale]}
            className={`${styles.navLink} ${
              isActive(routes.home[locale]) ? styles.active : ""
            }`}
          >
            {locale === "tr" ? "Ana Sayfa" : "Home"}
          </Link>

          <Link
            href={routes.aboutUs[locale]}
            className={`${styles.navLink} ${
              isActive(routes.aboutUs[locale]) ? styles.active : ""
            }`}
          >
            {locale === "tr" ? "Hakkımızda" : "About Us"}
          </Link>

          <Link
            href={routes.publications[locale]}
            className={`${styles.navLink} ${
              isActive(routes.publications[locale]) ? styles.active : ""
            }`}
          >
            {locale === "tr" ? "Yayınlar" : "Publications"}
          </Link>

          {/* LABS DROPDOWN */}
          <div
            className={styles.navDropdown}
            onMouseEnter={() => setLabsOpen(true)}
            onMouseLeave={() => setLabsOpen(false)}
          >
            <button
              className={`${styles.navLink} ${
                isLabActive ? `${styles.active} ${styles.labActive}` : ""
              }`}
            >
              {locale === "tr" ? "Laboratuvarlar" : "Laboratories"}
              <ChevronDown size={15} />
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                labsOpen ? styles.dropdownOpen : ""
              }`}
            >
              <Link
                href={routes.humidityLab[locale]}
                onClick={() => setLabsOpen(false)}
              >
                Nem Laboratuvarı
              </Link>

              <Link
                href={routes.radiationTemperatureLab[locale]}
                onClick={() => setLabsOpen(false)}
              >
                Radyasyon Sıcaklığı Laboratuvarı
              </Link>

              <Link
                href={routes.thermophysicalLab[locale]}
                onClick={() => setLabsOpen(false)}
              >
                Termofiziksel Özellikler Laboratuvarı
              </Link>
            </div>
          </div>

          <Link
            href={routes.contact[locale]}
            className={`${styles.navLink} ${
              isActive(routes.contact[locale]) ? styles.active : ""
            }`}
          >
            {locale === "tr" ? "İletişim" : "Contact"}
          </Link>
        </div>

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

        {/* MOBILE MENU */}
        <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
          >
            ✕
          </button>

          <nav className={styles.menuContent}>
            <Link
              href={routes.home[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              Ana Sayfa
            </Link>

            <Link
              href={routes.aboutUs[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              Hakkımızda
            </Link>

            <Link
              href={routes.publications[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              Yayınlar
            </Link>

            <button
              className={styles.menuLink}
              onClick={() => setLabsOpen(!labsOpen)}
            >
              Laboratuvarlar
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
                  onClick={closeMenu}
                >
                  Nem Laboratuvarı
                </Link>

                <Link
                  href={routes.radiationTemperatureLab[locale]}
                  onClick={closeMenu}
                >
                  Radyasyon Sıcaklığı Laboratuvarı
                </Link>

                <Link
                  href={routes.thermophysicalLab[locale]}
                  onClick={closeMenu}
                >
                  Termofiziksel Özellikler Laboratuvarı
                </Link>
              </div>
            </div>

            <Link
              href={routes.contact[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              İletişim
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}