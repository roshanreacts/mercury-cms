"use client"
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const MainDiv = styled.div`
  background-color: white;
  min-height: 90vh;
  padding: 20px 30px;
`;

const Heading = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 4px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-x: scroll;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd; 
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
`;


const dummyData = [
    { id: "page1", Name: 'Title 1', Slug: 'slug-1', MetaTitle: 'Meta Title 1', MetaDescription: 'Meta Desc 1', Path: '/path-1', Status: 'Active', Version: '1.0', CreatedOn: '2023-01-01', UpdatedOn: '2023-01-02' },
    { id: "page2", Name: 'Title 2', Slug: 'slug-2', MetaTitle: 'Meta Title 2', MetaDescription: 'Meta Desc 2', Path: '/path-2', Status: 'Inactive', Version: '2.0', CreatedOn: '2023-02-01', UpdatedOn: '2023-02-02' },
    { id: "page3", Name: 'Title 3', Slug: 'slug-3', MetaTitle: 'Meta Title 3', MetaDescription: 'Meta Desc 3', Path: '/path-3', Status: 'Active', Version: '1.1', CreatedOn: '2023-03-01', UpdatedOn: '2023-03-02' },
    { id: "page4", Name: 'Title 4', Slug: 'slug-4', MetaTitle: 'Meta Title 4', MetaDescription: 'Meta Desc 4', Path: '/path-4', Status: 'Inactive', Version: '2.1', CreatedOn: '2023-04-01', UpdatedOn: '2023-04-02' },
    { id: "page5", Name: 'Title 5', Slug: 'slug-5', MetaTitle: 'Meta Title 5', MetaDescription: 'Meta Desc 5', Path: '/path-5', Status: 'Active', Version: '1.2', CreatedOn: '2023-05-01', UpdatedOn: '2023-05-02' },
];
const AllPagesDashboard = () => {
    return (
        <MainDiv>
            <Heading>Pages</Heading>

            <Table>
                <thead>
                    <tr>
                        <Th>Name</Th>
                        <Th>Slug</Th>
                        <Th>Meta Title</Th>
                        <Th>Meta Description</Th>
                        <Th>Path</Th>
                        <Th>Status</Th>
                        <Th>Version</Th>
                        <Th>Created On</Th>
                        <Th>Updated On</Th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        dummyData.map((data, index) =>
                            <tr key={index} >
                                <Td>{data.Name}</Td>
                                <Td>{data.Slug}</Td>
                                <Td>{data.MetaTitle}</Td>
                                <Td>{data.MetaDescription}</Td>
                                <Td>{data.Path}</Td>
                                <Td>{data.Status}</Td>
                                <Td>{data.Version}</Td>
                                <Td>{data.CreatedOn}</Td>
                                <Td>{data.UpdatedOn}</Td>
                                <Td>
                                    <Link href={`/${data.id}`}>
                                        <EditButton>Edit</EditButton>
                                    </Link>
                                </Td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </MainDiv>
    );
};

export default AllPagesDashboard;
