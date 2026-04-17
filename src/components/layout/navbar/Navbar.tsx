"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { projectsData } from "@/data/projects";
import { laboratoriesData } from "@/data/laboratories";
import styles from "./NavbarStyles.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");
  const locale = isEnglish ? "en" : "tr";
  const oppositeLocale = locale === "tr" ? "en" : "tr";

  const [isOpen, setIsOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setLabsOpen(false);
    setProjectsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLabsOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const matchedRouteKey =
    (Object.keys(routes) as Array<keyof typeof routes>).find((key) => {
      return routes[key].tr === pathname || routes[key].en === pathname;
    });

  let oppositeLangHref = routes.home[oppositeLocale];
  if (matchedRouteKey) {
    oppositeLangHref = routes[matchedRouteKey][oppositeLocale];
  } else if (pathname.startsWith("/projeler/")) {
    oppositeLangHref = `/en/projects/${pathname.substring(10)}`;
  } else if (pathname.startsWith("/en/projects/")) {
    oppositeLangHref = `/projeler/${pathname.substring(13)}`;
  }
  const isActive = (route: string) => pathname === route;

  const isProjectActive = pathname.startsWith(routes.projects[locale]);

  const isLabActive = pathname.startsWith(routes.laboratories[locale]);


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
            className={`${styles.navLink} ${isActive(routes.home[locale]) ? styles.active : ""
              }`}
          >
            {locale === "tr" ? "Ana Sayfa" : "Home"}
          </Link>

          <Link
            href={routes.aboutUs[locale]}
            className={`${styles.navLink} ${isActive(routes.aboutUs[locale]) ? styles.active : ""
              }`}
          >
            {locale === "tr" ? "Hakkımızda" : "About Us"}
          </Link>

          <Link
            href={routes.publications[locale]}
            className={`${styles.navLink} ${isActive(routes.publications[locale]) ? styles.active : ""
              }`}
          >
            {locale === "tr" ? "Yayınlar" : "Publications"}
          </Link>

          {/* PROJECTS DROPDOWN */}
          <div
            className={styles.navDropdown}
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <Link
              href={routes.projects[locale]}
              onClick={() => setProjectsOpen(false)}
              className={`${styles.navLink} ${isProjectActive ? `${styles.active} ${styles.labActive}` : ""
                }`}
            >
              {locale === "tr" ? "Projeler" : "Projects"}
              <ChevronDown size={15} />
            </Link>

            <div
              className={`${styles.dropdownMenu} ${projectsOpen ? styles.dropdownOpen : ""
                }`}
            >
              {projectsData.map(project => {
                if (project.id === "placeholder") return null;
                const projectHref = locale === "tr" ? `/projeler/${project.id}` : `/en/projects/${project.id}`;
                return (
                  <Link
                    key={project.id}
                    href={projectHref}
                    onClick={() => setProjectsOpen(false)}
                    className={isActive(projectHref) ? styles.activeLink : ""}
                  >
                    {project.title[locale]}
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            className={styles.navDropdown}
            onMouseEnter={() => setLabsOpen(true)}
            onMouseLeave={() => setLabsOpen(false)}
          >
            <Link
              href={routes.laboratories[locale]}
              onClick={() => setLabsOpen(false)}
              className={`${styles.navLink} ${isLabActive ? `${styles.active} ${styles.labActive}` : ""
                }`}
            >
              {locale === "tr" ? "Laboratuvarlar" : "Laboratories"}
              <ChevronDown size={15} />
            </Link>

            <div
              className={`${styles.dropdownMenu} ${labsOpen ? styles.dropdownOpen : ""
                }`}
            >
              {laboratoriesData.map((lab) => (
                  <Link
                      key={lab.slug}
                      href={lab.href[locale]}
                      onClick={() => setLabsOpen(false)}
                      className={`${isActive(lab.href[locale]) ? styles.activeLink : ""} ${lab.slug === "lazer-metrology" ? styles.flexLink : ""}`}
                  >
                      {lab.title[locale]}
                      {lab.slug === "lazer-metrology" && <span className={styles.newBadge} />}
                  </Link>
              ))}
            </div>
          </div>

          <Link
            href={routes.contact[locale]}
            className={`${styles.navLink} ${isActive(routes.contact[locale]) ? styles.active : ""
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
            href={oppositeLangHref}
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
              {locale === "tr" ? "Ana Sayfa" : "Home"}
            </Link>

            <Link
              href={routes.aboutUs[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              {locale === "tr" ? "Hakkımızda" : "About Us"}
            </Link>

            <Link
              href={routes.publications[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              {locale === "tr" ? "Yayınlar" : "Publications"}
            </Link>

            {/* MOBILE PROJECTS DROPDOWN */}
            <div className={styles.menuLinkSplit}>
              <Link
                href={routes.projects[locale]}
                onClick={closeMenu}
                className={styles.menuLinkContent}
              >
                {locale === "tr" ? "Projeler" : "Projects"}
              </Link>
              <button
                className={styles.menuLinkToggle}
                onClick={(e) => { e.preventDefault(); setProjectsOpen(!projectsOpen); }}
                aria-label="Toggle Projects Dropdown"
              >
                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${projectsOpen ? styles.rotate : ""
                    }`}
                />
              </button>
            </div>

            <div
              className={`${styles.subMenu} ${projectsOpen ? styles.subMenuOpen : ""
                }`}
            >
              <div className={styles.subMenuInner}>
                {projectsData.map(project => {
                  if (project.id === "placeholder") return null;
                  const projectHref = locale === "tr" ? `/projeler/${project.id}` : `/en/projects/${project.id}`;
                  return (
                    <Link
                      key={project.id}
                      href={projectHref}
                      onClick={closeMenu}
                      className={isActive(projectHref) ? styles.activeLink : ""}
                    >
                      {project.title[locale]}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className={styles.menuLinkSplit}>
              <Link
                href={routes.laboratories[locale]}
                onClick={closeMenu}
                className={styles.menuLinkContent}
              >
                {locale === "tr" ? "Laboratuvarlar" : "Laboratories"}
              </Link>
              <button
                className={styles.menuLinkToggle}
                onClick={(e) => { e.preventDefault(); setLabsOpen(!labsOpen); }}
                aria-label="Toggle Laboratories Dropdown"
              >
                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${labsOpen ? styles.rotate : ""
                    }`}
                />
              </button>
            </div>

            <div
              className={`${styles.subMenu} ${labsOpen ? styles.subMenuOpen : ""
                }`}
            >
              <div className={styles.subMenuInner}>
                {laboratoriesData.map((lab) => (
                    <Link
                        key={lab.slug}
                        href={lab.href[locale]}
                        onClick={closeMenu}
                        className={`${isActive(lab.href[locale]) ? styles.activeLink : ""} ${lab.slug === "lazer-metrology" ? styles.flexLink : ""}`}
                    >
                        {lab.title[locale]}
                        {lab.slug === "lazer-metrology" && <span className={styles.newBadge} />}
                    </Link>
                ))}
              </div>
            </div>

            <Link
              href={routes.contact[locale]}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              {locale === "tr" ? "İletişim" : "Contact"}
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}