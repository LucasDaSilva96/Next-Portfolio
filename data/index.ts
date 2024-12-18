export const gridItems = [
  {
    id: 1,
    title:
      'Looking for a dedicated developer? Lets collaborate and bring your project to life',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "Let's shape tomorrow's tech together",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start top-4 lg:top-0',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My coding skills',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center ',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently exploring the world of AI and Machine Learning.',
    description: 'The future is now',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute inset-0 w-full h-full opacity-65',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title:
      'Ready to collaborate and bring your project to life? Let s get started together!',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    code: 'https://github.com/LucasDaSilva96/Apple-Website?tab=readme-ov-file',
    demo: 'https://apple-website-ruddy-gamma.vercel.app/',
  },
  {
    id: 2,
    title: 'Netflix Clone',
    des: 'This is a Full Stack Netflix Clone built using React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth, and deployed on Vercel. The project aims to mimic the core features of Netflix, including user authentication, movie browsing, and movie details display',
    img: '/NextFlix-2.png',
    iconLists: [
      '/next.svg',
      '/tail.svg',
      '/ts.svg',
      '/vercel.svg',
      '/prisma.svg',
      '/mongodb.svg',
    ],
    code: 'https://github.com/LucasDaSilva96/NextFlix',
    demo: 'https://next-flix-peach.vercel.app/',
  },
  {
    id: 4,
    title: 'Space Tourism Website',
    des: 'This project is my solution to the Space Tourism Website challenge from Frontend Mentor. The website is built with modern front-end technologies, including Vue 3, Tailwind CSS, GSAP, and TypeScript, to create a dynamic and responsive multi-page site',
    img: '/Space-tourism.png',
    iconLists: ['/vue.svg', '/tail.svg', '/ts.svg', '/gsap.svg', '/git.svg'],
    code: 'https://github.com/LucasDaSilva96/FrontEnd-Mentor---Projects/tree/main/Space-tourism-multi-page-website',
    demo: 'https://space-tourism-x.netlify.app/',
  },
  {
    id: 3,
    title: 'NextHorizon Bank',
    des: 'This modern web application is designed to make banking operations easier and more secure for users. Built using Next.js, React, TypeScript, and Tailwind CSS, it offers features like secure account linking, seamless fund transfers, real-time notifications, and detailed transaction histories.',
    img: '/NextHorizon.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/vercel.svg'],
    code: 'https://github.com/LucasDaSilva96/NextHorizon-Finance',
    demo: 'https://next-horizon-finance.vercel.app/',
  },
  {
    id: 4,
    title: 'Pomodoro app',
    des: 'This is my solution to the Pomodoro app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
    img: '/Pomodoro.png',
    iconLists: [
      '/nuxt.svg',
      '/tail.svg',
      '/ts.svg',
      '/vercel.svg',
      '/git.svg',
      '/fm.svg',
    ],
    code: 'https://github.com/LucasDaSilva96/FrontEnd-Mentor---Projects/tree/main/Pomodoro-App',
    demo: 'https://main--pomodoro-just-dot-it.netlify.app/',
  },
  {
    id: 5,
    title: 'Interval App',
    des: 'The Interval App is a React-based application designed to help users manage their time effectively through various timers and interval settings. The app leverages modern web technologies such as TypeScript, Zustand for state management, and Framer Motion for animations.',
    img: '/Interval-app.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/vercel.svg', '/git.svg'],
    code: 'https://github.com/LucasDaSilva96/Interval-App---for-all-you-timing-needs',
    demo: 'https://interval-app-for-all-you-timing-needs.vercel.app/',
  },
  {
    id: 6,
    title: 'BortaKväll',
    des: 'BortaKväll is an innovative e-commerce platform dedicated to revolutionizing the candy shopping experience. Our mission is to provide candy lovers with a delightful and seamless online shopping journey, offering a wide variety of sweets and an intuitive user interface. Built with cutting-edge technologies, BortaKväll ensures a secure, fast, and enjoyable shopping experience for all users.',
    img: '/Bortkvall.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/vercel.svg', '/git.svg'],
    code: 'https://github.com/LucasDaSilva96/BortaKv-ll',
    demo: 'https://borta-kv-ll.vercel.app/',
  },
];

