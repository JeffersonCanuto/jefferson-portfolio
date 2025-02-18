"use client";

import React from "react";

import {
    PiCaretLeftBold,
    PiCaretRightBold
} from "react-icons/pi";

import { Swiper } from "swiper";
import { useSwiper } from "swiper/react";

interface WorkSlidersBtnsProps {
    containerStyles: string;
    btnStyles: string;
};

const WorkSliderBtns:React.FC<WorkSlidersBtnsProps> = ({ containerStyles, btnStyles }) => {
    const swiper:Swiper = useSwiper();
    
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold  />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold />
            </button>
        </div>
    );
}

export default WorkSliderBtns;