import React, { useState } from "react";
import {TabTitle} from "./TabTitle";

export type TabsProps = {
  children: any[];
  className?: string;
  tabHeaderClass?: string
};

export const Tabs = (
  ({ children, className, tabHeaderClass }:TabsProps ) => {
      console.log(children,"children")
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div className={`tabs ${className}`}>
        <div
          className={`tabsHeader flex text-center flex-wrap ${tabHeaderClass}`}>
          {children!.map((item, index) => (
              item !== null ?
                <TabTitle
                  key={index}
                  title={item.props.title}
                  disable={item.props.disable}
                  index={index}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  id={item.props.id}
                  customHandler={item.props.customHandler}
                />
              : null
          ))}
        </div>
        {children![selectedTab]}
      </div>
    );
  }
);

