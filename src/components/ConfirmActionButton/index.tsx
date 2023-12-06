import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdAutoDelete } from "react-icons/md";
import styled from "@emotion/styled";

const CustomButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  background-color: #dc2626; /* Red color, you can adjust this */
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 2rem 0.5rem
  transition: background-color 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    background-color: #c53030; /* Darker shade of red for hover */
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(209, 213, 219, 0.5); /* Adjust the focus color as needed */
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${(props: any) => (props.type === "warning" ? "#fff" : "#000")};
  background-color: ${(props: any) => {
    switch (props.type) {
      case "warning":
        return "red";
      case "success":
        return "green";
      case "info":
        return "blue";
      default:
        return "red";
    }
  }};
  &:hover {
    background-color: ${(props: any) => {
    switch (props.type) {
      case "warning":
        return "#ff4444";
      case "success":
        return "#4caf50";
      case "info":
        return "#2196f3";
      default:
        return "#ff4444";
    }
  }};
  }
`;

const ModalContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 30%;
  right: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const ModalContent = styled.div`
  position: relative;
  padding: 5rem;
  width: 100%;
  max-width: 28rem;
  height: 100%;
  left: 6rem;
`;

const ModalBox = styled.div`
  position: relative;
  padding: 2rem;
  text-align: center;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 0 0.25rem 0.125rem rgba(0, 0, 0, 0.1);
`;

const ConfirmActionButton = ({ action, para, onConfirm, type }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleConfirm = () => {
    toggleModal();
    onConfirm();
  };

  const CustomMdAutoDelete = styled(MdAutoDelete)`
  color: black;
  width: 2.5rem;
  height: 2.5rem;
`;

const CustomFiEdit = styled(FiEdit)`
  color: black;
  width: 2.5rem;
  height: 2.5rem;
`;
  const getIcon = () => {
    switch (type) {
      case "warning":
        return <CustomMdAutoDelete/>;
      case "success":
        return <span>Custom Success Icon</span>; // Add your custom success icon here
      case "info":
        return <CustomFiEdit/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div>
          <StyledButton
            id="deleteButton"
            onClick={toggleModal}
            type={type}
          >
            {action}
          </StyledButton>
        </div>

        {isModalOpen && (
          <ModalContainer id="deleteModal">
            <ModalContent>
              <ModalBox >
                {getIcon()}
                <p>
                  {` ${para}  ${action}?`}
                </p>
                <CustomButton onClick={toggleModal} type={type}>No, cancel</CustomButton>
                <CustomButton style={{ backgroundColor: 'blue' }} type={type} onClick={handleConfirm}>
                  Yes, I'm sure
                </CustomButton>

              </ModalBox>
            </ModalContent>
          </ModalContainer>
        )}
      </div>
    </div>
  );
};

export default ConfirmActionButton;

