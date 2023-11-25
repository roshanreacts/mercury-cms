"use client";
import { useEditor, Element } from "@craftjs/core";
import React from "react";

import { Button } from "../components/Button";
import Text from "../components/Text";
import Box from "../components/Box";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div>
      <div>
        <div>
          <p>Drag to add</p>
        </div>
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            // variant="contained"
            data-cy="toolbox-button"
          >
            Button
          </button>
        </div>
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Text text={"Hi"} fontSize="20px" />)
            }
            // variant="contained"
            data-cy="toolbox-button"
          >
            Text
          </button>
        </div>
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Element canvas is={Box} p="20px" />)
            }
            data-cy="toolbox-container"
          >
            Box
          </button>
        </div>
      </div>
    </div>
  );
};
