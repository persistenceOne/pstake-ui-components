import React, {useState} from "react";
import {Dropdown} from "@persistenceone/pstake-ui-components";
import {Icon} from "../atoms/Icon";

const DropdownsList = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showIconDropdown, setShowIconDropdown] = useState<boolean>(false);

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
                       dropDownButtonClass="text-[12px] text-light-high !py-3 md:text-sm w-full !px-4 !justify-between"
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
                       dropDownButtonClass="text-[12px] text-light-high !py-4 md:text-sm w-full !px-6 !justify-between"
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
               </div>
            </div>
        </div>
    );
};

export default DropdownsList;
