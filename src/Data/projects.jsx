const projects = [
  {
    title: "PestGuard Pro",
    description:
      "A full-stack pest control management system featuring automated WhatsApp follow-up reminders, customer directory, service history tracking, and analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "JWT", "WhatsApp API"],
    live: "https://pest-guard-pro-froentend.vercel.app/",
    git: "https://github.com/yugandharboya/PestGuardPro-froentend",
    features: [
      "Customer directory with property category filtering and multi-select bulk WhatsApp messaging",
      "Automated background scheduler for daily follow-up reminders and custom message templates",
      "Service logging with auto-calculation of next reminder dates and customer profile timelines",
      "JWT-authenticated admin portal with automated MySQL database migrations and seeding",
    ],
  },
  {
    title: "VTouch Media (Freelance)",
    description:
      "A modern business website for a digital media agency to showcase services and enable seamless client communication.",
    tech: ["React.js", "HTML", "CSS", "Responsive Design", "Vercel"],
    live: "https://vtouchmedia.com",
    git: "https://github.com/yugandharboya/vtouchmedia",
    features: [
      "Responsive design optimized for mobile, tablet, and desktop",
      "Integrated Email functionality using EmailJS along with WhatsApp and phone support",
      "Clean and modern UI for better user engagement",
      "Fast-loading pages with optimized performance",
    ],
  },

  {
    title: "Personal Expense Tracker",
    description:
      "A full-stack SaaS application for managing personal income and expenses with secure user authentication.",
    tech: ["React.js", "Node.js", "Express.js", "SQLite", "REST APIs", "JWT"],
    live: "https://expense-tracker-froentend.vercel.app/",
    git: "https://github.com/yugandharboya/ExpenseTracker-Froentend",
    features: [
      "User authentication and authorization using JWT",
      "Add, edit, and delete income and expense transactions",
      "Dashboard with financial summary and category tracking",
      "Secure backend with RESTful APIs and database integration",
    ],
  },

  {
    title: "Human Resource Management System",
    description:
      "A full-stack SaaS HRMS platform for managing employees, teams, and organizational data efficiently.",
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT"],
    live: "https://hrms-froentend.vercel.app/",
    git: "https://github.com/yugandharboya/HRMS-froentend",
    features: [
      "Organization-based user registration and role management",
      "Employee and team management with structured data handling",
      "Secure authentication and protected routes using JWT",
      "Scalable backend architecture for multi-user operations",
    ],
  },

  {
    title: "E-commerce Web Application",
    description:
      "A full-stack e-commerce platform for browsing products, managing cart, and handling user authentication.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Bootstrap",
    ],
    live: "https://ecommerce.yugandharpro.com",
    git: "https://github.com/yugandharboya/e-commerce-web",
    features: [
      "Product listing with dynamic data rendering",
      "Add to cart and update cart functionality",
      "User authentication and protected routes",
      "Responsive UI built with Bootstrap for better usability",
    ],
  },
];

export default projects;
