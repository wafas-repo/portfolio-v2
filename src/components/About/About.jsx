import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { ABOUT_INFO } from "../../information";
import PropTypes from 'prop-types';
import MyImage from '../../images/photo.jpeg'

import { Wrapper, Content, Button, Image} from "./About.styles";

const About = () => {

  const { name, role, resume, social } = ABOUT_INFO

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
                        aria-label='github'
                        className='link link--icon'
                    >
                        <FaGithub />
                    </a>
                    )}

                    {social.linkedin && (
                    <a
                        href={social.linkedin}
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
                            <a href={resume}>
                                
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
                    <Image src={MyImage} />
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