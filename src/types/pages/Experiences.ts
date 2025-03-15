export type ExperienceStrings = {
    first: {
        description: {
            title: string
        };
        card: {
            position: string;
            location: string;
            regime: string;
            duration: string;
        };
        attributions: {
            first: string;
            second: string;
            third: string;
            fourth: string;
            fifth: string;
            sixth: string;
        };
    };
    second: {
        description: {
            title: string
        };
        card: {
            position: string;
            location: string;
            regime: string;
            duration: string;
        };
        attributions: {
            first: string;
            second: string;
            third: string;
            fourth: string;
            fifth: string;
        };
    };
};

export type ExperienceItems<T> = {
    index: number;
    description: T;
    company: T;
    website: T;
    position: T;
    location: T;
    regime: T;
    duration: T;
    attributions: { index: number; title: T }[];
};