export const techStack = [
  {
    quote:
      'Next.js enables seamless server-side rendering and static site generation, making it a powerful choice for building performant web applications.',
    name: 'Next.js',
    title: 'Framework for Server-rendered React Applications',
    image: '/Tech_logo_NextJS.png',
  },
  {
    quote:
      "React's component-based architecture and virtual DOM make it a highly efficient and flexible library for building dynamic user interfaces.",
    name: 'React',
    title: 'JavaScript Library for Building User Interfaces',
    image: '/Tech_logo_react.png',
  },
  {
    quote:
      "TypeScript's strong typing and error-checking capabilities significantly improve code quality and developer productivity.",
    name: 'TypeScript',
    title: 'Superset of JavaScript with Type Safety',
    image: '/Tech_logo_typeScript.png',
  },
  {
    quote:
      'Node.js allows for scalable and high-performance server-side applications using JavaScript, enabling full-stack development with a single language.',
    name: 'Node.js',
    title: "JavaScript Runtime Built on Chrome's V8 Engine",
    image: '/Tech_logo_nodejs.png',
  },
  {
    quote:
      "Git's version control capabilities are essential for collaboration and maintaining a clear history of code changes.",
    name: 'Git',
    title: 'Distributed Version Control System',
    image: '/Tech_logo_git.png',
  },
  {
    quote:
      'APIs enable seamless communication between different software systems, making them crucial for modern web development.',
    name: 'APIs',
    title: 'Application Programming Interfaces',
    image: '/Tech_logo_api.png',
  },
  {
    quote:
      'CSS provides the essential styling capabilities needed to create visually appealing and responsive web pages.',
    name: 'CSS',
    title: 'Cascading Style Sheets',
    image: '/Tech_logo_css.png',
  },
  {
    quote:
      'Tailwind CSS offers a utility-first approach, allowing developers to rapidly build custom designs without leaving their HTML.',
    name: 'Tailwind',
    title: 'Utility-First CSS Framework',
    image: '/Tech_logo_tailwind.png',
  },
  {
    quote:
      "Material-UI brings Google's Material Design to React, providing a robust set of components that enhance UI consistency and usability.",
    name: 'Material-UI',
    title: 'React Components for Faster and Easier Web Development',
    image: '/Tech_logo_material_ui.png',
  },
  {
    quote:
      'Framer Motion provides powerful animations and gestures, enabling the creation of rich and interactive user experiences.',
    name: 'Framer Motion',
    title: 'Open Source React Library to Power Production-ready Animations',
    image: '/Tech_logo_motion_framer.png',
  },
  {
    quote:
      "Figma's collaborative design features make it an essential tool for creating and sharing design prototypes and assets.",
    name: 'Figma',
    title: 'Web-based UI Design Tool',
    image: '/Tech_logo_figma.png',
  },
  {
    quote:
      'Bootstrap offers a wide range of pre-styled components, facilitating quick and responsive web development.',
    name: 'Bootstrap',
    title: 'Popular Framework for Building Responsive, Mobile-first Sites',
    image: '/Tech_logo_bootStrap.png',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Intern Frontend Developer - Mennt AS',
    desc: 'Currently Working as an intern frontend developer at Mennt AS, contributing to the development of e-commerce websites using Vue.js, Nuxt.js, Directus and Tailwind CSS.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Open Source Contributor',
    desc: 'Contributed to various open-source projects on GitHub, improving existing features and fixing bugs using JavaScript, TypeScript, React.js, Next.js and Node.js.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Capstone Project - Folkuniversitetet',
    desc: 'Developed a web application as part of the final project for my frontend development course, incorporating React.js, API integration, and responsive design.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'The Odin Project - Full Stack JavaScript',
    desc: 'Completed multiple projects as part of The Odin Project’s Full Stack JavaScript curriculum, including building a full-fledged web application using Node.js, Express, and MongoDB.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/LucasDaSilva96',
    alt: "Lucas Da Silva's GitHub",
  },

  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/lucas-da-silva-9955911a0/',
    alt: "Lucas Da Silva's LinkedIn",
  },
];
