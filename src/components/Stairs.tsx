import React from "react";

import { motion, Variants } from "framer-motion";

const stairAnimation:Variants = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index:number):number => {
    const totalSteps = 6;

    return totalSteps - index - 1;
};

const Stairs:React.FC = () => {
    return (
        <>
            {/* 
                1 - Render 6 motion divs, each representing a step of the stairs.
                
                2 - Each div will have the same animation defined by the stairAnimation object.
                The delay for each div is calculated dynamically based on its reversed index,
                creating a staggered effect with decreasing delay for each subsequent step.
            */}
            {
                [...Array(6)].map((_:undefined, index:number) => {
                    return (
                        <motion.div 
                            key={index}
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: reverseIndex(index) * 0.1
                            }}
                            className="h-full w-full bg-white relative"
                        />
                    )
                })
            }
        </>
    );
}

export default Stairs;