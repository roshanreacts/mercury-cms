"use client"
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useLazyQuery } from '@/containers/hooks';
import { serverFetch } from '@/app/action';
import { GET_ALL_PAGES } from '@/utils/queries';
import { ToastContainer } from 'react-toastify'
import { ToastErrorMessage } from './ToastMessage';
import { formatDate } from '@/utils/methods';
import { DotLoader } from 'react-spinners';
import StyledBox from './Atoms/StyledBox';

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
  background-color: #007bea;
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



const AllPagesDashboard = () => {
    const [getAllPages, { data, loading, error }] = useLazyQuery(serverFetch)

    useEffect(() => {
        getAllPages(
            GET_ALL_PAGES,
            {},
            {
                cache: 'no-store'
            }
        )
    }, [])

    useEffect(() => {
        if (error) {
            ToastErrorMessage(error.message)
        }
    }, [data, loading, error])

    return (
        <MainDiv>
            <ToastContainer />
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
                        loading ?
                            <StyledBox display='flex' justifyContent='center' alignItems='center' mt='10px'>
                                <DotLoader color="#007bea" />
                            </StyledBox>
                            :
                            data?.listPages?.docs?.map((item: any, index: any) =>
                                <tr key={index} >
                                    <Td>{item.name}</Td>
                                    <Td>{item.slug}</Td>
                                    <Td>{item.metaTitle}</Td>
                                    <Td>{item.metaDescription}</Td>
                                    <Td>{item.path}</Td>
                                    <Td>{item.status}</Td>
                                    <Td>{item.version}</Td>
                                    <Td>{formatDate(item.createdOn)}</Td>
                                    <Td>{formatDate(item.updatedOn)}</Td>
                                    <Td>
                                        <Link href={`/admin/${item.id}`}>
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
