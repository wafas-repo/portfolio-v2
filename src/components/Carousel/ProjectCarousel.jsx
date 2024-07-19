/* eslint-disable react/prop-types */

import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import './ProjectCarousel.css'

const ProjectCarousel = ({ project }) => {
  return (
    <Carousel>
      {project.slice(0,3).map((project, index) => (
        <Carousel.Item key={index} interval={5000}>
          <img
            className="d-block w-100"
            src={project.image}
            alt={`${project.name} slide`}
          />
          <Carousel.Caption>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="techStack">
              {project.stack.join(', ')}
            </p>
            <span className="external-links">
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <FaGithub />
            </a>
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <MdLaunch />
            </a>

            
          </span>
          
          </Carousel.Caption>

        </Carousel.Item>
      ))}
    </Carousel>
  );
}

ProjectCarousel.propTypes = {
  project: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stack: PropTypes.arrayOf(PropTypes.string).isRequired,
      sourceCode: PropTypes.string,
      livePreview: PropTypes.string,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectCarousel;