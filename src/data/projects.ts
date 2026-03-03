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
    textTestimonial?: {
        name: string;
        businessName?: string;
        country?: string;
        avatar: string;
        avatarColor?: string;
        stars: number;
        time: string;
        text: string;
    };
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
    },
    {
        id: "amrvisions",
        title: "AMR Visions",
        shortDescription: "A striking video editor portfolio built with WordPress showcasing creative video projects and professional achievements.",
        fullDescription: "A customized WordPress portfolio designed for AMR Visions to highlight their expertise in video editing.\n\nThe website serves as a visual showcase of their best work, integrating video content seamlessly to provide an engaging experience for potential clients looking for professional video production and editing services.",
        stack: ["WordPress"],
        videoUrl: "/amrvisions/video.mp4",
        images: Array.from({ length: 6 }, (_, i) => `/amrvisions/${i + 1}.png`),
        liveLink: "https://amrvisions.com",
        features: [
            "Video-centric portfolio layout",
            "Professional showcase of editing work",
            "Responsive WordPress design"
        ],
        textTestimonial: {
            name: "linat1245",
            businessName: "AMR Visions",
            country: "🇳🇱 Netherlands",
            avatar: "L",
            avatarColor: "bg-[#FFD1D1] text-[#902A2A] dark:bg-red-900/30 dark:text-red-400",
            stars: 5,
            time: "6 months ago",
            text: "Zayn is very helpful, thinks along with you, and always wants the best for his clients. He is reliable, professional, and easy to communicate with. Zayn takes the time to understand your needs and goes the extra mile to deliver great results."
        }
    },
    {
        id: "raymondcoleman",
        title: "Raymond Coleman",
        shortDescription: "A redesigned video editor portfolio providing an enriched user experience and professional feel.",
        fullDescription: "A completely revamped video editor portfolio created on WordPress for Raymond Coleman.\n\nThe project focused on transitioning from an older design to a modern, dynamic portfolio that better showcases his creative video editing capabilities, enhancing his professional online presence.",
        stack: ["WordPress"],
        videoUrl: "/raymondcoleman/video.mp4",
        images: Array.from({ length: 3 }, (_, i) => `/raymondcoleman/${i + 1}.png`),
        liveLink: "https://www.raymondcoleman3.com/",
        features: [
            "Complete portfolio redesign",
            "Modern video presentation",
            "Responsive WordPress implementation"
        ],
        textTestimonial: {
            name: "tr3dawgray",
            country: "🇺🇸 United States",
            avatar: "T",
            stars: 4.7,
            time: "1 year ago",
            text: "Very responsive did a great job with a quick turnaround."
        }
    },
    {
        id: "asfandyar",
        title: "Asfand Yar",
        shortDescription: "A dual-purpose video and photography portfolio built efficiently on Wix.",
        fullDescription: "A visually compelling portfolio developed for Asfand Yar using Wix, designed to highlight both their video editing and photography expertise.\n\nThe site leverages Wix's intuitive design capabilities to deliver a fluid, media-rich browsing experience that beautifully presents visual works.",
        stack: ["Wix"],
        videoUrl: "/asfandyar/video.mp4",
        images: Array.from({ length: 4 }, (_, i) => `/asfandyar/${i + 1}.png`),
        liveLink: "https://asfandyar3737.wixsite.com/asfand",
        features: [
            "Dual video and photography display",
            "Visually compelling Wix design",
            "Optimized media delivery"
        ]
    },
    {
        id: "rouatbisafouene",
        title: "Rouatbisafouene",
        shortDescription: "A dynamic video editor portfolio built with WordPress.",
        fullDescription: "A dedicated video editor portfolio built on WordPress for Rouatbisafouene.\n\nThe platform is designed to present high-quality video content and highlight the editor's creative capabilities in a clean, modern interface.",
        stack: ["WordPress"],
        videoUrl: "/rouatbisafouene/video.mp4",
        images: Array.from({ length: 6 }, (_, i) => `/rouatbisafouene/${i + 1}.png`),
        liveLink: "https://rouatbisafouene.com/",
        features: [
            "Video portfolio presentation",
            "Sleek and modern interface",
            "WordPress managed backend"
        ]
    },
    {
        id: "mohsimplify",
        title: "Mohsimplify",
        shortDescription: "A minimalist video editor portfolio showcasing creative production skills.",
        fullDescription: "A streamlined video editor portfolio created for Mohsimplify to effectively display video projects to prospective clients.",
        stack: ["WordPress"],
        videoUrl: "/mohsimplify/video.mp4",
        images: [],
        liveLink: "https://mohsimplify.com/",
        features: [
            "Focused video presentation",
            "Performance optimized delivery",
            "Clean and minimalist design"
        ]
    },
    {
        id: "solidtex",
        title: "Solid Tex",
        shortDescription: "A professional business showcase website for a thread making company.",
        fullDescription: "A robust corporate website developed for Solid Tex, a premier thread making company.\n\nThe site highlights the company's industrial capabilities, product lines, and manufacturing excellence through a well-structured WordPress architecture, serving as a powerful B2B marketing tool.",
        stack: ["WordPress"],
        videoUrl: "/solidtex/solidtex.mp4",
        images: Array.from({ length: 4 }, (_, i) => `/solidtex/${i + 1}.png`),
        liveLink: "https://solidtex.net/",
        features: [
            "Corporate B2B showcase",
            "Product line highlights",
            "Professional WordPress development"
        ]
    }
];
