interface Experience {
    company: string;
    company_site: string;
    logo_link: string;
    job_title: string;
    description: string;
    start: string;
    end: string;
    picture_links: string[];
    skills: string;
}

export const EXPERIENCES: Experience[] = [
    {
        company: 'Synapse Technology Corporation',
        company_site: 'https://www.syntechcorporation.com/',
        logo_link: './assets/logos/synapse-logo.png',
        job_title: 'Software Engineering Intern',
        description: `At Synapse, I worked on developing image processing algorithms that were crucial for the recognition of
        unique luggage that were being put through x-ray machines. I also worked on a major re-write of the frontend which involved
        defining the product specifications from customer/stakeholder input, architecting a saleable codebase that is easily maintainable,
        and fleshing out integration testing practices.`,
        start: 'September 2018',
        end: 'December 2018',
        picture_links: [
            './assets/synapse/1.jpg',
            './assets/synapse/2.jpg',
            './assets/synapse/3.jpg',
        ],
        skills: 'Python, ES6, OpenCV, React, MobX, Flow, Cypress, PostCSS'
    },
    {
        company: 'Rangle.io',
        company_site: 'https://rangle.io/',
        logo_link: './assets/logos/rangle-logo.png',
        job_title: 'Full Stack Developer Intern',
        description: `While working at Rangle, I collaborated with various teams to develop secure and 
        maintainable web apps used in education and workplace safety. I actively participated in fleshing 
        out the frontend architecture for greenfield areas of the projects as well as refactoring the existing codebase to be 
        more performant and maintainable. My responsibilities also involved defining software delivery strategies as
        well as provide on-site mentorship on best development practices.`,
        start: 'September 2017',
        end: 'April 2018',
        picture_links: [
            './assets/rangle/1.jpg',
            './assets/rangle/2.jpg',
            './assets/rangle/3.jpg',
        ],
        skills: 'ES6, React, Redux, Flow, Redux-Saga, Reselect, Sass'
    },
    {
        company: 'TD Bank Group',
        company_site: 'https://www.td.com/',
        logo_link: './assets/logos/td-logo.png',
        job_title: 'Product Innovation Developer Intern',
        description: `At TD's innovation lab, I designed and developed TD's first retirement management platform, 
        a dashboard that increases transparency between retirees and financial advisors by visualizing data in a 
        simple and compelling manner. I also defined the product roadmap and various feature specs through user 
        interviews and meetings with stakeholders.`,
        start: 'January 2017',
        end: 'April 2017',
        picture_links: [
            './assets/td/1.jpg',
            './assets/td/2.jpg',
            './assets/td/3.jpg',
        ],
        skills: 'TypeScript, Angular, ES6, Sass, D3, Android, Java, Git, Sketch'
    },
    {
        company: 'Kik Interactive Inc',
        company_site: 'https://www.kik.com/',
        logo_link: './assets/logos/kik-logo.png',
        job_title: 'Release and QA Engineering Intern',
        description: `As a member of Kik's release team, I oversaw product design, development, and testing
        of multiple features that were deployed to 17 million users. I advocated for Kik's users through using
        data metrics and user feedback to ensure our features were adding value to the product. I also organized
        and directed plans of action for emergency situations. In my own time, I developed a UI testing platform to automate
        current QA procedures.`,
        start: 'May 2016',
        end: 'August 2016',
        picture_links: [
            './assets/kik/1.jpg',
            './assets/kik/2.jpg',
            './assets/kik/3.jpg',
        ],
        skills: 'Android, Espresso, Java, JIRA, Mixpanel, Fabric, Git'
    },
    {
        company: 'Palette',
        company_site: 'https://palettegear.com/',
        logo_link: './assets/logos/palette-logo.png',
        job_title: 'Software Developer Intern',
        description: `I worked on improving the main desktop application for allowing Palette's custom
        peripheral hardware to control features in Photoshop, Illustrator, and After Effects. I also explored 
        ways Palette can be used with non-Adobe apps such as Spotify and Final Cut Pro X.`,
        start: 'July 2015',
        end: 'August 2015',
        picture_links: [
            './assets/palette/1.jpg',
            './assets/palette/2.jpg',
            './assets/palette/3.jpg',
        ],
        skills: 'Qt, C++, JavaScript, ExtendScript, Git, Asana, AdobeCC'
    },
    {
        company: 'Logics Academy',
        company_site: 'https://logicsacademy.com/',
        logo_link: './assets/logos/logics-logo.png',
        job_title: 'Research and Development Intern',
        description: `My experience at Logics Academy involved wearing many different hats based on
        what the the company prioritized at the time. Some tasks I accomplished are: improved the content management system to simplify
        website updates; created instruction manuals for robot assembly and programming; modified and deployed a drag and drop
        arduino IDE to the Logics Website.`,
        start: 'May 2015',
        end: 'June 2015',
        picture_links: [
            './assets/logics/1.jpg',
            './assets/logics/2.jpg',
            './assets/logics/3.jpg',
        ],
        skills: 'HTML, CSS, JavaScript, Wordpress, Photoshop, Lightroom'
    },
    {
        company: 'CityZeen',
        company_site: 'http://www.cityzeen.co/',
        logo_link: './assets/logos/cityzeen-logo.png',
        job_title: 'Product Analyst Intern',
        description: `At this seed stage startup, I conducted market research, created user personas, and help conceptualize 
        ways in which people can better manage their online data. I also designed mockups and implemented a 
        proof of concept prototype that was demoed to potential investors.`,
        start: 'June 2015',
        end: 'July 2015',
        picture_links: [
        ],
        skills: 'MySQL, PHP, HTML, CSS, Axure, Asana'
    }
];
