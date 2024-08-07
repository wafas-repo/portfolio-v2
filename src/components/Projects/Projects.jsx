import { PROJECTS as projects } from '../../information'
import { Wrapper, Content } from './Projects.styles'
import ProjectItem from '../ProjectItem/ProjectItem'
import uniqid from 'uniqid'

// import TestCarousel from '../TestCousel/TestCarousel'
import ProjectCarousel from '../Carousel/ProjectCarousel'

const Projects = () => {
if (!projects.length) return null
  return (
    <Wrapper>
        <Content>
            <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>
            <ProjectCarousel project={projects} />
            <div className='projects__grid'>
                {projects.map((project) => (
                    <div className='project'  key={uniqid()} >
                        <ProjectItem project={project} />
                    </div>
                ))}
            </div>
            </section>
        </Content>
    </Wrapper>
  )
}

export default Projects