export interface Course {
    id: string;
    title: string;
    ageGroup: string;
    description: string;
    outcomes: string[];
    duration: string;
    format: "Online" | "Offline" | "Hybrid";
    tools: string[];
    enrollmentUrl: string;
    iconName: "Code" | "Cpu" | "Globe" | "Brain" | "Smartphone" | "Terminal" | "LineChart" | "Shield" | "Users" | "PenTool";
    category: "Primary" | "Secondary" | "Working Professional" | "Adults & Seniors" | "Coding" | "AI/ML (Artificial Intelligence)" | "Python" | "Prompt Engineering";
    level?: "Beginner" | "Intermediate" | "Advanced";
    syllabus?: { week: number; title: string; content: string }[];
}

export const COURSES: Course[] = [
    // --- PRIMARY ---
    {
        id: "primary-kids",
        title: "Primary Code & Logic",
        ageGroup: "Ages 7-12",
        description: "A fun introduction to logic and creativity through interactive stories and games. Perfect for first-time coders.",
        outcomes: [
            "Build their first animated story",
            "Understand how computers think",
            "Learn online safety basics",
            "Develop problem-solving confidence"
        ],
        duration: "12 Weeks (1 hr/week)",
        format: "Online",
        tools: ["Scratch", "Blockly"],
        enrollmentUrl: "/n-code",
        iconName: "Globe",
        category: "Primary",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "Welcome to Coding", content: "Introduction to Scratch interface, sprites, and backgrounds." },
            { week: 2, title: "Making Things Move", content: "Understanding coordinates (X, Y) and basic loops." },
            { week: 3, title: "Interactive Stories", content: "Using 'Ask and Wait' to create dialogue and choices." },
            { week: 4, title: "Mini Game Creation", content: "Creating a simple chase game with score variables." },
            { week: 5, title: "Logic & Conditions", content: "If/Else statements: teaching the computer to make decisions." },
            { week: 6, title: "Broadcast Messages", content: "Coordinating events between different sprites." },
            { week: 7, title: "Project: Space Adventure", content: "Planning and building a multi-scene story." },
            { week: 8, title: "Introduction to Loops", content: "Repeat until, forever, and nested loops explained." },
            { week: 9, title: "Variables & Data", content: "Keeping score, timer, and lives in games." },
            { week: 10, title: "Pen Tool Art", content: "Drawing geometric shapes using code." },
            { week: 11, title: "Final Project Planning", content: "Brainstorming and prototyping student's own game." },
            { week: 12, title: "Showcase Day", content: "Presenting projects to parents and peers." }
        ]
    },
    {
        id: "robotics-starter",
        title: "Robotics Starter",
        ageGroup: "Ages 9-14",
        description: "Bring code to the physical world by programming virtual and physical robots to solve mazes and challenges.",
        outcomes: [
            "Control robot movement",
            "Use sensors for navigation",
            "Understand hardware basics",
            "Complete a maze challenge"
        ],
        duration: "10 Weeks (1.5 hrs/week)",
        format: "Online",
        tools: ["VEX VR", "Micro:bit"],
        enrollmentUrl: "/n-code",
        iconName: "Cpu",
        category: "Primary",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "Intro to VEX VR", content: "Navigating the 3D playground and basic movements." },
            { week: 2, title: "Drawing with Robots", content: "Using the pen tool to draw shapes on the canvas." },
            { week: 3, title: "Sensors: Bumper", content: "Detecting walls and obstacles." },
            { week: 4, title: "Sensors: Distance", content: "Measuring distance to objects and stopping preciously." },
            { week: 5, title: "Maze Logic", content: "Writing algorithms to solve a simple maze independently." },
            { week: 6, title: "Loops & Patterns", content: "Optimizing code to be shorter and more efficient." },
            { week: 7, title: "Magnet Tool", content: "Moving objects in the virtual world." },
            { week: 8, title: "Intro to Micro:bit", content: "Switching to hardware: LED display and buttons." },
            { week: 9, title: "Sensors: Light & Temp", content: "Reading environmental data with Micro:bit." },
            { week: 10, title: "Final Challenge", content: "Complex obstacle course challenge." }
        ]
    },
    {
        id: "digital-art-kids",
        title: "Digital Art & Design",
        ageGroup: "Ages 8-13",
        description: "Unleash creativity by learning to draw, paint, and animate using digital tools.",
        outcomes: [
            "Master digital brushes and layers",
            "Create simple animations",
            "Design game characters",
            "Understand color theory"
        ],
        duration: "10 Weeks (1 hr/week)",
        format: "Online",
        tools: ["Canva", "Paint.NET"],
        enrollmentUrl: "/n-code",
        iconName: "PenTool",
        category: "Primary",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "Digital Canvas Basics", content: "Tools, brushes, and navigating the workspace." },
            { week: 2, title: "Layers Magic", content: "Understanding how to separate outline, color, and background." },
            { week: 3, title: "Shape & Form", content: "Building characters from simple shapes." },
            { week: 4, title: "Color Theory", content: "Choosing palettes that look great together." },
            { week: 5, title: "Pixel Art", content: "Creating 8-bit style characters for games." },
            { week: 6, title: "Photo Editing Fun", content: "Filters, adjustments, and combining images." },
            { week: 7, title: "Intro to Animation", content: "Frame-by-frame animation basics." },
            { week: 8, title: "Graphic Design Intro", content: "Creating a poster using text and layout in Canva." },
            { week: 9, title: "Character Design", content: "Full project: Designing a hero and a villain." },
            { week: 10, title: "Portfolio Creation", content: "Assembling a digital gallery of work." }
        ]
    },

    // --- SECONDARY ---
    {
        id: "web-dev-teens",
        title: "Web Development",
        ageGroup: "Ages 13-17",
        description: "Learn to build and publish beautiful, responsive websites from scratch using professional code.",
        outcomes: [
            "Structure pages with HTML5",
            "Style designs with CSS3",
            "Make pages interactive with JS",
            "Publish a personal portfolio"
        ],
        duration: "12 Weeks (1.5 hrs/week)",
        format: "Hybrid",
        tools: ["HTML5", "CSS3", "VS Code"],
        enrollmentUrl: "/n-code",
        iconName: "Code",
        category: "Secondary",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "How the Web Works", content: "Browsers, servers, and setting up VS Code." },
            { week: 2, title: "HTML Skeleton", content: "Tags, attributes, headings, and paragraphs." },
            { week: 3, title: "Lists & Links", content: "Creating navigation menus and content lists." },
            { week: 4, title: "Media & forms", content: "Adding images, videos, and contact forms." },
            { week: 5, title: "CSS Basics", content: "Colors, fonts, and the box model." },
            { week: 6, title: "Layouts with Flexbox", content: "Aligning items and creating navigational bars." },
            { week: 7, title: "Responsive Design", content: "Media queries for mobile-friendly pages." },
            { week: 8, title: "CSS Animations", content: "Hover effects and transitions." },
            { week: 9, title: "Wait, JavaScript?", content: "Basic interactivity: alerts and button clicks." },
            { week: 10, title: "Project: Personal Site", content: "Building a multi-page portfolio site." },
            { week: 11, title: "Hosting & Deployment", content: "Putting the website live on GitHub Pages." },
            { week: 12, title: "Final Review", content: "Code optimization and peer review." }
        ]
    },
    {
        id: "app-design",
        title: "Mobile AppUX/UI",
        ageGroup: "Ages 13-18",
        description: "Design and prototype mobile apps that solve real-world problems using industry standard design tools.",
        outcomes: [
            "User Interface (UI) principles",
            "User Experience (UX) flow",
            "Prototyping designs",
            "Testing with users"
        ],
        duration: "10 Weeks (1.5 hrs/week)",
        format: "Online",
        tools: ["Figma"],
        enrollmentUrl: "/n-code",
        iconName: "Smartphone",
        category: "Secondary",
        level: "Intermediate",
        syllabus: [
            { week: 1, title: "Design Thinking", content: "Empathizing with users and defining problems." },
            { week: 2, title: "Intro to Figma", content: "Interface, frames, shapes, and text tools." },
            { week: 3, title: "Wireframing", content: "Low-fidelity sketching of app screens." },
            { week: 4, title: "UI Components", content: "Designing buttons, inputs, and cards." },
            { week: 5, title: "Colors & Typography", content: "Creating a cohesive design system." },
            { week: 6, title: "Prototyping", content: "Linking screens to create clickable flows." },
            { week: 7, title: "Micro-interactions", content: "Adding animations and effective feedback." },
            { week: 8, title: "User Testing", content: "Getting feedback on the prototype." },
            { week: 9, title: "High-Fidelity Polish", content: "Refining visual details and assets." },
            { week: 10, title: "Project Handoff", content: "Preparing designs for developers." }
        ]
    },
    {
        id: "igcse-ict",
        title: "IGCSE ICT Prep",
        ageGroup: "Ages 14-16",
        description: "Comprehensive preparation for IGCSE ICT examinations, covering theory and practical skills.",
        outcomes: [
            "Master IGCSE curriculum",
            "Practice past year papers",
            "Database & Spreadsheet mastery",
            "Exam technique workshops"
        ],
        duration: "Ongoing",
        format: "Hybrid",
        tools: ["Microsoft Office", "Access"],
        enrollmentUrl: "/n-code",
        iconName: "LineChart",
        category: "Secondary",
        level: "Advanced",
        syllabus: [
            { week: 1, title: "Hardware & Software", content: "Core computer system concepts." },
            { week: 2, title: "Input/Output Devices", content: "Understanding peripherals and storage." },
            { week: 3, title: "Word Processing", content: "Advanced document formatting and mail merge." },
            { week: 4, title: "Data Analysis (Excel)", content: "Formulas, functions, and validation." },
            { week: 5, title: "Databases (Access)", content: "Tables, queries, forms, and reports." },
            { week: 6, title: "Web Authoring", content: "HTML/CSS specifically for the IGCSE exam." },
            { week: 7, title: "Presentation", content: "Master slides and master usage." },
            { week: 8, title: "Networks & Internet", content: "LAN, WAN, security, and protocols." },
            { week: 9, title: "Social Impacts", content: "Legal, ethical, and moral issues of ICT." },
            { week: 10, title: "Past Paper Drill", content: "Practical exam simulation (Paper 2)." },
            { week: 11, title: "Past Paper Drill", content: "Practical exam simulation (Paper 3)." },
            { week: 12, title: "Theory Drill", content: "Written exam techniques (Paper 1)." }
        ]
    },

    // --- PYTHON SPECIFIC ---
    {
        id: "python-basics",
        title: "Python Zero to Hero",
        ageGroup: "Ages 13+",
        description: "The ultimate starting point for programming. Learn the language used by Google, NASA, and Netflix.",
        outcomes: [
            "Variables, loops, and logic",
            "Writing clean, readable code",
            "Building text-based games",
            "File handling basics"
        ],
        duration: "12 Weeks (1.5 hrs/week)",
        format: "Online",
        tools: ["Python", "IDLE"],
        enrollmentUrl: "/n-code",
        iconName: "Terminal",
        category: "Python",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "Setup & Hello World", content: "Installing Python and writing first script." },
            { week: 2, title: "Variables & Types", content: "Strings, Integers, Floats, and input." },
            { week: 3, title: "Control Flow", content: "If/Elif/Else logic and decision making." },
            { week: 4, title: "Loops", content: "While loops and For loops explained." },
            { week: 5, title: "Functions", content: "Writing reusable code blocks." },
            { week: 6, title: "Lists & Dictionaries", content: "Managing collections of data." },
            { week: 7, title: "Libraries", content: "Importing random, time, and math modules." },
            { week: 8, title: "Project: Number Guess", content: "Building a robust guessing game." },
            { week: 9, title: "File I/O", content: "Reading and writing to text files." },
            { week: 10, title: "Error Handling", content: "Try/Except blocks for safer code." },
            { week: 11, title: "Capstone Project", content: "Text-based adventure game." },
            { week: 12, title: "Next Steps", content: "Intro to classes and potential career paths." }
        ]
    },
    {
        id: "python-data",
        title: "Data Science with Python",
        ageGroup: "Ages 15+ / Adults",
        description: "Learn to analyze data, create beautiful visualizations, and make data-driven decisions.",
        outcomes: [
            "Pandas & NumPy fundamentals",
            "Data cleaning techniques",
            "Visualizing data with Matplotlib",
            "Real-world data projects"
        ],
        duration: "10 Weeks (2 hrs/week)",
        format: "Online",
        tools: ["Jupyter", "Pandas", "Matplotlib"],
        enrollmentUrl: "/n-code",
        iconName: "LineChart",
        category: "Python",
        level: "Intermediate",
        syllabus: [
            { week: 1, title: "Jupyter Notebooks", content: "Setup and literate programming workflow." },
            { week: 2, title: "NumPy Basics", content: "Arrays, matrices, and vectorized operations." },
            { week: 3, title: "Intro to Pandas", content: "Series and DataFrames for tabular data." },
            { week: 4, title: "Data Cleaning", content: "Handling missing values and duplicates." },
            { week: 5, title: "Data Manipulation", content: "Filtering, sorting, and grouping data." },
            { week: 6, title: "Matplotlib Intro", content: "Line charts, bar charts, and customization." },
            { week: 7, title: "Seaborn", content: "Statistical data visualization made easy." },
            { week: 8, title: "Exploratory Analysis", content: "Finding patterns in a new dataset." },
            { week: 9, title: "Project: Titanic", content: "Analyzing survivor data." },
            { week: 10, title: "Final Presentation", content: "Communicating insights from data." }
        ]
    },

    // --- AI / ML ---
    {
        id: "ai-foundations",
        title: "AI Foundations",
        ageGroup: "Ages 12-18",
        description: "Demystifying Artificial Intelligence. Understand how machines learn and the ethics behind it.",
        outcomes: [
            "Neural Networks explained",
            "Training a simple model",
            "AI Ethics & Safety",
            "Future of AI careers"
        ],
        duration: "8 Weeks (1.5 hrs/week)",
        format: "Online",
        tools: ["Teachable Machine", "TensorFlow.js"],
        enrollmentUrl: "/n-code",
        iconName: "Brain",
        category: "AI/ML (Artificial Intelligence)",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "What is AI?", content: "ANI vs AGI, history, and current examples." },
            { week: 2, title: "Machine Learning", content: "Supervised vs Unsupervised learning." },
            { week: 3, title: "Computer Vision", content: "Training models to recognize images." },
            { week: 4, title: "NLP", content: "How computers read and write language." },
            { week: 5, title: "Neural Networks", content: "Simulating neurons to learn patterns." },
            { week: 6, title: "Bias & Ethics", content: "Why data matters and algorithmic fairness." },
            { week: 7, title: "Project: AI Solver", content: "Using pre-trained models for a task." },
            { week: 8, title: "The Future", content: "Generative AI and societal impact." }
        ]
    },
    {
        id: "ml-practical",
        title: "Practical Machine Learning",
        ageGroup: "Advanced Teens / Adults",
        description: "Hands-on course building real prediction models using classic ML algorithms.",
        outcomes: [
            "Supervised vs Unsupervised learning",
            "Regression & Classification",
            "Model evaluation mechanics",
            "scikit-learn mastery"
        ],
        duration: "12 Weeks (2 hrs/week)",
        format: "Online",
        tools: ["Python", "scikit-learn"],
        enrollmentUrl: "/n-code",
        iconName: "Brain",
        category: "AI/ML (Artificial Intelligence)",
        level: "Advanced",
        syllabus: [
            { week: 1, title: "ML Landscape", content: "Types of ML systems and workflow." },
            { week: 2, title: "Linear Regression", content: "Predicting continuous values." },
            { week: 3, title: "Gradient Descent", content: "The engine behind optimization." },
            { week: 4, title: "Logistic Regression", content: "Binary classification problems." },
            { week: 5, title: "Support Vector Machines", content: "Powerful classification models." },
            { week: 6, title: "Decision Trees", content: "White-box models and visualization." },
            { week: 7, title: "Ensemble Learning", content: "Random Forests and Boosting." },
            { week: 8, title: "Dimensionality Reduction", content: "PCA and simplifying data." },
            { week: 9, title: "Clustering (K-Means)", content: "Unsupervised grouping." },
            { week: 10, title: "Model Evaluation", content: "Cross-validation, precision, recall." },
            { week: 11, title: "Project: Housing Prices", content: "End-to-end regression project." },
            { week: 12, title: "Deployment Basics", content: "Saving models with pickle/joblib." }
        ]
    },

    // --- PROMPT ENGINEERING ---
    {
        id: "prompt-basic",
        title: "Prompt Engineering 101",
        ageGroup: "All Ages (13+)",
        description: "Learn to communicate effectively with AI to generate better text, ideas, and solutions.",
        outcomes: [
            "Zero-shot vs Few-shot prompting",
            "Chain of thought reasoning",
            "Reducing AI hallucinations",
            "Writing content with AI"
        ],
        duration: "4 Weeks (1.5 hrs/week)",
        format: "Online",
        tools: ["ChatGPT", "Claude"],
        enrollmentUrl: "/n-code",
        iconName: "Terminal",
        category: "Prompt Engineering",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "LLM Basics", content: "How models like GPT-4 work (predicting tokens)." },
            { week: 2, title: "Prompt Structure", content: "Context, Instruction, Input, Output format." },
            { week: 3, title: "Advanced Techniques", content: "Few-shot prompting and Chain-of-Thought." },
            { week: 4, title: "Application", content: "Building a personal AI writing assistant." }
        ]
    },
    {
        id: "prompt-creative",
        title: "AI for Creatives",
        ageGroup: "Designers / Creators",
        description: "Master image generation tools to create stunning visual assets for your projects.",
        outcomes: [
            "Midjourney parameters",
            "Consistent character generation",
            "Style transfer techniques",
            "Copyright & Ethics"
        ],
        duration: "6 Weeks (1.5 hrs/week)",
        format: "Online",
        tools: ["Midjourney", "DALL-E 3"],
        enrollmentUrl: "/n-code",
        iconName: "PenTool",
        category: "Prompt Engineering",
        level: "Intermediate",
        syllabus: [
            { week: 1, title: "Text-to-Image", content: "Understanding diffusion models." },
            { week: 2, title: "Prompting Aesthetics", content: "Lighting, composition, and style keywords." },
            { week: 3, title: "Parameters", content: "Aspect ratio, stylize, chaos, and weirdness." },
            { week: 4, title: "Image-to-Image", content: "Using reference images for consistency." },
            { week: 5, title: "Inpainting & Outpainting", content: "Editing and expanding images." },
            { week: 6, title: "Workflow", content: "Integrating AI art into design projects." }
        ]
    },

    // --- WORKING PROFESSIONALS ---
    {
        id: "office-mastery",
        title: "Office Productivity Masterclass",
        ageGroup: "Working Professionals",
        description: "10x your speed in Excel, Word, and PowerPoint. Automate boring tasks and impress your boss.",
        outcomes: [
            "Advanced Excel (VLOOKUP, Pivot)",
            "Professional slide design",
            "Document formatting secrets",
            "Collaboration tools"
        ],
        duration: "8 Weeks (2 hrs/week)",
        format: "Online",
        tools: ["Microsoft 365", "Excel"],
        enrollmentUrl: "/n-code",
        iconName: "LineChart",
        category: "Working Professional",
        level: "Intermediate",
        syllabus: [
            { week: 1, title: "Word like a Pro", content: "Styles, TOC, and large document management." },
            { week: 2, title: "Excel Fundamentals", content: "Formatting, basic formulas, and data types." },
            { week: 3, title: "Excel Data Analysis", content: "PivotTables, Charts, and Slicers." },
            { week: 4, title: "Excel Functions", content: "VLOOKUP, XLOOKUP, IF, and conditional formatting." },
            { week: 5, title: "PowerPoint Design", content: "Master slides, alignment, and visual hierarchy." },
            { week: 6, title: "Presentation Delivery", content: "Transitions, animations, and presenter view." },
            { week: 7, title: "Outlook & Teams", content: "Email management and efficient meetings." },
            { week: 8, title: "Integration", content: "Linking Excel data to Word and PPT." }
        ]
    },
    {
        id: "cyber-workplace",
        title: "Cybersecurity for Business",
        ageGroup: "Working Professionals",
        description: "Essential security practices to protect your company's data and your own privacy.",
        outcomes: [
            "Identifying phishing attacks",
            "Secure password management",
            "Data protection laws",
            "Safe remote working"
        ],
        duration: "4 Weeks (1 hr/week)",
        format: "Online",
        tools: ["Simulation Tools"],
        enrollmentUrl: "/n-code",
        iconName: "Shield",
        category: "Working Professional",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "The Threat Landscape", content: "Understanding malware, ransomware, and social engineering." },
            { week: 2, title: "Password Hygiene", content: "Strength, unique passwords, and 2FA/MFA." },
            { week: 3, title: "Phishing Spotting", content: "Analyzing email headers and suspicious links." },
            { week: 4, title: "Device Security", content: "Updates, backups, and secure Wi-Fi usage." }
        ]
    },

    // --- ADULTS & SENIORS ---
    {
        id: "digital-literacy",
        title: "Digital Confidence for Seniors",
        ageGroup: "Adults & Seniors",
        description: "A patient, slow-paced course to help you feel safe and capable using modern technology.",
        outcomes: [
            "Using Smartphones & Tablets",
            "Video calling family (Zoom/Skype)",
            "Spotting online scams",
            "Online banking safely"
        ],
        duration: "8 Weeks (1 hr/week)",
        format: "Hybrid",
        tools: ["Android", "iOS"],
        enrollmentUrl: "/n-code",
        iconName: "Users",
        category: "Adults & Seniors",
        level: "Beginner",
        syllabus: [
            { week: 1, title: "Getting Started", content: "Turning on/off, charging, and buttons explanation." },
            { week: 2, title: "Touchscreen Basics", content: "Tapping, swiping, zooming, and typing." },
            { week: 3, title: "Connecting to Wi-Fi", content: "Understanding internet and data." },
            { week: 4, title: "Communication", content: "WhatsApp, SMS, and adding contacts." },
            { week: 5, title: "Video Calls", content: "Installing specific apps to see family faces." },
            { week: 6, title: "Taking Photos", content: "Camera basics and viewing the gallery." },
            { week: 7, title: "Online Safety", content: "Identifying fake messages and never sharing PINs." },
            { week: 8, title: "Useful Apps", content: "Maps, weather, and news apps." }
        ]
    },

    // --- CODING (GENERAL) ---
    {
        id: "java-fundamentals",
        title: "Java Programming",
        ageGroup: "Students & Adults",
        description: "Learn the object-oriented language that powers Android apps and enterprise systems.",
        outcomes: [
            "OOP Principles",
            "Building desktop apps",
            "Data structures intro",
            "Preparing for AP CS (if applicable)"
        ],
        duration: "14 Weeks (2 hrs/week)",
        format: "Online",
        tools: ["Java", "IntelliJ IDEA"],
        enrollmentUrl: "/n-code",
        iconName: "Code",
        category: "Coding",
        level: "Intermediate",
        syllabus: [
            { week: 1, title: "Java Setup", content: "JDK installation and IntelliJ IDEA." },
            { week: 2, title: "Java Syntax", content: "Variables, types, and operators." },
            { week: 3, title: "Control Flow", content: "Conditionals and loops." },
            { week: 4, title: "Arrays", content: "Working with fixed-size collections." },
            { week: 5, title: "Methods", content: "Defining and calling functions." },
            { week: 6, title: "Intro to OOP", content: "Classes and Objects explained." },
            { week: 7, title: "Encapsulation", content: "Getters, setters, and access modifiers." },
            { week: 8, title: "Inheritance", content: "Extending classes and code reuse." },
            { week: 9, title: "Polymorphism", content: "Overriding and overloading methods." },
            { week: 10, title: "Collections Framework", content: "ArrayLists and HashMaps." },
            { week: 11, title: "Exceptions", content: "Handling runtime errors." },
            { week: 12, title: "IO Operations", content: "File reading and writing." },
            { week: 13, title: "UI Basics", content: "Intro to Swing or JavaFX." },
            { week: 14, title: "Final Project", content: "Building a simple management system." }
        ]
    }
];
