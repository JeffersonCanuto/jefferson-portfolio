import { ReactNode } from "react";

export type HireStrings<T> = {
    title: T;
    description: T;
    inputHolderFirstName: T;
    inputHolderLastname: T;
    inputHolderJobTitle: T;
    inputHolderEmail: T;
    messageHolder: T
    sendButton: T;
    phoneTitle: T;
    phoneName: T;
    addressTitle: T;
    addressName: T;
    nameMinError: T;
    nameMaxError: T;
    titleMinError: T;
    titleMaxError: T;
    messageMaxError: T;
    wrongFormatError: T;
};

export type InfoItems = {
    index: number;
    icon: ReactNode;
    title: string;
    description: string;
};