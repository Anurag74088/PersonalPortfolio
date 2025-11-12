/**
 * Portfolio Configuration File
 * 
 * Update this file with your personal information.
 * This makes it easier to manage your portfolio content.
 */

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Your Full Name",
        title: "Full Stack Developer",
        tagline: "I create stunning web applications with modern technologies",
        email: "yourname@gmail.com",
        phone: "+91 XXXXX XXXXX",
        location: "Your City, India",
        bio: "I'm a passionate full stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems."
    },

    // Social Media Links
    social: {
        instagram: "https://www.instagram.com/yourusername",
        linkedin: "https://www.linkedin.com/in/yourusername",
        github: "https://github.com/yourusername",
        twitter: "https://twitter.com/yourusername", // Optional
        facebook: "https://facebook.com/yourusername" // Optional
    },

    // Skills - Frontend
    skillsFrontend: [
        { name: "HTML5", percentage: 95 },
        { name: "CSS3 / SASS", percentage: 90 },
        { name: "JavaScript (ES6+)", percentage: 88 },
        { name: "React.js", percentage: 85 },
        { name: "Bootstrap / Tailwind CSS", percentage: 92 }
    ],

    // Skills - Backend
    skillsBackend: [
        { name: "Node.js", percentage: 82 },
        { name: "Express.js", percentage: 80 },
        { name: "Python / Django", percentage: 75 },
        { name: "RESTful APIs", percentage: 85 }
    ],

    // Skills - Database & Tools
    skillsDatabase: [
        { name: "MongoDB", percentage: 80 },
        { name: "MySQL / PostgreSQL", percentage: 78 },
        { name: "Git / GitHub", percentage: 88 },
        { name: "Docker", percentage: 70 }
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
            image: "images/project1.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            demoUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates, team features, and deadline tracking.",
            image: "images/project2.jpg",
            technologies: ["JavaScript", "Socket.io", "MySQL", "Bootstrap"],
            demoUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather application with location tracking, 7-day forecast, and beautiful visualizations.",
            image: "images/project3.jpg",
            technologies: ["HTML5", "CSS3", "JavaScript", "API"],
            demoUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/yourusername/project3"
        },
        {
            id: 4,
            title: "Blog Platform",
            description: "A modern blogging platform with markdown support, comments system, and user profiles.",
            image: "images/project4.jpg",
            technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
            demoUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/yourusername/project4"
        },
        {
            id: 5,
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media metrics with charts, graphs, and data visualization.",
            image: "images/project5.jpg",
            technologies: ["React", "Chart.js", "Tailwind", "API"],
            demoUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/yourusername/project5"
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "A responsive portfolio website with modern design, animations, and contact form integration.",
            image: "images/project6.jpg",
            technologies: ["HTML5", "CSS3", "JavaScript", "Node.js"],
            demoUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/yourusername/project6"
        }
    ],

    // About Section
    about: {
        title: "Full Stack Developer & Problem Solver",
        paragraphs: [
            "I'm a passionate full stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.",
            "My journey in web development started with a curiosity about how things work on the internet. Today, I specialize in creating responsive, scalable, and performant applications using cutting-edge technologies."
        ],
        image: "images/about.jpg"
    },

    // Tech Stack Icons
    techStack: [
        { name: "HTML5", icon: "fa-html5" },
        { name: "CSS3", icon: "fa-css3-alt" },
        { name: "JavaScript", icon: "fa-js" },
        { name: "React", icon: "fa-react" },
        { name: "Node.js", icon: "fa-node-js" },
        { name: "Python", icon: "fa-python" },
        { name: "Git", icon: "fa-git-alt" },
        { name: "Docker", icon: "fa-docker" }
    ],

    // Resume
    resume: {
        fileName: "resume.pdf",
        path: "assets/resume.pdf"
    },

    // Theme Colors (Optional - for future enhancement)
    theme: {
        primaryColor: "#6c63ff",
        secondaryColor: "#ff6584",
        darkColor: "#1a1a2e",
        lightColor: "#f8f9fa"
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

/**
 * USAGE INSTRUCTIONS:
 * 
 * 1. Update all the information in this file with your details
 * 2. This is a template - customize it as needed
 * 3. You can use this config to dynamically generate content in future
 * 4. For now, manually update the HTML with information from this config
 * 
 * FUTURE ENHANCEMENTS:
 * - Load this config file in JavaScript to dynamically populate content
 * - Create an admin panel to edit this configuration
 * - Use this as a base for a headless CMS integration
 */
