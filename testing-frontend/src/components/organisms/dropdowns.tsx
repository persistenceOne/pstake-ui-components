import React, {useState} from "react";
import {Button, Dropdown} from "@persistenceone/pstake-ui-components";
import {Icon} from "../atoms/Icon";

const DropdownsList = () => {
    const [show, setShow] = useState<boolean>(false);

    const dropCloseDownHandler = (value: boolean) => {
        setShow(value);
    };
    return (
        <div>
            <p className={"text-white-200 text-xl mx-4 mb-6 border-b"}>Dropdowns</p>
            <div className={"mx-4"}>
                <Dropdown
                    className="text-light-high w-full mb-2"
                    dropDownVariant="primary"
                    closeDropdown={show}
                    closeHandler={(value:any) => dropCloseDownHandler(value)}
                    dropDownVariantBg="bg-black-700 text-[12px] text-light-high"
                    dropdownLabel={
                        <div className="flex items-center">
                            <span className="text-base text-b font-medium leading-normal md:text-xsm md:ml-2 capitalize">
                   Dropdown
                  </span>
                        </div>
                    }
                    dropDownButtonClass="text-[12px] text-light-high !py-4 bg-dark-700
                 button md:text-sm w-full bg-[#151515] !px-6 !justify-between"
                    dropdownType={"click"}
                    staticBackDrop={false}
                    dropDownIcon={<Icon viewClass="arrow-right fill-[#fff] !w-[10px]" iconName="chevron"/>}
                    dropDownContentClass="!bg-[#242424] drop-shadow-md round-md w-max py-0 md:p-0"
                >
                    <p>sstests</p>
                    <p>sstests</p>
                </Dropdown>
            </div>
        </div>
    );
};

export default DropdownsList;
