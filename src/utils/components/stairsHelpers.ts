// Calculate the reverse index for staggered delay
const reverseIndex = (index:number):number => {
    const totalSteps = 6;

    return totalSteps - index - 1;
};

export default reverseIndex;