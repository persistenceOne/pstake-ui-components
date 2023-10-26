import React from "react";

export interface ButtonProps {
  type?: "primary" | "secondary" | "tertiary" | "custom";
  size?: "large" | "medium" | "small" | "auto";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  content?: React.ReactNode | string;
  disabled?: boolean;
  className?: string;
}
