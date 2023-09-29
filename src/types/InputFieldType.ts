import { ChangeEvent } from "react";

// Auth
export type InputAuth = {
    type: string;
    name: string;
    className: string;
    label: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
}
