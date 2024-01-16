import React from "react";
import { InputTextTypes } from "./types";
import {emptyFunc} from "../../utils";

export const InputText = ({
                              autofocus = false,
                              className,
                              error,
                              name,
                              placeholder,
                              required = true,
                              type = "text",
                              value,
                              onChange = emptyFunc,
                              disable = false,
                              title = ""
                          }: InputTextTypes) => {
    return (
        <div className="flex flex-1 justify-end">
            <input
                title={title}
                type={type}
                className={className}
                name={name}
                placeholder={placeholder}
                autoFocus={autofocus}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disable}
                autoComplete={"off"}
                onWheel={(e) => (e.target as HTMLInputElement).blur()}
            />
            <p className="error">{error}</p>
        </div>
    );
};
