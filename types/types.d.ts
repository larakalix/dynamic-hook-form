import { ComponentProps } from "react";

export type Field = {
    name: string;
    label: string;
    type: ComponentProps<"input">["type"];
    required?: boolean;
    options?: string[];
};
