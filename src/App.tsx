

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import styled from 'styled-components';

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x:hidden;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const ViewWork = styled.button`
color:blue;
    margin:0 0 20px 0;
    background-color: greenyellow;
    transition: 0.1s ease-out;
    &:hover{

        outline: 2px solid;
    }

`
const GetInTouch = styled.button`
background-color: #ff7f2f;
transition:0.1s ease-in-out;
&:hover{
    outline:2px solid;
}
`
const Profession = styled.h1`
    color: rgb(46, 39, 31);
    font-size:2.2rem;
`

const App = () => {
  return (
    <RootDiv className="app">
      <Header />
      <Main>
        <HeroSection className="hero">
          <h1>Ziyardeen Alhassan</h1>
          <Profession >Software Engineer</Profession >
          <a href="https://github.com/Ziyardeen" target='blank'><ViewWork>VIEW MY WORK</ViewWork></a>
          <a href="mailto:ziyardeena@yahoo.com"><GetInTouch >GET IN TOUCH</GetInTouch></a>
        </HeroSection>
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </Main>
      <Footer />
    </RootDiv>
  );
}

export default App;
