export type AboutStrings = {
    description: {
        text: string;
    };
    labels: {
        first: string;
        second: string;
        third: string;
        fourth: string;
        fifth: string;
        sixth: string;
        seventh: string;
        eighth: string;
    };
    values: {
        first: string;
        second: string;
        third: string;
        fourth: string;
        fifth: string;
        sixth: string;
        seventh: string;
        eighth: string;
    };
};

export type AboutItems<T> = {
    description: T;
    avatar: T;
    infos: InfoItems<T>[];
};

export type InfoItems<T> = {
    index: number
    name: T;
    value: T;
};