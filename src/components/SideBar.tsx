"use client"
import React, { useState } from 'react'
import styled from '@emotion/styled';
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const MainDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 8px 40px;
flex-direction: column
`;

const DashboardCard = styled.div`
display: flex;
justify-content: center;
padding: 10px 20px;
background-color: #F2F2F2;
border-radius: 5px;
align-items: center;
cursor: pointer;
`;

const PagesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:  flex-start;
margin: 10px;
`;

const SubTitles = styled.p`
font-size: 14px;
margin: 4px;
cursor: pointer;
margin-top:5px;
padding: 5px;

&:hover {
    background-color: #F2F2F2;

}

`
const SideBar = () => {
    const router = useRouter();
    // const [currentTab, setCuurentTab] = useState("allPages");
    return (
        <MainDiv>
            <DashboardCard>
                <div style={{
                    fontSize: "16px",
                    fontWeight: "700",
                }}>
                    Dashboard
                </div>
                <span style={{
                    marginLeft: "3px",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <FaAngleRight />

                </span>
            </DashboardCard>
            <PagesCard>
                <h4 style={{
                    opacity: "0.5",
                    fontWeight: '400',
                    fontSize: "14px",
                    padding: "0px"
                }}>Page Management</h4>

                <div style={{
                    marginLeft: "3px",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <SubTitles onClick={() => {
                        // setCuurentTab("allPages")
                        router.push('/admin')

                    }}>
                        All Pages
                    </SubTitles>
                    <SubTitles onClick={() => {
                        // setCuurentTab("addPage")
                        router.push('/admin/add')

                    }}>
                        Create Page
                    </SubTitles>

                </div>


                <h4 style={{
                    opacity: "0.5",
                    fontWeight: '400',
                    fontSize: "14px",
                    padding: "0px"
                }}>Media</h4>

                <div style={{
                    marginLeft: "3px",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <SubTitles onClick={() => {
                        // setCuurentTab("allPages")
                        router.replace('/admin/media')

                    }}>
                        Files
                    </SubTitles>
                </div>

            </PagesCard>
        </MainDiv>
    )
}

export default SideBar
