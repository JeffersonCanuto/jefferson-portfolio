import { ReactNode } from "react";

export type SkillStrings = {
    description: string;
    competences: string;
};

export type Competences<T> = {
    description: string;
    skills: T[];
    others: string;
};

export type Competence = {
    index: number;
    icon: ReactNode;
    name: string;
};