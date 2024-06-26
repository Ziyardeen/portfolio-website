import styled from "styled-components";
const ProjectImage = styled.img`
width:100%;
`
const PortfolioHeading = styled.h2`
width:100%;
  background-color: lightcoral;
`
const ProjectsDiv = styled.div`
  display:grid;
 grid-template-columns:repeat(3,1fr);
`

const ProjectThumbnail = styled.div`
margin:0 0 5px 5px;
background-color:white;
transition:ease-in-out, 0.2s;
   padding: 10px;
   box-shadow: 0 4px 8px rgba(0,0,0,0.1);
   &:hover{
    box-shadow: 0 4px 8px rgb(44, 4, 247);
   }
`
const Portfolio = () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'Description of Project 1',
          image: '/project.jpg',
          link: 'https://example.com/project1'
        },
        {
          title: 'Project 2',
          description: 'Description of Project 2',
          image: '/project.jpg',
          link: 'https://example.com/project2'
        },
        {
          title: 'Project 3',
          description: 'Description of Project 3',
          image: '/project.jpg',
          link: 'https://example.com/project3'
        },
        {
          title: 'Project 3',
          description: 'Description of Project 3',
          image: '/project.jpg',
          link: 'https://example.com/project3'
        },
       
      ];

    return (
      <section id="portfolio" className="portfolio">
        <PortfolioHeading>Portfolio</PortfolioHeading>
        <ProjectsDiv className="projects">
          {projects.map((project, index) => (
            <ProjectThumbnail className="project-thumbnail" key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </ProjectThumbnail>
          ))}
        </ProjectsDiv>
      </section>
    );
  }
  

export default Portfolio;
