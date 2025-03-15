import { ReactNode } from "react";

export type SocialItems = {
    icon: ReactNode;
    path: string;
};

export type SocialProps = {
    containerStyles: string;
    iconStyles: string;
};