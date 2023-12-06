import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdAutoDelete } from "react-icons/md";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => (props.type === "warning" ? "#fff" : "#000")};
  background-color: ${(props) => {
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
    background-color: ${(props) => {
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
  top: 40%;
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
  padding: 1rem;
  width: 100%;
  max-width: 28rem;
  height: 100%;
  left: 6rem;
`;

const ModalBox = styled.div`
  position: relative;
  padding: 1rem;
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

  const getIcon = () => {
    switch (type) {
      case "warning":
        return <MdAutoDelete className="text-white" />;
      case "success":
        return <span>Custom Success Icon</span>; // Add your custom success icon here
      case "info":
        return <FiEdit className="text-white" />;
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
            type="button"
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
                <div>
                  <button onClick={toggleModal}>No, cancel</button>
                  <button type="submit" onClick={handleConfirm}>
                    Yes, I'm sure
                  </button>
                </div>
              </ModalBox>
            </ModalContent>
          </ModalContainer>
        )}
      </div>
    </div>
  );
};

export default ConfirmActionButton;

