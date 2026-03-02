// src/app/en/layout.tsx

import Navbar from "@/components/layout/navbar/Navbar";
import { manrope } from "@/lib/fonts";
import Footer from "@/components/layout/footer/Footer";

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.variable}>
                <Navbar />
                {children}
                <Footer locale="tr"/>
            </body>
        </html>
    );
}