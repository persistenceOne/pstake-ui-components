import React, { useRef } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import {useOnClickOutside} from "../../utils/useOnClickOutside";
import {Button} from "../button";
import "./styles.css";

export type DropdownButtonSize = "large" | "medium" | "small";
export type DropdownType = "hover" | "click";

export type DropdownProps = {
    dropdownLabel: React.ReactNode | string;
    dropdownType?: DropdownType;
    children: React.ReactNode | string;
    className?: string;
    rounded?: boolean;
    staticBackDrop?: boolean;
    dropDownContentClass?: string;
    dropDownButtonClass?: string;
    dropDownButtonSize?: DropdownButtonSize
    dropDownIcon: React.ReactNode | null;
    closeDropdown?: boolean;
    closeHandler?: (closeDropdown: boolean) => void;
    animate?:boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Dropdown = (
    (
        {
            children,
            dropdownLabel,
            className = "",
            rounded = false,
            staticBackDrop = true,
            dropdownType = "click",
            dropDownIcon = null,
            dropDownButtonClass = "",
            dropDownContentClass = "",
            closeDropdown = false,
            closeHandler = () => {},
            dropDownButtonSize="medium",
            animate=true
        }: DropdownProps,
    ) => {
        const topRounding = rounded ? "rounded-t-md" : "";

        const dropDownRef = useRef<HTMLDivElement>(null);

        useOnClickOutside(dropDownRef, () => {
            closeHandler(false);
        });

        return (
            <div
                className={`${topRounding} ${className} text-white relative inline-block dropDown ${
                    dropdownType === "click" ? "dropDownClick" : "dropDownHover group"
                }`}
                ref={staticBackDrop ? null : dropDownRef}
            >
                <Button
                    className={`${dropDownButtonClass} ${dropDownButtonSize} dropDownButton bg-black-500 text-white-100 button w-full md:py-2 md:text-sm flex items-center justify-center`}
                    type={"custom"}
                    size="auto"
                    content={
                        <>
                            {dropdownLabel}
                            {dropDownIcon !== null ? (
                                <div className={`${
                                    !closeDropdown ? "rotate-360" : "rotate-360"
                                } dropDownIcon mx-2 ease-in duration-200  rotate-90`}>
                                    {dropDownIcon}
                                </div>
                            ) : (
                                ""
                            )}
                        </>
                    }
                    onClick={() => {
                        closeHandler(!closeDropdown);
                    }}
                />

                <div
                    className={`${dropDownContentClass} dropDownContent min-w-full w-fit absolute opacity-0 transition-opacity transform ease duration-200 bg-black-500 right-0 ${
                        closeDropdown ? `${animate ? "visible" : "block"} translate-y-0.5 opacity-100` : `${animate ? "invisible" : "hidden"}`
                    } text-white-100 rounded-md z-10`}
                >
                    {children}
                </div>
            </div>
        );
    }
);

