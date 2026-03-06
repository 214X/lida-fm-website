import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "UME TDML",
    template: "%s | UME TDML",
  },
  description: "UME TDML Official Website",
  icons: {
    icon: "/images/ume-logo/UME-Yatay.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
