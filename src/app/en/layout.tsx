// src/app/en/layout.tsx

import Navbar from "@/components/layout/Navbar";

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
            <Navbar />
            {children}
        </body>
        </html>
    );
}