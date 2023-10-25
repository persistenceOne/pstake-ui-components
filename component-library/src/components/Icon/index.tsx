import React from "react";
import { IconTypes } from "./types";
import "./styles.css";

const symbol_defs = "./symbols.svg";

export const Icon = (props: IconTypes) => {
    return (
        <svg
            viewBox={props.viewBox ? props.viewBox : "0 0 16 16"}
            className={`icon ${props.viewClass}`}
        >
            <use xlinkHref={`${symbol_defs}#icon-${props.iconName}`} />
        </svg>
    );
};
