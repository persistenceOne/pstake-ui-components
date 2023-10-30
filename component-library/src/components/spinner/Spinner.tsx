import React from "react";
import { SpinnerTypes } from "./types";
import "./styles.css";
export const Spinner = ({ size = "medium" }: SpinnerTypes) => (
    <span
        className={` ${size} spinner light icon-toast inline-block align-text-bottom rounded-full`}
    />
);

