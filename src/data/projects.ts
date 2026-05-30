/**
 * Project list. Single source of truth for the homepage "Selected work"
 * section and the full /projects page.
 *
 * To add a project: copy one object below, drop a screenshot in
 * /public/projects/, and set `featured: true` to surface it on the homepage.
 * `image` is optional; when omitted the card renders a mint gradient panel.
 */
export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image?: string;
    live?: string;
    github?: string;
    year: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        slug: "heart-disease-prediction",
        title: "Heart Disease Prediction",
        category: "Machine Learning",
        description:
            "A classification model that predicts heart-failure risk from clinical features, with data cleaning, feature engineering, and model evaluation in a reproducible notebook.",
        tags: ["Python", "scikit-learn", "Pandas"],
        live: "https://colab.research.google.com/drive/1FiQ-stb81wMvrwq-94k5bpvVK8D5MS55?usp=sharing",
        github:
            "https://colab.research.google.com/drive/1FiQ-stb81wMvrwq-94k5bpvVK8D5MS55?usp=sharing",
        year: "2024",
        featured: true,
    },
    {
        slug: "cosmos-portfolio",
        title: "Cinematic Portfolio",
        category: "Web",
        description:
            "This site. A cinematic developer portfolio on Next.js 16 and Tailwind v4, with WebGL accents, scroll-driven motion, and a video-backed dark interface.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
        image: "/projects/portfolio.webp",
        live: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/cosmos-portfolio",
        year: "2026",
        featured: true,
    },
    {
        slug: "social-app",
        title: "Social Media App",
        category: "Full-stack",
        description:
            "A social platform with authentication, posts, and feeds, built on Next.js and MongoDB with a focus on a fast, responsive interface.",
        tags: ["Next.js", "MongoDB", "Tailwind"],
        image: "/projects/social-app.jpg",
        live: "https://anshmeta.netlify.app/",
        github: "https://github.com/AnshRoshan/social-app",
        year: "2024",
        featured: true,
    },
    {
        slug: "ecommerce-store",
        title: "Ecommerce Store",
        category: "Commerce",
        description:
            "A storefront with cart, checkout, and Stripe payments on Next.js and MongoDB, from product browsing through to a completed order.",
        tags: ["Next.js", "Stripe", "MongoDB"],
        image: "/projects/ecommerce.webp",
        live: "https://anshstore.vercel.app/",
        github: "https://github.com/AnshRoshan/eshop",
        year: "2023",
        featured: true,
    },
    {
        slug: "react-projects",
        title: "React Projects Collection",
        category: "Frontend",
        description:
            "A collection of React builds spanning UI experiments and small apps, used as a sandbox for patterns and component ideas.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/projects/react-projects.jpeg",
        live: "https://anshroshan.github.io/React-Projects/",
        github: "https://github.com/AnshRoshan/React-Projects",
        year: "2023",
    },
];

export const featuredProjects: Project[] = projects.filter((p) => p.featured);
