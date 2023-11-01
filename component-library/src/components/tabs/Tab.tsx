import React from "react";
import "./styles.css";

export type TabProps = {
  title: string;
  id: string,
  disable?: boolean;
  children?: React.ReactNode | string;
  customHandler?: () => void;
};

export const Tab = (({ children }: TabProps) => {
  return <div className="tabBody">{children}</div>;
});
