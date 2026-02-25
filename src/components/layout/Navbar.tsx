"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

export default function Navbar() {
    const pathname = usePathname();

    const isEnglish = pathname.startsWith("/en");
    const locale = isEnglish ? "en" : "tr";
    const oppositeLocale = locale === "tr" ? "en" : "tr";

    // find the current route key
    const currentRouteKey =
        (Object.keys(routes) as Array<keyof typeof routes>).find((key) => {
        return (
            routes[key].tr === pathname ||
            routes[key].en === pathname
        );
    }) ?? "home";

    return (
        <nav className="flex gap-6">
            <Link href={routes.home[locale]}>
                {locale === "tr" ? "Ana Sayfa" : "Home"}
            </Link>

            <Link href={routes.publications[locale]}>
                {locale === "tr" ? "Yayınlar" : "Publications"}
            </Link>

            {/* Locale switch */}
            <Link href={routes[currentRouteKey][oppositeLocale]}>
                {locale === "tr" ? "EN" : "TR"}
            </Link>
        </nav>
    );
}