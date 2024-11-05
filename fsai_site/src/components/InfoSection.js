// src/components/InfoSection.js
import React from 'react';
import styled from 'styled-components';

const InfoSection = () => {
  return (
    <SectionWrapper>
      <SectionContent>
        <h2>Why Sponsor Us?</h2>
        <p>
          As a sponsor, you’ll have the unique opportunity to showcase your brand
          on our AI-driven vehicle and across our platforms, reaching audiences
          at Formula Student competitions, industry events, and media appearances.
        </p>
        <FeatureList>
          <FeatureItem>
            <h3>Brand Visibility</h3>
            <p>Display your logo on our vehicle, team uniforms, and digital platforms.</p>
          </FeatureItem>
          <FeatureItem>
            <h3>Media Exposure</h3>
            <p>Our team attracts media attention, putting your brand in the spotlight.</p>
          </FeatureItem>
          <FeatureItem>
            <h3>Access to Talent</h3>
            <p>Connect with skilled AI and engineering students for recruitment opportunities.</p>
          </FeatureItem>
        </FeatureList>
      </SectionContent>
    </SectionWrapper>
  );
};

export default InfoSection;

const SectionWrapper = styled.section`
  background-color: #f7f7f7;
  padding: 60px 20px;
  text-align: center;
`;

const SectionContent = styled.div`
  max-width: 800px;
  margin: auto;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
  }
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  flex: 1 1 250px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #4a3621; /* Dark brown border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #2f4f4f; /* Green text */
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;
