import styled from "styled-components";
    const AboutTitle = styled.h2`
    width:100%;
    background-color: lightcoral;
    color:black;
    `
    const AboutHeading = styled.h3`
        color:black;
    `
    const ProfilePic = styled.img`
        width:60%;
        border-radius:9px;
       
    `
    const Paragragh = styled.p`
        color:black;
    `

    const Container = styled.div`
        
    `
    const AboutSection = styled.section`
       
       width:70%;
    `
const About = () => {

    return (
      <AboutSection  id="about" className="about">
        <AboutTitle>About Me</AboutTitle>
        <Container className="profile">
          <ProfilePic src="../../public/website-profile-pic.png" alt="Profile" />
          <Container className="bio">
            <AboutHeading >Introduction</AboutHeading >
            <Paragragh>
            I am a passionate and dedicated software developer with a strong foundation in web development. My journey into coding started with a fascination for computer games and solving complex problems. I specialize in JavaScript and its frameworks like React and Node.js. I enjoy learning new technologies to enhance my skillset and adapt to the fast-changing software engineering industry.
            </Paragragh>
            <AboutHeading >Coding Philosophy</AboutHeading >
            <Paragragh>
            I believe in the power of combining clean, efficient code with intuitive design to create seamless user experiences. My approach to coding involves constant learning and adaptation, ensuring that I stay ahead of the curve in the ever-evolving tech landscape. I am committed to writing maintainable and scalable code that not only meets current requirements but is also future-proof.
            </Paragragh>
            <AboutHeading >Interests</AboutHeading >
            <Paragragh>
            When I'm not coding, you can find me:<br />
            <strong>Gaming:</strong> Engaging in games like Fallout and Call of Duty Mobile, which help me stay analytical and entertained. <br />
            <strong>Reading:</strong> Exploring self-help books on finance to gain new ideas and manage my finances better, with recent reads like "Money" by Laura Whateley.<br />
            <strong>Stock Market Analysis:</strong> Conducting technical and fundamental analysis of stocks to make informed investment decisions, particularly in companies like Alphabet, Meta, and Amazon.<br />
            </Paragragh>
          </Container>
        </Container>
      </AboutSection >
    );
  }
  
  export default About;
  