// src/app/(tr)/layout.tsx

import Navbar from "@/components/layout/navbar/Navbar";
import { manrope } from "@/lib/fonts";
import Footer from "@/components/layout/footer/Footer";

export default function TrLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body className={manrope.variable}>
                <Navbar />
                {children}
                <Footer locale="tr"/>
            </body>
        </html>
    );
}