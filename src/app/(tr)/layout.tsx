// src/app/(tr)/layout.tsx

import Navbar from "@/components/layout/Navbar";

export default function TrLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
        <body>
            <Navbar />
            {children}
        </body>
        </html>
    );
}