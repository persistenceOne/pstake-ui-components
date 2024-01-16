import React from "react";
import {emptyFunc} from "../../utils";
import {StakeTabTypes} from "./Tabs";

type Props = {
  title: string;
  index: number;
  selectedTab: StakeTabTypes;
  disable?: boolean;
  customHandler?: () => void;
  id: StakeTabTypes;
  type?: "bordered" | "normal"
};

export const TabTitle: React.FC<Props> = ({
                                            title,
                                            selectedTab,
                                            index,
                                            disable = false,
                                            customHandler = emptyFunc,
                                            id,
                                              type= "normal"
                                          }) => {

  const handleClick = () => {
    customHandler();
  };

  const className =  type === "normal" ?
      "flex items-center justify-center bg-black-500 text-white-600 hover:bg-black-400 text-base py-[12px] px-[10px] " +
      "font-semibold leading-[24px] disabled:cursor-not-allowed disabled:text-gray-400 " +
      "disabled:dark:text-gray-500 base flex-1" :
      "font-semibold leading-[24px] py-[24px] px-[30px] text-white-600"

  return (
      <button
          className={`tabTitle ${
              selectedTab === id ? "active" : ""
          } ${className}`}
          onClick={handleClick}
          disabled={disable}
          id={id}
      >
        {title}
      </button>
  );
};
