import React, {useState} from "react";
import {Dropdown} from "@persistenceone/pstake-ui-components";
import {Icon} from "../atoms/Icon";
import { Copy } from "../atoms/copy";

const DropdownsList = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showIconDropdown, setShowIconDropdown] = useState<boolean>(false);
    const [showCopyDropdown, setShowCopyDropdown] = useState<boolean>(false);

    return (
        <div>
            <p className={"text-white-200 text-xl mx-4 mb-6 border-b"}>Dropdowns</p>
            <div className={"mx-4"}>
               <div className={"flex"}>
                   <Dropdown
                       className="w-[200px] mb-2 mx-4"
                       closeDropdown={show}
                       closeHandler={(value:any) => {setShow(value)}}
                       dropdownLabel={
                           <div className="flex items-center">
                            <span className="text-base text-b font-medium leading-normal md:text-xsm md:ml-2 capitalize">
                                Icon Dropdown
                            </span>
                           </div>
                       }
                       dropDownButtonClass="text-[12px] text-white-100!py-3 md:text-sm w-full !px-4 !justify-between"
                       dropdownType={"click"}
                       staticBackDrop={false}
                       dropDownIcon={<Icon viewClass="arrow-right fill-[#fff] !w-[10px]" iconName="chevron"/>}
                       dropDownContentClass="w-max py-1 md:p-0"
                   >
                       <div
                           className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer">
                           <p className="text-white-100">Item 1</p>
                       </div>
                       <div
                           className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer ">
                           <p className="text-white-100">Item 2</p>
                       </div>
                   </Dropdown>
                   <Dropdown
                       className="w-[200px] mb-2"
                       closeDropdown={showIconDropdown}
                       closeHandler={(value:any) => {setShowIconDropdown(value)}}
                       dropdownLabel={
                           <div className="flex items-center">
                            <span className="text-base text-b font-medium leading-normal md:text-xsm md:ml-2 capitalize">
                                Dropdown
                            </span>
                           </div>
                       }
                       dropDownButtonClass="text-[12px] text-white-100 !py-4 md:text-sm w-full !px-6 !justify-between"
                       dropdownType={"click"}
                       staticBackDrop={false}
                       dropDownIcon={null}
                       dropDownContentClass="w-max py-1 md:p-0"
                   >
                       <div
                           className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer">
                           <p className="text-white-100">Item 1</p>
                       </div>
                       <div
                           className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer ">
                           <p className="text-white-100">Item 2</p>
                       </div>
                   </Dropdown>
                   <Dropdown
                       className="text-white-100 md:hidden mx-4"
                       closeDropdown={showCopyDropdown}
                       closeHandler={(value) => setShowCopyDropdown(value)}
                       dropdownLabel={
                           <div className="flex items-center">
                               <div className="flex items-center">
                                <span className="text-base text-b font-medium leading-normal md:text-xsm md:ml-2 capitalize">
                                    Copy Dropdown
                                </span>
                               </div>
                           </div>
                       }
                       dropDownButtonClass="text-[12px] text-white-100 !py-4 md:text-sm w-full !px-6 !justify-between"
                       dropdownType={"click"}
                       staticBackDrop={false}
                       dropDownIcon={null}
                       dropDownContentClass="w-max py-1 md:p-0"
                   >
                       <div
                           className="px-4 py-2 flex items-center justify-center md:py-3
                        hover:cursor-pointer text-black-400 whitespace-nowrap"
                       >
                           <div className="text-white-100 text-sm font-semibold leading-normal md:text-xsm text-center flex-1">
                               <Copy
                                   id={"account"}
                                   customView={
                                       <span className={"flex"}>
                    <Icon
                        iconName="copy2"
                        viewClass="disconnect md:!w-[16px] md:!h-[16px] mr-4"
                    />
                    Copy Address
                  </span>
                                   }
                               />
                           </div>
                       </div>
                       <div
                           className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer text-black-400 whitespace-nowrap"
                       >
                           <Icon
                               iconName="logout"
                               viewClass="disconnect md:!w-[16px] md:!h-[16px]"
                           />
                           <span className="ml-4 text-white-100 text-sm font-semibold leading-normal md:text-xsm md:ml-2">
              Disconnect
            </span>
                       </div>
                   </Dropdown>
               </div>
            </div>
        </div>
    );
};

export default DropdownsList;
