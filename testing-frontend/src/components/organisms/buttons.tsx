import React, {useState} from "react";
import {Button, Dropdown} from "@persistenceone/pstake-ui-components";
const tailwindConf = require("@persistenceone/pstake-ui-components");


const Buttons = () => {
    const [show, setShow] = useState<boolean>(false);

    console.log(tailwindConf.tailwindConfigTheme, "tailwindConf");

    const dropCloseDownHandler = (value: boolean) => {
        setShow(value);
    };
    return <div>
        <p className={"text-green-100 text-black-600"}>fic]</p>
        <Button size={"medium"} content={"Button"} />
        <Dropdown
            className="text-light-high w-full mb-2"
            dropDownVariant="primary"
            closeDropdown={show}
            closeHandler={(value) => dropCloseDownHandler(value)}
            dropDownVariantBg="bg-black-700 text-[12px] text-light-high"
            dropdownLabel={
                <div className="flex items-center">
                    <span className="text-base text-b font-medium leading-normal md:text-xsm md:ml-2 capitalize">
            Liquid Stake using Wallet
          </span>
                </div>
            }
            dropDownButtonClass="text-[12px] text-light-high !py-4 bg-dark-700
         button md:text-sm w-full bg-[#151515] !px-6 !justify-between"
            dropdownType={"click"}
            staticBackDrop={false}
            dropDownIcon={true}
            dropDownContentClass="!bg-[#242424] drop-shadow-md round-md w-max py-0 md:p-0"
        >
            <p>sstests</p>
        </Dropdown>
    </div>;
};

export default Buttons;
