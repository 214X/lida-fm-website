import { Locale } from "@/types/locale"
import { homeContent } from "./homeContent";

type HomePageProps = {
    locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
    const content = homeContent[locale];

    return (
        <h1>
            {content.title}
        </h1>
    );
}