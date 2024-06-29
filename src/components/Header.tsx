
import styled from 'styled-components'
import DarkmodeBtn from './DarkmodeBtn'

const Logo = styled.img`
width:20%;

height:100px;
border-radius:15px;
margin:10px;

@media (max-width: 768px) {
    width:20%;
    margin:20px 0;
  }
    
`

const HeaderContainer = styled.header`
    height:250px;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    background-color: rgba(13, 12, 12, 0.6);

    @media (max-width: 768px) {
    flex-direction: column;
    height: auto;  // Adjust height for smaller screens
  }
`
const Nav = styled.nav`
    width: 60%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center; 

    @media (max-width: 768px) {
    margin:20px 20px;
    width:90%;
  }
   

   
`



const NavLink = styled.a`
    color:black;
    margin:5px;
    
    &:hover{
      
    color: var(--text-color);
    }
    
`

const Header = () => {
  return (
    <HeaderContainer>
        <Logo src='/ziyaditron-logo/svg/logo-no-background.svg'/>
        <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <DarkmodeBtn />
    </HeaderContainer>
  )
}

export default Header