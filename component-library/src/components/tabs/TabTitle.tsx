import React from "react";

type Props = {
  title: string;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
  disable?: boolean;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  selectedTab,
  index,
  disable = false
}) => {
  return (
    <button
      className={`${
        selectedTab === index ? "active" : ""
      } flex items-center justify-center bg-black-500 text-white-600 hover:bg-black-400 text-base py-[12px] px-[10px] font-semibold leading-[24px] 
      disabled:cursor-not-allowed disabled:text-gray-400
       disabled:dark:text-gray-500 base tabTitle flex-1`}
      onClick={() => setSelectedTab(index)}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default TabTitle;
