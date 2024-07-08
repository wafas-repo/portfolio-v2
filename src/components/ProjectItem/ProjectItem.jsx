import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import uniqid from 'uniqid'


import { Wrapper, Content } from './ProjectItem.styles';

const ProjectItem = ({ project }) => {
    
  return (
    <Wrapper>
        <Content>
        <div>
            

            <h3>{project.name}</h3>

            <p className='project__description'>{project.description}</p>
            {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                    {item}
                </li>
                ))}
            </ul>
            )}

            {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <FaGithub />
            </a>
            )}

            {project.livePreview && (
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <MdLaunch />
            </a>
            )}
        </div>  
        </Content>
    </Wrapper>
    
  )
}

ProjectItem.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    sourceCode: PropTypes.string.isRequired,
    livePreview: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem