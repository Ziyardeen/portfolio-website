import styled from "styled-components";

import ziyavidendImg from '../../public/projects/ziyavidend.png';
import ziynewsImg from '../../public/projects/nc-news-fullStack.png';
import cryptoPhetchImg from '../../public/projects/cryptoPhetch.png';

const PortfolioSection = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const ProjectImage = styled.img`
width:100%;
`
const PortfolioHeading = styled.h2`
width:100%;
background-color: lightcoral;
`
const ProjectsDiv = styled.div`
padding-right:10px;
margin-right:10px;
  display:grid;
 grid-template-columns:repeat(3,1fr);

 @media (max-width:550px){
  display:flex;
  flex-direction:column;
  align-items:center;
 }
`

const ProjectThumbnail = styled.div`
margin:0 0 5px 5px;
background-color: var(--background-color);

transition:ease-in-out, 0.2s;
   padding: 10px;
   box-shadow: 0 4px 8px rgba(0,0,0,0.1);
   &:hover{
    box-shadow: 0 4px 8px rgb(44, 4, 247);
   }

  @media (max-width:550px){
  width:200px;
 }
`
const Portfolio = () => {
    const projects = [
        {
          title: 'Ziyavidend',
          description: ' It analyses your stock portfolio, estimates your remaining yearly dividend payment for each stock, provides a total dividend estimation and generates detailed financial reports for each dividend stock using the Gemini API.',
          image: ziyavidendImg,
          link: 'https://ziyaditron.netlify.app'
        },
        {
          title: 'nc-News-FullStack-App',
          description: 'It allows users to select a username, view news articles, upvote or downvote articles, comment on articles, and delete comments they have posted.',
          image: ziynewsImg,
          link: 'https://ziyncnews.netlify.app'
        },
        {
          title: 'cryptoPhetch',
          description: "It is a simple web app that gets a cryptocurrency's price by receiving its name.",
          image:cryptoPhetchImg,
          link: 'https://crypto-phetch.netlify.app'
        },
      ];

    return (
      <PortfolioSection id="portfolio" className="portfolio">
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
      </PortfolioSection>
    );
  }
  

export default Portfolio;
