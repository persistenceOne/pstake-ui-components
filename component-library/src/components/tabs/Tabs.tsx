import React, { forwardRef, ReactElement, useState } from "react";
import TabTitle from "./TabTitle";

export type TabsProps = {
  children: ReactElement[];
  className?: string;
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className }, ref) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div className={`tabs ${className}`}>
        <div
          className="tabsHeader flex text-center flex-wrap"
        >
          {children.map((item, index) => (
            <TabTitle
              key={index}
              title={item.props.title}
              disable={item.props.disable}
              index={index}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </div>
        {children[selectedTab]}
      </div>
    );
  }
);

