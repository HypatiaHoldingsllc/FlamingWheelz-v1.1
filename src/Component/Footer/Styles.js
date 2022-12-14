import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Container = styled.section`
  color: white;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const StyledFooter = styled.footer`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: auto;
`;



export const FooterContainer = styled.div`
    color: white;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;


  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }

 
`;

// Join the Community
export const JoinCommunity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 900px) {
    flex-flow: column;
    justify-content: left;
    margin-bottom: 0;
  }
`;

export const JoinUsHeading = styled.h2`
  color: white;
  font-size: 3rem;
  text-align: left;
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const JoinUsText = styled.p`
  text-align: left;
  width: 500px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: white;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 20px;
    font-size: 0.9rem;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const StyledSocialLink = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;


export const SocialLinkCon = styled.div``;



// Under
export const FooterUnder = styled.div`
  
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;

  @media screen and (max-width: 765px) {
    display: flex;
    flex-flow: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const Hr = styled.hr`
  padding: 0 20px;
  margin-top: 4rem;
  opacity: 0.5;
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 420px) {
    margin-top: 2rem;
  }
`;

export const Copyright = styled.div`
  color: lightgrey;
  font-size: 80%;
`;

export const Allrightreserved = styled.div`
  font-size: 80%;
  color: lightgrey;
  display: flex;
  gap: 10px;
`;


export const Links = styled(Link)`
  color: lightgrey;
  `