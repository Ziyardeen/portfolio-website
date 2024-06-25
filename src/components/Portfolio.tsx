import styled from "styled-components";
const ProjectImage = styled.img`
width:40%;
`
const PortfolioHeading = styled.h2`
width:100%;
  background-color: lightcoral;
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
        }
      ];

     
      
    return (
      <section id="portfolio" className="portfolio">
        <PortfolioHeading>Portfolio</PortfolioHeading>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-thumbnail" key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

export default Portfolio;
