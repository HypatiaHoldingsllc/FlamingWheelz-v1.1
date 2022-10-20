import styled from 'styled-components';
import FlamingIMG from '../../Image/About_Page/About_Flaming.jpg';
import HypatiaIMG from '../../Image/About_Page/Hypatia.jpg';

export const StyledAbout = styled.main`
  margin: auto;
`;

// About FlamingWheelz
export const FlamingContainer = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  height: 120vh;

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 100vh;
  }
`;

export const FlamingSectionbg = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(11, 13, 23, 0.5),
      rgba(11, 13, 23, 0.9),
      rgba(11, 13, 23, 20)
    ),
    url(${FlamingIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const FlamingContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const FlamingTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-flow: column;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FlamingHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FlamingText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FlamingbtnContainer = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 30px;
`;
// End of FlamingWheelz

// Hypatia Games
export const HypatiaContainer = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 90vh;
  }
`;

export const HypatiaSectionbg = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(11, 13, 23, 0),
      rgba(11, 13, 23, 10),
      rgba(11, 13, 23, 100)
    ),
    url(${HypatiaIMG});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #0b0d17;
  background-position: right;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const HypatiaContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const HypatiaTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-flow: column;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HypatiaHeadingh3 = styled.h3`
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const HypatiaHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HypatiaText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Flaming Features

export const FlamingFeatureContainer = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  height: 110vh;

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 100vh;
  }
`;

export const FeatureSectionbg = styled.div`
  /* background-image: linear-gradient( to right, rgba(11,13,23,0), rgba(11,13,23,100)), url() ; */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const FeatureContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const FeatureTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-flow: column;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FeatureHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeatureText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FeatureLists = styled.li`
  list-style-type: square;
  margin-left: 20px;
  margin-top: 10px;
`;
// End of Features

// HGT Token
export const HGTContainer = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  height: 120vh;
  background-color: black;

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 110vh;
  }
`;
export const HGTSectionbg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const HGTImg = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
  border-style: none;
  object-fit: cover;
  object-position: center;
`;
export const HGTSectionOverlay = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const HGTContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const HGTTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-flow: column;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HGTHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #fff;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HGTText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

// End of HGT Token

// The Team
export const StyledTeam = styled.div`
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
  }
`;

export const TeamContainer = styled.div``;

export const TeamListCon = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
  margin-bottom: 40px;
`;

export const TeamHeadingCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;
export const TeamHeadingh3 = styled.h3`
  color: white;
  font-size: 1.5rem;
`;
