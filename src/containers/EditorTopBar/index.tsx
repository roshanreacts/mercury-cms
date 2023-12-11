import StyledBox from '@/components/Atoms/StyledBox';
import { StyledButton } from '@/components/Atoms/StyledButton';
import { StyledText } from '@/components/Atoms/StyledText';
import { compressBase64ToJson, compressJsonToBase64 } from '@/utils/methods';
import { useEditor } from '@craftjs/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { PiArrowBendUpLeftBold, PiArrowBendUpRightBold } from 'react-icons/pi';
import { useLazyQuery } from '../hooks';
import { serverFetch } from '@/app/action';
import { SAVE_PAGE_CONTENT } from '@/utils/queries';
import { ToastErrorMessage } from '@/components/ToastMessage';
import { ToastContainer } from 'react-toastify';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const EditorTopBar = ({ edit, content, pageId }: { edit: boolean, content: string, pageId: any }) => {
    const { actions, query, enabled, canUndo, canRedo, selected } = useEditor(
        (state: any, query: any) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
            selected: state.events.selected,
        })
    );
    const router = useRouter();
    const [savePageContent, { data, loading, error }] = useLazyQuery(serverFetch);
    actions.setOptions((options) => (options.enabled = edit));


    if (content) {
        const json = compressBase64ToJson(content);
        actions.deserialize(json);
    }

    const saveCurrentState = () => {
        savePageContent(
            SAVE_PAGE_CONTENT,
            {
                input: {
                    id: pageId,
                    content: compressJsonToBase64(query.serialize())
                }
            },
            {
                cache: "no-store"
            }
        )
    }

    useEffect(() => {
        if (error) {
            ToastErrorMessage(error.message)
        }

        if (data) {
            const json = compressBase64ToJson(data.updatePage.content);
            actions.deserialize(json);
            
            router.push("?edit=false")
        }
    }, [data, error, loading])

    return (
        <div>
            <ToastContainer />
            <StyledBox width="94vw" display="flex" justifyContent="space-between" alignItems="center" height="50px" gap="10px" ml="20px" mr="10px" mt="5px" mb="3px">
                <Image
                    src="https://res.cloudinary.com/dagmm478n/image/upload/v1701852568/mercury-cms/mercury-logo_eyfwy6.png"
                    alt="logo"
                    width={170}
                    height={40}
                    onClick={() => router.replace('/')}
                    style={{ cursor: "pointer" }}
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
                                <HiOutlineEye />
                            </StyledButton>
                            :
                            <StyledButton width="55px" size="medium" onClick={() => router.push('?edit=true')}>
                                <HiOutlineEyeOff />
                            </StyledButton>
                    }
                    <StyledButton width="110px" background="#12B76A" disabled={!edit} onClick={saveCurrentState}>
                        <StyledText color="white" weight="large" >
                            {loading ? "Wait..." : "Finish Editing"}
                        </StyledText>
                    </StyledButton>
                </StyledBox>
            </StyledBox>
        </div>
    )
}

export default EditorTopBar
