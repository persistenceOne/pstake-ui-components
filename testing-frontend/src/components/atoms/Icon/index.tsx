import React from "react";
import styles from "./styles.module.css";
import { IconTypes } from "./types";

const symbol_defs = `/symbols.svg`;

export const Icon = (props: IconTypes) => {
    return (
        <svg
            viewBox={props.viewBox ? props.viewBox : "0 0 16 16"}
            className={`${styles.icon} ${props.viewClass}`}
        >
            <use xlinkHref={`${symbol_defs}#icon-${props.iconName}`} />
        </svg>
    );
};
