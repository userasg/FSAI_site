// src/components/HeroSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import InterestFormModal from './InterestFormModal'; // Import the modal component

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <HeroWrapper>
      <VideoBackground autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </VideoBackground>
      <Overlay />
      <HeroContent>
        <animated.h1 style={textAnimation}>
          Formula Student: Artificial Intelligence
        </animated.h1>
        <animated.h2 style={textAnimation}>
          Partner with us to drive innovation in AI and autonomous vehicles.
        </animated.h2>
        <RegisterButton onClick={handleRegisterClick}>Register Interest</RegisterButton>
        {isModalOpen && <InterestFormModal closeModal={() => setIsModalOpen(false)} />}
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroWrapper = styled.section`
  --navbar-height: 80px;
  position: relative;
  padding-top: var(--navbar-height); /* Ensure HeroSection starts below the NavBar */
  height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: calc(var(--navbar-height) - 20px);
    height: calc(100vh - (var(--navbar-height) - 20px));
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    margin-top: 10px;
    color: #ffd700;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const CallToAction = styled.a`
  display: inline-block;
  margin-top: 3vh;
  padding: 1vh 2vw;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #4a3621;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #593d2f;
  }
`
const RegisterButton = styled.button`
  margin-top: 3vh;
  padding: 1vh 2vw;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #4a3621;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #593d2f;
  }
`;

;
