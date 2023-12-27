import React, { useCallback } from 'react'
import { FreshNode, Node, useEditor, useNode } from "@craftjs/core";
import { MdFileCopy } from 'react-icons/md'

const CopyComponentButton = ({ isSelected }: any) => {


    const {
        id,
        parent,
    } = useNode((editorNode: Node) => ({
        parent: editorNode.data.parent,
    }));

    const { actions, query } = useEditor();
    const insertNodeOnParent = useCallback(
        (
            nodeId: string,
            parentId: string,
            indexToInsert: number,
            selectNodeAfterCreated = false,
        ) => {
            const node: Node = query.node(nodeId).get();

            const freshNode: FreshNode = {
                data: {
                    ...node.data,
                    nodes: [],
                },
            };

            const nodeToAdd = query.parseFreshNode(freshNode).toNode();

            actions.add(nodeToAdd, parentId, indexToInsert);

            if (node.data.nodes.length === 0) {
                return;
            }

            node.data.nodes.forEach((childNode: string, index: number) => {
                insertNodeOnParent(childNode, nodeToAdd.id, index);
            });

            if (selectNodeAfterCreated) actions.selectNode(nodeToAdd.id);
        },
        [actions, query],
    );

    const duplicateNode = useCallback(() => {
        const parentNode = query.node(parent ? parent : "").get();
        const indexToAdd = parentNode.data.nodes.indexOf(id) + 1;

        insertNodeOnParent(id, parent ? parent : "", indexToAdd, true);
    }, [id, insertNodeOnParent, parent, query]);
    return (
        <>
            {isSelected && <button style={{
                position: "absolute",
                top: "-20px",
                left: "46%",
                padding: "10px 10px 10px 10px",
                background: "#6989ff",
                color: "#fff",
                borderRadius: "5px"
            }}
                onClick={() => {
                    duplicateNode()
                }}
            ><MdFileCopy /></button>}
        </>
    )
}

export default CopyComponentButton
