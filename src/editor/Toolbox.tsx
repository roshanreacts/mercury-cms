"use client";
import { useEditor, Element } from "@craftjs/core";
import React from "react";

import { Button } from "../components/Button";
import Text from "../components/Text";
import Box from "../components/Box";
import TextArea from "@/components/Textarea";
import Dropdown from "@/components/Dropdown";
import List from "@/components/List";
import Input from "@/components/Input";

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
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Element canvas is={TextArea} p="20px" />)
            }
            data-cy="toolbox-container"
          >
            TextArea
          </button>
        </div>
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Element canvas is={Dropdown} p="20px" />)
            }
            data-cy="toolbox-container"
          >
            Drop down
          </button>
        </div>
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Element canvas is={List} p="20px" />)
            }
            data-cy="toolbox-container"
          >
            List
          </button>
        </div>
        <div>
          <button
            ref={(ref: any) =>
              connectors.create(ref, <Element canvas is={Input} p="20px" />)
            }
            data-cy="toolbox-container"
          >
            Input
          </button>
        </div>
      </div>
    </div>
  );
};
