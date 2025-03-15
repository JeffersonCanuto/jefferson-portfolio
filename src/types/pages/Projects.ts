import { ReactNode } from "react";

export type ProjectStrings = {
    first: {
        title: string;
        category: string;
        description: string;
    }
};

export type ProjectItems<T, U> = {
    index: number;
    num: T;
    category: T;
    type: T;
    title: T;
    description: T;
    stack: U[],
    image: T;
    github: T;
};

export type StackItems = {
    index: number;
    name: string;
    icon: ReactNode;
};