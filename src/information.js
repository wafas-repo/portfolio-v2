import CVBuilderImage from './assets/images/CVBuilder.jpg'
import MeloFileImage from './assets/images/MeloFile.jpg';
import NetworkImage from './assets/images/Network.jpg';
import MemoryCardImage from './assets/images/MemoryCard.jpg'

const ABOUT_INFO = {
    name: 'Wafa Qazi',
    role: 'Software Developer',
    description: 'My name is Wafa Qazi. I am a recent graduate of 2021 from the University of Guelph, with a degree in Computer Science. I have great interest in full-stack development along with human computer interactions and UI/UX design. My goal is to pursue this passion within the field of software development. ',
    resume: '',
    social: {
        github: 'https://github.com/wafas-repo',
        linkedin: 'https://linkedin.com/in/wafaqazi',
        email: 'mailto:wafa.qazi@outlook.com'
    },

}

const PROJECTS = [
    {
        name: 'CV Builder',
        description:
        'Designed a web app that allows users to enter information to generate a simple resume.',
        stack: ['JavaScript ES6', 'React.js', 'HTML/CSS'],
        sourceCode: 'https://github.com/wafas-repo/cv-builder',
        livePreview: 'https://react-cv-builder.netlify.app',
        image: CVBuilderImage,
    },
    {
        name: 'MeloFile',
        description:
        'Designed a lyrics website inspired by genius lyrics. Includes features such as request edit for lyrics, django rest api, resposive web design',
        stack: ['HTML/CSS', 'JavaScript', 'Python', 'Django', 'Postgresql'],
        sourceCode: 'https://github.com/wafas-repo/MeloFile',
        livePreview: 'https://melo-file.vercel.app/',
        image: MeloFileImage,
    },
    {
        name: 'Network',
        description:
        'Designed a social networking website inspired by twitter that allows users to post and follow other users.',
        stack: ['HTML/CSS', 'JavaScript', 'Python', 'Django'],
        sourceCode: 'https://github.com/wafas-repo/Network',
        livePreview: 'https://network-fa3hdjq73-wafaqazis-projects.vercel.app/',
        image: NetworkImage,
    },
    {
        name: 'Memory Card',
        description: 'An Avatar: The Last Airbender themed memory game.',
        stack: ['Javascript ES6', 'React.js'],
        sourceCode: 'https://github.com/wafas-repo/memory-card',
        livePreview: 'https://memory-card-atla.netlify.app/',
        image: MemoryCardImage,
    },
    {
        name: 'RDMB',
        description: 'A Movie Database that displays information on movies.',
        stack: ['Javascript ES6', 'React.js', 'Typescript'],
        sourceCode: 'https://github.com/wafas-repo/react-rmdb',
        livePreview: 'https://movie-react-db.netlify.app',
        image: '',

    },
    {
        name: 'C- Compiler',
        description:
        ' Developed a compiler for made up language ”C‑”. C- test files provided [0123456789].cm, however any C- program files will work',
        stack: ['JFlex', 'CUP', 'Java', 'Flex'],
        sourceCode: 'https://github.com/wafas-repo/Code-Generator',
        livePreview: '',
    }

]

const CONTACT = {
    email: 'wafa.qazi@outlook.com',
}

export{ ABOUT_INFO, PROJECTS, CONTACT }