
import styled from 'styled-components';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  width:100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin: 0;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 10px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;

  &:hover {
    color: #1da1f2; 
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section className="quick-links">
          <SectionTitle>Quick Links</SectionTitle>
          <List>
            <ListItem><Link href="#about">About</Link></ListItem>
            <ListItem><Link href="#portfolio">Portfolio</Link></ListItem>
            <ListItem><Link href="#contact">Contact</Link></ListItem>
            <ListItem><Link href="#blog">Blog</Link></ListItem>
          </List>
        </Section>
        <Section className="social-media-icons">
          <SectionTitle>Follow Me</SectionTitle>
          <div>
            <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></IconLink>
            <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></IconLink>
            <IconLink href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></IconLink>
            <IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></IconLink>
          </div>
        </Section>
      </FooterContent>
      <FooterBottom>
        <p>© 2024 Ziyardeen. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
