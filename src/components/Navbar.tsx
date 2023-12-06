"use client"
import Image from 'next/image';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import styled from '@emotion/styled';

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;

const ProfileDiv = styled.div`
    padding: 7px;
    border-radius: 100%;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;  
`

const Navbar = () => {
  return (
    <MainDiv>
      <Image
        src="https://res.cloudinary.com/dagmm478n/image/upload/v1696575035/vithi/aucff76kntvla4dwbbbi.png"
        alt="logo"
        width={80}
        height={40}
      />
      <ProfileDiv >
        <CgProfile style={{ fontSize: '30px' }} />
      </ProfileDiv>
    </MainDiv>
  );
};

export default Navbar;
