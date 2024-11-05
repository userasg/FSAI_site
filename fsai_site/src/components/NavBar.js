// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // Adjust this value based on the scroll point where you want the navbar to become fixed
      setIsFixed(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavWrapper className={isFixed ? 'fixed' : ''}>
      <Logo>FSAI</Logo>
      <NavLinks>
        <a href="#pathfinders">Pathfinders</a>
        <a href="#business">Business</a>
        <a href="#perception">Perception</a>
        <a href="#control">Control</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  --navbar-height: 80px;
  width: 100%;
  padding: 10px 5vw; /* Responsive padding to adapt based on viewport width */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f4f4f;
  color: #ffffff;
  z-index: 10;
  transition: position 0.3s ease;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px 3vw; /* Adjust padding for smaller screens */
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    color: #ffffff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
