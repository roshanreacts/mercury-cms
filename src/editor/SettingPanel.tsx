"use client";
import { useEditor } from "@craftjs/core";
import React from "react";
import styled from '@emotion/styled';
import StyledBox from "@/components/Atoms/StyledBox";
import { StyledText } from "@/components/Atoms/StyledText";

const SettingsContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #f4f4f4;
  background: white;
`;

const TopLabel = styled.p`
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const SelectedInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > div {
    flex: 1;
  }

  p {
    margin: 0;
  }
`;

const DeleteButton = styled.button`
  background-color: #e53e3e;
  color: #fff;
  padding: 8px 17px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c53030;
  }
`;

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data?.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return (
    <div>
      <TopLabel>Settings Panel</TopLabel>
      {isEnabled && selected ? (
        <SettingsContainer>
          <SelectedInfo>
            <StyledBox>
              <StyledText weight="large">{selected?.name}</StyledText>
            </StyledBox>
          </SelectedInfo>
          <StyledBox data-cy="settings-panel">
            {selected.settings && React.createElement(selected.settings)}
          </StyledBox>

          {selected.isDeletable ? (
            <DeleteButton
              onClick={() => {
                actions.delete(selected.id);
              }}
            >
              Delete
            </DeleteButton>
          ) : null}
        </SettingsContainer>
      ) : null}
    </div>
  );
};
