import React, { type InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const inputVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    tone?: "error" | "default" | "success" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">, VariantProps<typeof inputVariants> {
    label?: string;
    hint?: string;
    error?: string;
    id?: string;
    size?: "sm" | "md" | "lg";
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
//# sourceMappingURL=Input.d.ts.map