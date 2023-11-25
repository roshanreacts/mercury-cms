"use client";
import { useEditor } from "@craftjs/core";
import React from "react";
import Text from "@/components/Text";

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
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

  return isEnabled && selected ? (
    <div
      style={{
        padding: "20px",
        border: "1px solid #f4f4f4",
        background: "lightgrey",
      }}
    >
      <div>
        <div>
          <div>
            <div>
              <div>
                <p>Selected</p>
              </div>
              <div>
                <p data-cy="chip-selected">{selected.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          // @ts-ignore
          <button
            // variant="contained"
            // color="default"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ) : null;
};
