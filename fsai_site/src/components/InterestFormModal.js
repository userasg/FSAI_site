// src/components/InterestFormModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import supabase from '../supabase';

const InterestFormModal = ({ closeModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('Users')
        .insert([{ firstName, lastName, email, phoneNumber }]);

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      setError('Failed to register. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {isSubmitted ? (
          <p>Thank you for registering your interest!</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <h2>Register Your Interest</h2>
            <p>Enter your information below, and we’ll be in touch.</p>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
            />
            {isLoading ? (
              <LoadingMessage>Submitting...</LoadingMessage>
            ) : (
              <SubmitButton type="submit">Confirm</SubmitButton>
            )}
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Form>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default InterestFormModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 450px;
  width: 100%;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 20px;
    color: #4a3621;
  }

  p {
    font-size: 1.1rem;
    color: #4a3621;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  max-width: 350px;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a3621;
  }
`;

const SubmitButton = styled.button`
  width: 90%;
  max-width: 350px;
  padding: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #4a3621;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #593d2f;
  }
`;

const LoadingMessage = styled.p`
  color: #4a3621;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: #d9534f;
  margin-top: 10px;
`;
