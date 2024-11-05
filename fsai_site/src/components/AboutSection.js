// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const AboutSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  return (
    <SectionWrapper>
      <SectionContent style={fadeIn}>
        <h2>About Us</h2>
        <p>
          Our team is dedicated to pushing the boundaries of AI and autonomous
          technology. With a focus on innovation, we aim to build a vehicle that
          showcases the potential of AI in real-world applications.
        </p>
      </SectionContent>
    </SectionWrapper>
  );
};

export default AboutSection;

const SectionWrapper = styled.section`
  background-color: #2f4f4f; /* Green background */
  color: #ffffff; /* White text */
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  text-align: center;
`;


const SectionContent = styled(animated.div)`
  max-width: 800px;

  h2 {
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #ffffff;
    line-height: 1.6;
  }
`;