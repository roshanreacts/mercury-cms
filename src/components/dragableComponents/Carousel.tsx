import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Element, useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";
import CopyComponentButton from "../CopyComponentButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Box from "./Box";

type CarouselProps = {
    [x: string]: any;
    children?: React.ReactNode;
    customCss?: any;
    classNames?: string;
    sliderCount?: number;
    currentSlide?: number;
    navigation?: boolean;
    pagination?: boolean;
    autoplay?: boolean;
    freeMode?: boolean;
    spaceBetween?: number;
    maxWidth?: string;
};

const StyledCarousel = styled.div<CarouselProps>`
  ${(props) => props.customCss};
  ${(props) => props.isSelected && "border: 2px dashed red;"}
`;

const Carousel: React.FC<CarouselProps> = ({ children, ...props }: any) => {
    const [slideCountState, setSlideCountState] = useState(3);
    const {
        connectors: { connect, drag },
        selected,
        actions: { setProp },
    } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged,
    }));

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        if (selected) {
            setProp((props: any) => (props.isSelected = true));
            return;
        }

        setProp((props: any) => (props.isSelected = false));
        setEditable(false);
    }, [selected]);

    const [sliderOptions, setSliderOptions] = useState<any>({});

    useEffect(() => {
        setSlideCountState(Number(props.sliderCount) ? Number(props.sliderCount) : 2);
        // console.log(props);

        const sliderOptions: any = {};

        if (props?.navigation) {
            sliderOptions.navigation = true
        }

        if (props?.pagination) {
            sliderOptions.pagination = {
                clickable: true,
            };
        }

        if (props?.autoplay) {
            sliderOptions.autoplay = {
                delay: 2500,
                disableOnInteraction: false,
            };
        }

        if (props?.spaceBetween) {
            sliderOptions.spaceBetween = props.spaceBetween ? Number(props.spaceBetween) : 0;
        }

        console.log(sliderOptions, "sliderOptions");
        setSliderOptions(sliderOptions);

    }, [props.sliderCount, props.spaceBetween, props.autoplay, props.navigation, props.pagination])



    return (
        <>
            <CopyComponentButton isSelected={props?.isSelected} />

            <StyledCarousel
                {...props}
                className={props?.classNames}
                ref={(ref: any) => connect(drag(ref))}
                onClick={() => selected && setEditable(true)}
                style={{
                    maxWidth: props?.maxWidth
                }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, FreeMode]}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={props?.spaceBetween}
                    // {...sliderOptions}
                    style={{ padding: "10px" }}>
                    {
                        [...Array(slideCountState)].map((_, index: number) =>
                            <SwiperSlide>
                                <Element is={Box} canvas id={`Box-${index}`} height="auto" width="30%" backgroundColor="#000" p="60px">
                                </Element>
                            </SwiperSlide>)
                    }
                </Swiper>
            </StyledCarousel>
        </>
    );
};

export const CarouselDefaultProps: CarouselProps = {
    sliderCount: 3,
    maxWidth: "60vw",
};

const CarouselSettings = () => {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <SettingsWrapper
            defaultValues={props}
            settings={{
                classNames: {
                    type: "textarea",
                    label: "Tailwind Classes",
                },
                href: {
                    type: "text",
                    label: "Link URL",
                },
                target: {
                    type: "select",
                    label: "Target",
                    options: ["_blank", "_self", "_parent", "_top"],
                },
                customCss: {
                    type: "textarea",
                    label: "Custom CSS",
                },
                sliderCount: {
                    type: "number",
                    label: "Slides Count",
                },
                maxWidth: {
                    type: "text",
                    label: "Max Width"
                },
                currentSlide: {
                    type: "slider",
                    label: "Select slide",
                },
                navigation: {
                    type: "boolean",
                    label: "Navigation",
                },
                pagination: {
                    type: "boolean",
                    label: "Pagination",
                },
                autoplay: {
                    type: "boolean",
                    label: "Autoplay"
                },
                spaceBetween: {
                    type: "number",
                    label: "Space Btw. Slides"
                },
            }}
            setProp={setProp}
        />
    );
};

//@ts-ignore
Carousel.craft = {
    props: CarouselDefaultProps,
    related: {
        settings: CarouselSettings,
        rules: {
            canDrag: () => true,
        },
    },
};

export default Carousel;
