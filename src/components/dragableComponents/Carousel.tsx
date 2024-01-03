import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";
import CopyComponentButton from "../CopyComponentButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

type CarouselProps = {
  href?: string;
  target?: string;
  [x: string]: any;
  children?: React.ReactNode;
  customCss?: any;
  classNames?: string;
  sliderCount?: number;
};

const StyledCarousel = styled.div<CarouselProps>`
  ${(props) => props.customCss};
  ${(props) => props.isSelected && "border: 2px dashed red;"}
`;

const Carousel: React.FC<CarouselProps> = ({ children, ...props }: any) => {
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

  const renderSlides = () => {
    const slides = [];
    for (let i = 1; i <= props.sliderCount; i++) {
      slides.push(<SwiperSlide key={i}>{`Slide ${i}`}</SwiperSlide>);
    }
    return slides;
  };

  return (
    <>
      {props.href ? (
        <a href={props.href} target={props.target}>
          <CopyComponentButton isSelected={props?.isSelected} />

          <StyledCarousel
            {...props}
            className={props?.classNames}
            ref={(ref: any) => connect(drag(ref))}
            onClick={() => selected && setEditable(true)}
          >
            {children}
          </StyledCarousel>
        </a>
      ) : (
        <StyledCarousel
          {...props}
          className={props?.classNames}
          ref={(ref: any) => connect(drag(ref))}
          onClick={() => selected && setEditable(true)}
          style={{
            width: "100%",
            maxWidth: "100%",
            maxHeight: "100vh",
            minHeight: 0,
            minWidth: 0,
          }}
        >
          <CopyComponentButton isSelected={props?.isSelected} />
          <Swiper
            navigation={true}
            modules={[Navigation]}
            
          >
            {renderSlides()}
          </Swiper>
        </StyledCarousel>
      )}
    </>
  );
};

export const CarouselDefaultProps: CarouselProps = {
  sliderCount: 3,
};

const BoxSettings = () => {
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
      }}
      setProp={setProp}
    />
  );
};

//@ts-ignore
Carousel.craft = {
  props: CarouselDefaultProps,
  related: {
    settings: BoxSettings,
    rules: {
      canDrag: () => true,
    },
  },
};

export default Carousel;
