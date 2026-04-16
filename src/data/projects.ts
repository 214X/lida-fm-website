import type { Locale } from "@/types/locale";

export interface ProjectImage {
  src: string;
  alt: Record<Locale, string>;
}

export interface Project {
  id: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  description: Record<Locale, string[]>;
  purpose: Record<Locale, string>;
  stages: Record<Locale, string[]>;
  tags: string[];
  coverImage: string;
  images: ProjectImage[];
}

export const projectsData: Project[] = [
  {
    id: "latso",
    title: {
      tr: "LatSO",
      en: "LatSO",
    },
    summary: {
      tr: "Uzay kalifiye optiklerin lazer dayanıklılığının araştırılması ve standartlaştırılması.",
      en: "Evaluation and standardization for laser damage resistance of aerospace optics.",
    },
    description: {
      tr: [
        "Projemiz, uzay araştırmaları için kurulan sistemlerde kullanılan optik bileşenlerin farklı dalgaboylarında (1064 nm, 532 nm, 355 nm ve 266 nm) lazer dayanım eşiğini (LHED) belirlemeyi ve bunun standartlaştırılmasını hedeflemektedir.",
        "LaTSO projesi uzay koşullarının bir çeşit simülasyonunu laboratuvar ortamında oluşturarak optik bileşenin uzay koşullarındaki davranışlarını gözlemlemektedir.",
      ],
      en: [
        "Our project aims to determine the laser-induced damage threshold (LIDT) of optical components used in space research systems at different wavelengths (1064 nm, 532 nm, 355 nm, and 266 nm) and to standardize these measurements.",
        "The LaTSO project creates a simulation of space conditions in a laboratory environment to observe the behavior of optical components under space conditions.",
      ],
    },
    purpose: {
      tr: "Uzay araştırmalarında kullanılan optik bileşenlerin lazer dayanıklılığını belirleyerek, uzay araçlarının güvenilirliğini artırmak ve uluslararası standartlara uygun test protokolleri geliştirmek.",
      en: "To enhance the reliability of spacecraft by determining the laser damage resistance of optical components used in space research and developing test protocols compliant with international standards.",
    },
    stages: {
      tr: [
        "LHED'nin atmosferik koşullarda belirlenmesi",
        "LHED'nin vakum koşullarında belirlenmesi",
        "Termal olarak koşullandırılmış optik bileşenlerin LHED'nin belirlenmesi",
        "UV ışık ile yaşlandırılmış optik bileşenlerin LHED'nin belirlenmesi",
      ],
      en: [
        "Determination of LIDT under atmospheric conditions",
        "Determination of LIDT under vacuum conditions",
        "Determination of LIDT for thermally conditioned optical components",
        "Determination of LIDT for UV-aged optical components",
      ],
    },
    tags: ["ISO 21254-2", "Lazer Metroloji", "Uzay Optik", "LHED"],
    coverImage: "/images/projects-page/latso-images/latso-2.2.jpg",
    images: [
      {
        src: "/images/projects-page/latso-images/latso-1.jpg",
        alt: {
          tr: "ISO 21254-2 Standardına göre kurulmuş atmosferik ortam LHED test düzeneği",
          en: "Atmospheric LIDT test setup established according to ISO 21254-2 standard",
        },
      },
      {
        src: "/images/projects-page/latso-images/latso-2.1.jpg",
        alt: {
          tr: "1064 nm dalgaboyunda yüksek yansıtıcı kaplama yüzeyinde oluşturulan örnek hasarlar",
          en: "Sample damages created on high-reflective coating surface at 1064 nm wavelength",
        },
      },
      {
        src: "/images/projects-page/latso-images/latso-2.2.jpg",
        alt: {
          tr: "1064 nm dalgaboyunda yüksek yansıtıcı kaplama yüzeyinde oluşturulan örnek hasarlar (detay)",
          en: "Sample damages on high-reflective coating surface at 1064 nm wavelength (detail)",
        },
      },
      {
        src: "/images/projects-page/latso-images/latso-3.jpg",
        alt: {
          tr: "Vakum ortamı LHED testleri için oluşturulmuş düzenek",
          en: "Setup developed for vacuum environment LIDT tests",
        },
      },
      {
        src: "/images/projects-page/latso-images/latso-4.jpg",
        alt: {
          tr: "Termal olarak koşullandırılmış LHED testleri için iklimlendirme kabini ve ısıtma mekanizmaları",
          en: "Climate chamber and heating mechanisms for thermally conditioned LIDT tests",
        },
      },
      {
        src: "/images/projects-page/latso-images/latso-5.jpg",
        alt: {
          tr: "UV ışık ile yaşlandırılmış optiklerin LHED testleri için düzenek",
          en: "Setup for LIDT tests of UV-aged optics",
        },
      },
    ],
  },
  {
    id: "placeholder",
    title: {
      tr: "Yeni Proje (Yakında)",
      en: "New Project (Coming Soon)",
    },
    summary: {
      tr: "Bu proje hakkında detaylar yakında paylaşılacaktır.",
      en: "Details about this project will be shared soon.",
    },
    description: {
      tr: [
        "Bu proje şu anda geliştirme aşamasındadır. Detaylı bilgiler yakında bu sayfada yayınlanacaktır.",
        "Termodinamik ve Dinamik Metroloji Laboratuvarlarının yeni araştırma projelerinden biri olarak planlanmaktadır.",
      ],
      en: [
        "This project is currently in the development phase. Detailed information will be published on this page soon.",
        "It is planned as one of the new research projects of the Thermodynamic and Dynamic Metrology Laboratories.",
      ],
    },
    purpose: {
      tr: "Proje hedefleri yakında açıklanacaktır.",
      en: "Project goals will be announced soon.",
    },
    stages: {
      tr: ["Planlama aşaması", "Araştırma ve geliştirme"],
      en: ["Planning phase", "Research and development"],
    },
    tags: ["Metroloji", "Ar-Ge"],
    coverImage: "/images/hero.jpg",
    images: [],
  },
];
