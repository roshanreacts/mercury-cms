import StyledBox from '@/components/Atoms/StyledBox';
import { StyledButton } from '@/components/Atoms/StyledButton';
import { StyledText } from '@/components/Atoms/StyledText';
import { useEditor } from '@craftjs/core';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import React from 'react'
import { PiArrowBendUpLeftBold, PiArrowBendUpRightBold } from 'react-icons/pi';

const EditorTopBar = ({ edit }: { edit: boolean }) => {
    const { actions, query, enabled, canUndo, canRedo, selected } = useEditor(
        (state: any, query: any) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
            selected: state.events.selected,
        })
    );
    const router = useRouter();

    actions.setOptions((options) => (options.enabled = edit));

    return (
        <div>
            <StyledBox width="94vw" display="flex" justifyContent="space-between" alignItems="center" height="50px" gap="10px" ml="20px" mr="10px" mt="5px" mb="3px">
                <Image
                    src="https://res.cloudinary.com/dagmm478n/image/upload/v1701852568/mercury-cms/mercury-logo_eyfwy6.png"
                    alt="logo"
                    width={170}
                    height={40}
                />
                <StyledBox backgroundColor="white" display="flex" gap="6px" border="2px solid">
                    <StyledButton width="55px" size="medium" onClick={() => actions.history.undo()} disabled={!canUndo}>
                        <PiArrowBendUpLeftBold />
                    </StyledButton>
                    <StyledButton width="55px" onClick={() => actions.history.redo()} disabled={!canRedo}>
                        <PiArrowBendUpRightBold />
                    </StyledButton>
                </StyledBox>


                <StyledBox backgroundColor="white" display="flex" gap="6px" border="2px solid">
                    {
                        edit ?
                            <StyledButton width="55px" size="medium" onClick={() => router.push('?edit=false')}>
                                <PiArrowBendUpLeftBold />
                            </StyledButton>
                            :
                            <StyledButton width="55px" size="medium" onClick={() => router.push('?edit=true')}>
                                <PiArrowBendUpLeftBold />
                            </StyledButton>
                    }
                    <StyledButton width="110px" background="#12B76A">
                        <StyledText color="white" weight="large">Finish Editing</StyledText>
                    </StyledButton>
                </StyledBox>



            </StyledBox>
        </div>
    )
}

export default EditorTopBar
