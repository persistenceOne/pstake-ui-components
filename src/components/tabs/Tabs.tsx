import React from "react";
import { TabTitle } from "./TabTitle";

export type StakeTabTypes = "stake" | "unstake" | "swap";

export type TabsProps = {
    children: any[];
    className?: string;
    tabHeaderClass?: string;
    activeTab: StakeTabTypes;
    tabType?: "bordered" | "normal"
};

export const Tabs = ({
                         children,
                         className,
                         tabHeaderClass,
                         activeTab,
                         tabType = "normal"
                     }: TabsProps) => {
    return (
        <div className={`tabs ${className}`}>
            <div
                className={`tabsHeader flex text-center flex-wrap ${tabType} ${tabHeaderClass}`}
            >
                {children!.map((item, index) =>
                    item !== null ? (
                        <TabTitle
                            key={index}
                            title={item.props.title}
                            disable={item.props.disable}
                            index={index}
                            selectedTab={activeTab}
                            id={item.props.id}
                            type={tabType}
                            customHandler={item.props.customHandler}
                        />
                    ) : null
                )}
            </div>
            {children.find((item) => item.props.id === activeTab)}
        </div>
    );
};
