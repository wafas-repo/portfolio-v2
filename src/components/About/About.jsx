import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { ABOUT_INFO } from "../../information";
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { gsap } from 'gsap';

import resume from '../../assets/wqazi_resume.pdf';

import { Wrapper, Content, Button} from "./About.styles";

const About = () => {

  const { name, role, social } = ABOUT_INFO

  useEffect(() => {
    const safeToAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!safeToAnimate) return;

    const dom = {
      face: document.querySelector(".face"),
      eye: document.querySelectorAll(".eye"),
      innerFace: document.querySelector(".inner-face"),
      hairFront: document.querySelector(".hair-front"),
      hairBack: document.querySelector(".hair-back"),
      ear: document.querySelectorAll(".ear"),
      eyebrowLeft: document.querySelector(".eyebrow-left"),
      eyebrowRight: document.querySelector(".eyebrow-right"),
      screenlog: document.querySelector(".screen-log"),
    };

    let xPosition;
    let yPosition;

    let storedXPosition;
    let storedYPosition;

    let mapWidth;
    let mapHeight;

    function setMaps() {
      mapWidth = gsap.utils.mapRange(0, window.innerWidth, -50, 50);
      mapHeight = gsap.utils.mapRange(0, window.innerHeight, -50, 50);
    }

    window.addEventListener("resize", setMaps);
    setMaps();

    function moveSVG() {
      if (storedXPosition === xPosition && storedYPosition === yPosition) return;
      const x = xPosition;
      const y = yPosition;

      if (xPosition && yPosition) {
        dom.screenlog.innerHTML = `
        <p> x: ${Math.round(x)}</p>
        <p> y: ${Math.round(y)} </p>`;
      }

      gsap.to(dom.face, { yPercent: y / 30, xPercent: x / 30 });
      gsap.to(dom.eye, { yPercent: y / 3, xPercent: x / 2 });
      gsap.to(dom.innerFace, { yPercent: y / 6, xPercent: x / 6 });
      gsap.to(dom.hairFront, { yPercent: y / 15, xPercent: x / 22 });
      gsap.to(dom.hairBack, { yPercent: (y / 20) * -1, xPercent: (x / 20) * -1 });
      gsap.to(dom.ear, { yPercent: (y / 1.5) * -1, xPercent: (x / 10) * -1 });
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], { yPercent: y * 2.5 });

      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }

    gsap.ticker.add(moveSVG);

    function updateMouseCoords(event) {
      xPosition = mapWidth(event.clientX);
      yPosition = mapHeight(event.clientY);
    }

    window.addEventListener("mousemove", updateMouseCoords);

    return () => {
      window.removeEventListener("resize", setMaps);
      window.removeEventListener("mousemove", updateMouseCoords);
      gsap.ticker.remove(moveSVG);
    };
  }, []);

  return (
    <Wrapper>
        <Content>
    
            <div className='about'>
            {name && (
                <h1>
                Hi, I am <span className='about__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='about__role'>{role}.</h2>}

            <div className='about__contact center'>
                {social && (
                <>
                    {social.github && (
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label='github'
                        className='link link--icon'
                    >
                        <FaGithub />
                    </a>
                    )}

                    {social.linkedin && (
                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label='linkedin'
                        className='link link--icon'
                    >
                        <FaLinkedin />
                    </a>
                    )}
                    {social.email && (
                    <a
                        href={social.email}
                        aria-label='email'
                        className='link link--icon'
                    >
                        <FaEnvelope />
                    </a>
                    )}
                </>
                )}
            </div>

                <div className="resume_btn_container">
                    {resume && (
                        <Button>
                            <a href={resume} download="resume.pdf">
                                
                                <span type='button' className=' btn btn--outline' >
                                    resume
                                </span>
                                
                            </a>
                        </Button>
                    )}
                </div>
            </div>

            <section className="about-2" id="about">
                <div className="section__title">
                    <h2>About Me</h2>
                </div>

                <div className="about-container">
                    <div className="about-img">
                         <svg viewBox="0 10 211.73 180" strokeLinecap="round" strokeLinejoin="round">
                                <defs>
                                <clipPath id="background-clip">
                                    <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none" />
                                </clipPath>

                                <linearGradient id="linear-gradient" x1="102.94" y1="154.47" x2="102.94" y2="36.93" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fff5cc" />
                                    <stop offset="0.01" stopColor="#faf0c8" />
                                    <stop offset="0.19" stopColor="rgb(194, 181, 153)" />
                                    <stop offset="0.35" stopColor="#998977" />
                                    <stop offset="0.47" stopColor="#806f62" />
                                    <stop offset="0.54" stopColor="#77655a" />
                                    <stop offset="0.6" stopColor="#77655a" />
                                    <stop offset="1" stopColor="#77655a" />
                                </linearGradient>
                                </defs>
                                <path
                                className="bg"
                                d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z"
                                fill="rgb(111, 220, 191)"
                                id="path8"
                                style={{ fill: '#c250d5', fillOpacity: 1 }}
                                />
                                <g clipPath="url(#background-clip)">
                                <g className="me">
                                    <g className="body">
                                    <path
                                        className="hair-back hair"
                                        d="m 127.63,45.17 c 2.65,1.35 11.15,4.2 16.07,23.12 2.88,20.58 3.79,26.07 4.68,30.6 0.89,4.53 1.2,11.6 6.3,21.15 5.1,9.55 0.85,14.65 0.85,14.65 l -7.63,7.08 -16.36,8.24 c -2.7,1.09 -18.82,6.25 -30.6,3.86 l -27.67,-5.74 c 0,0 -7.11,-4.65 -12.77,-5.21 -3.215588,-0.29333 -6.396341,-0.8893 -9.5,-1.78 0,0 -5,-11.43 -0.4,-23.56 4.6,-12.13 7.4,-13.48 7.72,-28.71 0.32,-15.23 2.41,-34.66 20.41,-45 18,-10.34 38.14,-8.47 48.9,1.3 z"
                                        fill="url(#linear-gradient)"
                                        id="path9"
                                        style={{ fill: '#794627', fillOpacity: 1 }}
                                    />
                                    <path
                                        className="neck"
                                        d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z"
                                        fill="#ede3d1"
                                        id="path10"
                                        style={{ fill: '#d2a679', fillOpacity: 1 }}
                                    />
                                    <path
                                        className="top"
                                        d="M 104.75329,164.10769 C 74.583289,164.10769 80.25,127 80.25,182.84 h 25.35 l 25,-2.14 c -0.05,-55.79 4.31329,-16.59231 -25.84671,-16.59231 z"
                                        fill="#fff"
                                        stroke="#404040"
                                        strokeWidth="0.5"
                                        id="path11"
                                        style={{ fill: '#151515', fillOpacity: 1 }}
                                    />
                                    <path
                                        className="shoulder"
                                        d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z"
                                        fill="#404040"
                                        id="path12"
                                        style={{ fill: '#151515', fillOpacity: 1 }}
                                    />
                                    <path
                                        className="shoulder"
                                        d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z"
                                        fill="#404040"
                                        id="path13"
                                        style={{ fill: '#151515', fillOpacity: 1 }}
                                    />
                                    </g>
                                </g>
                                <path
                                    className="shadow"
                                    d="M95.82 122.36h18.41v14.31s-10.5 5.54-18.41 0z"
                                    fill="#efceb9"
                                    id="path14"
                                    style={{ fill: '#c88860', fillOpacity: 0.67696631 }}
                                />
                                <g className="head">
                                    <g className="ear-left ear">
                                    <path
                                        d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z"
                                        fill="#ede3d1"
                                        id="path15"
                                        style={{ fill: '#d2a679', fillOpacity: 1 }}
                                    />
                                    <path
                                        d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-7.58-1.67a.26.26 0 000 .52z"
                                        fill="#b5aa9a"
                                        id="path16"
                                        style={{ fill: '#2b343b', fillOpacity: 1 }}
                                    />
                                    </g>
                                    <g className="ear-right ear">
                                    <path
                                        d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z"
                                        fill="#ede3d1"
                                        id="path17"
                                        style={{ fill: '#d2a679', fillOpacity: 1 }}
                                    />
                                    <path
                                        d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.39.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z"
                                        fill="#b5aa9a"
                                        id="path18"
                                        style={{ fill: '#2b343b', fillOpacity: 1 }}
                                    />
                                    </g>
                                    <g className="face">
                                        <rect
                                            x="73.99"
                                            y="48.26"
                                            width="61.54"
                                            height="80.49"
                                            rx="26.08"
                                            transform="rotate(180 104.76 88.5)"
                                            fill="#ede3d1"
                                            id="rect18"
                                            style={{ fill: '#d2a679', fillOpacity: 1 }} />
                                    <g className="inner-face">
                                        <path
                                            className="eyebrow-right"
                                            d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87"
                                            fill="none"
                                            stroke="#b5aa9a"
                                            strokeWidth="1.04"
                                            id="path19"
                                            style={{stroke:'#0c0a09', strokeOpacity:1 }} />
                                        <path
                                            className="eyebrow-left"
                                            d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76"
                                            fill="none"
                                            stroke="#b5aa9a"
                                            strokeWidth="1.04"
                                            id="path20"
                                            style={{fill: '#d2a679', fillOpacity:1, stroke:'#12100d', strokeOpacity:1}} />
                                        <path
                                            className="mouth"
                                            d="M97 107.52s7.06 4.62 14 1.59"
                                            fill="none"
                                            stroke="#b5aa9a"
                                            strokeWidth="1.04"
                                            id="path21"
                                            style={{fill:'#2b343b', fillOpacity:0.06374502, stroke:'#0d0b09', strokeOpacity:1}} />
                                        <g className="eyes">
                                            <path
                                                className="eye-left eye"
                                                d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                                                fill="#2b343b"
                                                id="path23" />
                                            <path
                                                className="eye-right eye"
                                                d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                                                fill="#2b343b"
                                                id="path24" />
                                            <path
                                                className="eye-right-2 eye"
                                                d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45"
                                                opacity="0"
                                                fill="none"
                                                stroke="#282828"
                                                strokeWidth="1.04"
                                                id="path25" />
                                            <path
                                                className="eye-left-2 eye"
                                                d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87"
                                                fill="none"
                                                opacity="0"
                                                stroke="#282828"
                                                strokeWidth="1.04"
                                                id="path26" />
                                        </g>
                                        <path
                                            className="nose"
                                            d="M102.39 98.13s3.09 1.55 5.78 0"
                                            fill="none"
                                            stroke="#e0d5c1"
                                            id="path29"
                                            style={{fill:'#2b343b', fillOpacity:1, stroke:'#090805', strokeOpacity:0.06772909}} />
                                        <path
                                            className="blush-left eye"
                                            d="M89.9 98.17a2.66 2.66 0 01-1.55-.93 3.73 3.73 0 01-.76-3.12 3 3 0 011-1.56 2 2 0 011.4-.42 3 3 0 012.5 2.72.76.76 0 010 .21 3.19 3.19 0 01.11.91 2.1 2.1 0 01-1.77 2.21 2.07 2.07 0 01-.93-.02zM89.34 96v-.05s-.04.05 0 .05z"
                                            fill="#efceb9"
                                            fillRule="evenodd"
                                            id="path31"
                                            style={{fill:'#fcb5f1', fillOpacity:1}} />
                                        <path
                                            className="blush-right eye"
                                            d="M118.93 98.19a2.09 2.09 0 01-1.77-2.19 3.58 3.58 0 01.1-.91v-.21a3 3 0 012.51-2.72 2 2 0 011.4.42 3 3 0 011 1.56 3.73 3.73 0 01-.76 3.12 2.66 2.66 0 01-1.55.93 2.08 2.08 0 01-.93 0zm1.53-2.2v.05c0 .05.05-.04 0-.04z"
                                            fill="#efceb9"
                                            fillRule="evenodd"
                                            id="path32"
                                            style={{fill:'#fcb5f1', fillOpacity:1}} />
                                    </g>
                                      <path
                                        className="hair-front"
                                        d="M 134.1,57.61 C 129.22,51.79 118,45 115.33,44.84 c -2.67,-0.16 -13,-1.87 -20.65,0 -7.65,1.87 -16,4.51 -18.77,8.26 -2.77,3.75 -6.17,18 -4.77,24.41 0,0 11.503944,-1.760935 15.84504,-3.404642 7.863316,-3.393834 13.28206,-8.69884 18.44736,-14.889629 5.36511,5.849131 5.32845,6.068125 14.86405,12.320982 3.024,1.476602 5.19014,2.569838 7.96414,3.599682 L 137.24,78.47 c 0,0 1.76,-15.04 -3.14,-20.86 z"
                                        fill="#77655a"
                                        id="path33"
                                        style={{fill:'#794627',fillOpacity:1}} />
                                    </g>
                                </g>
                                </g>
                            </svg>
                        
                        <div className="screen-log">transform: translate(0,0)</div>
                    </div>
                    
                    <div className="about-text">
                        <p> My name is Wafa Qazi. I am a recent graduate of 2021 from the University of Guelph, with a degree in Computer Science. I have 
                            great interest in full-stack development along with human computer interactions and UI/UX design.
                            My goal is to pursue this passion within the field of software development. 
                        </p>
                        <p>Here are some technologies I have been working with:</p>
                        <ul className="skills__list">
                            <li className="skills__list-item btn btn--plain">JavaScript ES6+</li>
                            <li className="skills__list-item btn btn--plain">Python</li>
                            <li className="skills__list-item btn btn--plain">Django</li>
                            <li className="skills__list-item btn btn--plain">C</li>
        
                        </ul>
                        <p>Here are some technologies I am currently learning:</p>
                        <ul className="skills__list">
                            <li className="skills__list-item btn btn--plain">React JS</li>
                            <li className="skills__list-item btn btn--plain">TypeScript</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Content>
    </Wrapper>
  )
}

About.propTypes = {
    image: PropTypes.string.isRequired
}

export default About