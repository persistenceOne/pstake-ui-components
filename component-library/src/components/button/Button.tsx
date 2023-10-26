import React from "react";
import { ButtonProps } from "./types";
import {emptyFunc} from "../../utils/helpers";
import "./styles.css";


export const Button = ({
                           onClick = emptyFunc,
                           content,
                           disabled = false,
                           className,
                           type = "primary",
                           size = "medium"
                       }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`py-2.5 px-4 appButton ${type} ${size} ${className}`}
        >
            {content}
        </button>
    );
};

export default Button;
