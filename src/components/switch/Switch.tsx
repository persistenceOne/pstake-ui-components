import React from "react";
import { SwitchTypes } from "./types";
import "./styles.css";
import {emptyFunc} from "../../utils";

export const Switch = ({
                           size = "md",
                           labelText,
                           checked = false,
                           onChange = emptyFunc,
                       }: SwitchTypes) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <div className="relative">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={onChange}
            />
            <div
                className={`${size} switch peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
         rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px]
         after:rounded-full after:transition-all bg-[#383838] after:bg-[#EBEBEB] after:border-[#383838] after:border-[1.5px]
         peer-checked:bg-[#8C0208] peer-checked:after:bg-[#EBEBEB] peer-checked:after:border-[#8C0208]  peer-checked:after:-left-[1px]`}
            ></div>
        </div>
        <span className="ml-2 text-sm text-white-100 md:text-xsm"> {labelText}</span>
    </label>
);
