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
}

export const projects: Project[] = [
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
    }
];
