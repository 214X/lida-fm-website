// src/app/en/layout.tsx

import Navbar from "@/components/layout/navbar/Navbar";

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