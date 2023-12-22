"use client"
import React from 'react';
import Link from "next/link";
import styled from "@emotion/styled";


const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a202c; 
  color: #ffffff; 
`;

const Container = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 28rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-weight: 800;
  font-size: 5.625rem;
  color: #4a5568; /* Dark mode text color */
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #cbd5e0; 
`;

const StyledLink = styled(Link)`
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  background-color: #7f9cf5; 
  color: #ffffff;
  text-decoration: none;
`;

const Page = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>
            <span className="sr-only">Error</span>404
          </Title>
          <Subtitle>Sorry, we couldn't find this page.</Subtitle>
          <Description>But don't worry, you can find plenty of other things on our homepage.</Description>
          <StyledLink href="/">Back to homepage</StyledLink>
        </Content>
      </Container>
    </Section>
  );
};

export default Page;
