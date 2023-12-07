import { useEditor } from '@craftjs/core';
import React from 'react'

const EditorActions = () => {
    const { actions, query, enabled, canUndo, canRedo, selected } = useEditor(
        (state: any, query: any) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
            selected: state.events.selected
        })
    );
    
    return (
        <div>
            {
                <button onClick={() => actions.history.undo()} disabled={!canUndo}> Undo </button>
            }
            {
                <button onClick={() => actions.history.redo()} disabled={!canRedo}> Redo </button>
            }
        </div>
    )
}

export default EditorActions
