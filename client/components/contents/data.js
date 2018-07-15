const aboutMe = {
  title: 'About Me',
  description: 'I am a software engineer well versed in Javascript, Python, React and NodeJS/ExpressJS. Previously designed and built civil structures as a civil/structural engineer, I developed a lot of tools/apps that eliminated repetition, improved man-hours and reduced file sizes. Realizing that building applications and software was a lot more fun and fulfilling, I decided to shift my focus to software engineering, bringing with me all the engineering skills and experience that I gained.',
  pic: './assets/pic.jpg',
};

const projects = [
  {
    title: 'Wazzup!',
    pic: './assets/wazzup.png',
    description: 'Real-time chat application built with MeteorJS',
    achievements: ['Utilized MeteorJS full-stack reactivity to implement real-time chat feature', 'Implemented client-side routing via Flow Router to differentiate various states of the application and to enable browser history and bookmarking'],
    tech: 'ReactJS, MeteorJS, MongoDB',
    github: 'https://github.com/melvinest/wazzup',
    url: 'https://wazzup1.herokuapp.com',
  },
  {
    title: 'Welp',
    pic: './assets/welp.jpeg',
    description: 'Online business directory with user reviews and ratings',
    achievements: ['Built server using ExpressJS and MongoDB that can handle search, sort and paging queries', 'Utilized reusability of ReactJS components to generate repeating elements such as dropdowns, review/user entry and pagination', 'Developed a proxy server that merged all microservices making them accessible via a single endpoint'],
    tech: 'ReactJS, NodeJS, ExpressJS, MongoDB',
    github: 'https://github.com/teamwelp/reviews',
    url: 'https://welp1.herokuapp.com',
  },
  {
    title: 'Breakout React',
    pic: './assets/breakout.png',
    description: 'A breakout game powered by ReactJS',
    achievements: ['Employed ReactJS lifecycle methods to handle game’s collision detection, score counter and brick layout'],
    tech: 'ReactJS, NodeJS, ExpressJS',
    github: 'https://github.com/melvinest/breakout-react',
    url: 'https://breakout-react.herokuapp.com',
  },
  {
    title: 'Werk Table',
    pic: './assets/werk.png',
    description: 'Real-time online restaurant reservation application, designed the restaurant info’s back-end to handle webscale traffic',
    achievements: ['Optimized ExpressJS server to handle 10K requests per second on a MongoDB containing 10 million records', 'Achieved a 40% web response time reduction by adding a Redis caching layer to the server', 'Implemented a proxy server that carried out server-side rendering for Search Engine Optimization'],
    tech: 'ReactJS, NodeJS, ExpressJS, MongoDB',
    github: 'https://github.com/TeamW3rk/info',
    url: null,
  },
];

const contactMe = [
  { label: 'Phone', icon: 'fas fa-phone-square', info: '(415) 802-6873' },
  { label: 'E-mail', icon: 'fas fa-envelope', info: 'melvinlouie.estrada@gmail.com' },
  { label: 'LinkedIn', icon: 'fab fa-linkedin', info: 'www.linkedin.com/in/melvin-estrada' },
];

module.exports = { aboutMe, projects, contactMe };