import React from "react";
import { InputTextTypes } from "./types";
import "./styles.css";
import {emptyFunc} from "../../utils";

export const Radio = ({
  className,
  label = "text",
  onClick = emptyFunc,
  checked = false,
  disabled = false,
  id = ""
}: InputTextTypes) => {
  return (
    <div className={`flex radio-button items-center ${className}`}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        id={id}
        readOnly={true}
      />
      <label
        htmlFor="default-radio-2"
        className="text-sm font-normal text-white-100"
        onClick={onClick}
      >
        {label}
      </label>
    </div>
  );
};
