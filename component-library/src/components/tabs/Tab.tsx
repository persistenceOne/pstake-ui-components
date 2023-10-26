import React from "react";
import { forwardRef } from "../../utils/forwardRef";
import "./styles.css";

export type TabProps = {
  title: string;
  disable?: boolean;
  children?: React.ReactNode | string;
};

export const Tab = forwardRef<HTMLDivElement, TabProps>(({ children }) => {
  return <div className="tabBody">{children}</div>;
});
