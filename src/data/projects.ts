export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    stack: string[];
    videoUrl: string;
    images: string[];
    liveLink: string;
    features: string[];
    testimonialVideoUrl?: string; // Optional testimonial video
    testimonialImageUrl?: string; // Optional testimonial image
}

export const projects: Project[] = [
    {
        id: "devketers-outreach",
        title: "Devketers Outreach System",
        shortDescription: "A comprehensive outreach management system featuring automated scraping, AI-powered email generation, and team management capabilities.",
        fullDescription: "A full-stack outreach management system built with Next.js and MongoDB.\n\nThis platform automatically scrapes lead websites and integrates directly with Google's Gemini AI. Gemini analyzes the lead to automatically determine the best outreach angle, identify the core problem they face, determine their business type, and generate a customized email based on your company's service description.\n\nThe system gives users the flexibility to send these tailored emails directly from the platform via a company email or personal Gmail integration.\n\nIt features comprehensive lead tracking with read/reply detection, automatically marking emails as replied and initiating automated follow-ups for non-responsive leads. Additionally, it serves as a complete team management portal where you can add team members, track their individual leads, monitor their progress, and allow them to connect their personal Gmail accounts.",
        stack: ["Next.js", "MongoDB", "Gemini AI"],
        videoUrl: "/devketers-outreach/video.mp4",
        images: Array.from({ length: 10 }, (_, i) => `/devketers-outreach/${i + 1}.png`),
        liveLink: "",
        features: [
            "Automated lead website scraping and analysis via Gemini AI",
            "AI-generated customized outreach emails based on service descriptions",
            "Direct email sending via company or personal Gmail integrations",
            "Automated reply detection and intelligent follow-up sequences",
            "Comprehensive team management with individual lead tracking and progress monitoring"
        ]
    },
    {
        id: "spica-rec",
        title: "Spica Rec - Recruitment System",
        shortDescription: "A comprehensive recruitment system featuring lead management, job tracking, and proximity-based applicant matching using postcode.io.",
        fullDescription: "Built on the MERN stack, this system provides a centralized platform for managing leads, applicants, jobs, CRM, and quality control.\n\nA unique feature of the platform is the integration with the postcode.io free API to determine latitude and longitude of postcodes.\n\nUsing the Haversine distance formula, it accurately calculates the distance between two postcodes, enabling the platform to serve up applicants within a specific radius of a job (or vice versa), which was a critical client requirement.\n\nAdditionally, AWS S3 was used for secure storage of CVs and other files, and the system includes comprehensive activity tracking for all users and employees.",
        stack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "postcode.io API"],
        videoUrl: "/spica-rec/video.mp4",
        images: Array.from({ length: 14 }, (_, i) => `/spica-rec/${i + 1}.png`),
        liveLink: "",
        features: [
            "Proximity-based applicant-to-job matching using Haversine distance",
            "Comprehensive CRM and lead management",
            "Secure file storage via AWS S3 for CVs",
            "Detailed activity tracking for employees and users",
            "Quality control systems built-in"
        ]
    },
    {
        id: "fetch-cambridge",
        title: "Fetch Cambridge",
        shortDescription: "A comprehensive dog walking management system allowing clients to book walks, walkers to manage schedules, and admins to oversee all operations.",
        fullDescription: "A full-stack web application built to manage dog walking services for Fetch Cambridge. The platform serves three distinct user roles: clients, dog walkers, and administrators.\n\nClients can easily create accounts, manage profiles for their dogs, book walking slots, and securely process payments directly through the website. They can also securely provide essential details like home access information and locations.\n\nDog walkers have access to an intuitive dashboard where they can manage their scheduled bookings, view detailed walk requirements, and easily mark themselves as unavailable when needed.\n\nFor administrators, the system offers powerful tools to set schedules and availability slots for walkers. A standout feature allows admins to generate long-term recurring bookings with a single click—such as scheduling a specific 2-hour walk every Tuesday for an entire year. Admins also manage the platform by booking walks on behalf of clients, adding account credits, and handling cancellations.",
        stack: ["Next.js", "MongoDB"],
        videoUrl: "/fetch-cambridge/video.mp4",
        images: Array.from({ length: 10 }, (_, i) => `/fetch-cambridge/${i + 1}.png`),
        liveLink: "https://www.fetchcambridge.co.uk/",
        features: [
            "Client portal for dog profiling, slot booking, and secure online payments",
            "Dedicated dog walker interface for booking management and availability tracking",
            "Powerful admin scheduling with single-click long-term recurring bookings",
            "Admin controls for booking on behalf of clients, account credits, and cancellations",
            "Secure handling of client access information and location details"
        ]
    },
    {
        id: "kamilla-norrman",
        title: "Kamilla Norrman - Coaching Platform",
        shortDescription: "A comprehensive booking and client management system for life coaching, featuring timezone-aware scheduling, package tracking, and marketing automation.",
        fullDescription: "A dedicated coaching platform built for Kamilla Norrman, combining a client-facing website with a powerful backend management system. The platform is designed to handle the entire lifecycle of a coaching client.\n\nFor users, the system offers a seamless booking experience. Clients can select their preferred date and time, and the system automatically converts available slots to their local timezone, ensuring no scheduling conflicts.\n\nOn the administrator side, a secure dashboard allows complete control over availability. The admin can accept or decline bookings, manage client packages, and communicate directly with clients via built-in email functionality.\n\nA standout feature is the integrated marketing suite. The system collects leads from various funnels (like quizzes and free gifts) and allows the admin to manage these contacts and send promotional email campaigns directly from the dashboard. Furthermore, it tracks package sales and provides insights into overall revenue, creating an all-in-one business management hub.",
        stack: ["Next.js", "Tailwind CSS", "MongoDB"],
        videoUrl: "/kamilla/video.mp4",
        testimonialVideoUrl: "/testimonials/kamilla.mp4", // Assumed mp4, change if not
        images: Array.from({ length: 13 }, (_, i) => `/kamilla/${i + 1}.png`),
        liveLink: "https://kamillanorrman.com/",
        features: [
            "Timezone-aware client booking and scheduling system",
            "Admin dashboard for slot management, booking approvals, and direct client emails",
            "Integrated marketing suite for lead capture (quizzes, free gifts) and promotional campaigns",
            "Sales tracking for coaching packages and overall revenue analytics",
            "Unified client-facing website and backend management portal"
        ]
    },
    {
        id: "watches-inc",
        title: "Watches Inc. - Inventory & Sales Management",
        shortDescription: "A comprehensive inventory and sales management system, featuring detailed business analytics and expense tracking.",
        fullDescription: "A full-stack application built for Watches Inc. to manage their entire inventory and sales pipeline.\n\nThe system enables the client to maintain a complete catalog of their inventory, instantly log new sales, and track various business expenses from a centralized dashboard.\n\nIt provides powerful built-in analytics, generating reports on vital business metrics such as monthly profits, total revenue, and profit margins separated by product groups. Furthermore, the system maintains detailed client records, actively tracking customer details and automatically identifying the highest paying customers to help drive targeted business decisions.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        videoUrl: "/watches-inc/video.mp4",
        images: Array.from({ length: 11 }, (_, i) => `/watches-inc/${i + 1}.png`),
        liveLink: "",
        features: [
            "Complete inventory management and sales logging",
            "Business expense tracking and monitoring",
            "Advanced analytics detailing monthly profits and total revenue",
            "Profit margin analysis categorized by product groups",
            "Customer relationship tracking identifying highest paying clients"
        ]
    },
    {
        id: "skm-apparel",
        title: "SKM Apparels",
        shortDescription: "A WordPress website built with Elementor showcasing apparel products and business information.",
        fullDescription: "A fully responsive WordPress website built using Elementor for SKM Apparels. The site serves as a beautiful digital catalog for their clothing products while highlighting key business information.\n\nCustomers can easily browse through the available apparel and use the integrated contact form to place orders or get in touch directly with the business. This provides a clean and modern stream to convert visitors into potential clients.",
        stack: ["WordPress", "Elementor"],
        videoUrl: "/skm-apparel/video.mp4",
        images: Array.from({ length: 4 }, (_, i) => `/skm-apparel/${i + 1}.png`),
        liveLink: "",
        features: [
            "Fully responsive WordPress Elementor design",
            "Digital product catalog for apparel",
            "Integrated contact form for easy order placement",
            "Clear business information and modern branding"
        ]
    },
    {
        id: "curious-mindset",
        title: "Curious Mindset",
        shortDescription: "A life coaching WordPress website dedicated to helping individuals improve their lives.",
        fullDescription: "A fully responsive WordPress website built for Curious Mindset, a life coaching company.\n\nThe platform serves as a digital hub for their coaching services, providing visitors with comprehensive information about how they can transform their lives and achieve their goals through professional guidance. It features a clean, calming design appropriate for the personal development space.",
        stack: ["WordPress", "Elementor"],
        videoUrl: "/curious-mindset/video.mp4",
        images: Array.from({ length: 6 }, (_, i) => `/curious-mindset/${i + 1}.png`),
        liveLink: "",
        features: [
            "Fully responsive WordPress design",
            "Information portal for life coaching services",
            "Clean and calming user interface",
            "Service-focused architecture"
        ]
    },
    {
        id: "bay-by-ambreen-and-bina",
        title: "Bay by Ambreen and Bina",
        shortDescription: "A WordPress and WooCommerce store for premium bedsheets.",
        fullDescription: "A complete e-commerce solution built with WordPress and WooCommerce for Bay by Ambreen and Bina.\n\nThe platform allows customers to browse and purchase physical goods perfectly with an integrated cart and checkout process. To build trust and social proof, the site also features a review system where previous buyers can leave their feedback on purchased items.",
        stack: ["WordPress", "WooCommerce", "Elementor"],
        videoUrl: "/bay-by-ambreen-and-bina/video.mp4",
        images: Array.from({ length: 10 }, (_, i) => `/bay-by-ambreen-and-bina/${i + 1}.png`),
        liveLink: "",
        features: [
            "Fully functional WooCommerce store for physical products",
            "Seamless cart and checkout process",
            "Customer product review system",
            "Responsive Elementor-based design"
        ],
        testimonialImageUrl: "/testimonials/bay-by-ambreen-and-bina.jpeg"
    }
];
