export type EducationStrings = {
    degrees: {
        first: {
            name: string;
            start: string;
            end: string;
        };
        second: {
            name: string;
            start: string;
            end: string;
        };
    };
};

export type EducationItems<T> = {
    index: number;
    label: T;
    course: T;
    university: T;
    start: T;
    end: T;
};

export type CertificationItems<T> = {
    index: number;
    title: T;
    school: T;
    icon: T;
    issuance: T;
    credential: T;
    competences: {index: number; name: T}[];
};