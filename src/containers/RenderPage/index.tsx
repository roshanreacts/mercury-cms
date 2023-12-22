"use client"
import Box from "@/components/dragableComponents/Box";
import Text from "@/components/dragableComponents/Text";
import Input from "@/components/dragableComponents/Input";
import Dropdown from "@/components/dragableComponents/Dropdown";
import TextArea from "@/components/dragableComponents/Textarea";
import List from "@/components/dragableComponents/List";
import Button from "@/components/dragableComponents/Button";
import { Editor, Element, Frame } from '@craftjs/core'
import CustomImage from "@/components/dragableComponents/Image";
import From from "@/components/dragableComponents/Form";
import Anchor from "@/components/dragableComponents/Anchor";
import React from 'react'

const RenderPage = ({ content }: { content: string }) => {
    const resolver = {
        Input,
        List,
        TextArea,
        Box,
        Text,
        Button,
        Dropdown,
        CustomImage,
        From,
        Anchor
    };
    return (
        <div>
            <Editor enabled={false} resolver={resolver}>
                <Frame data={content}>
                    <Element is={Box} canvas>
                    </Element>
                </Frame>
            </Editor>
        </div>
    )
}

export default RenderPage
