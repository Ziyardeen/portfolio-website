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
          <ProfilePic src="/website-profile-pic.png" alt="Profile" />
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
            When not coding, I enjoy gaming for analytical engagement with titles like Fallout and Call of Duty Mobile, and reading finance-focused self-help books such as "Money" by Laura Whateley to improve my financial management
            </Paragragh>
          </Container>
        </Container>
      </AboutSection >
    );
  }
  
  export default About;
  