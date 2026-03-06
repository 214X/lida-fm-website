import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "UME TDML",
    template: "%s | UME TDML"
  },
  description: "UME TDML Official Website"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
