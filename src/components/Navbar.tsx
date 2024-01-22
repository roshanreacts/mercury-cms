"use client";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";
import styled from "@emotion/styled";
import { clearTokenCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;

const ProfileDiv = styled.div`
  padding: 7px;
  border-radius: 100%;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Navbar = () => {
  const router = useRouter();
  const handleLogOut = () => {
    clearTokenCookie();
    router.replace("/admin/login");
  };
  return (
    <MainDiv>
      <Image
        src="https://res.cloudinary.com/dagmm478n/image/upload/v1701852568/mercury-cms/mercury-logo_eyfwy6.png"
        alt="logo"
        width={170}
        height={170}
        layout="intrinsic" // or layout="intrinsic"
      />

      <ProfileDiv>
        <CgProfile style={{ fontSize: "30px" }} />
      </ProfileDiv>
      <div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </MainDiv>
  );
};

export default Navbar;
