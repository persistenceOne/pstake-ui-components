import React, {useState} from "react";
import {Button, Dropdown} from "@persistenceone/pstake-ui-components";


const Buttons = () => {
    const [show, setShow] = useState<boolean>(false);

    const dropCloseDownHandler = (value: boolean) => {
        setShow(value);
    };
    return <div>
        <p className={"text-white-200 text-xl mx-4 mb-6 border-b"}>Buttons</p>
        <div className={"flex items-center "}>
            <Button size={"large"} content={"Primary Large"} className={"mb-3 mx-2"} type={"primary"}/>
            <Button size={"medium"} content={"Primary Medium"} className={"mb-3 mx-2"} type={"primary"}/>
            <Button size={"small"} content={"Primary Small"} className={"mb-3 mx-2"} type={"primary"}/>
            <Button size={"small"} content={"Primary Disabled"} disabled={true} className={"mb-3 mx-2"} type={"primary"}/>
        </div>
        <div className={"flex items-center "}>
            <Button size={"large"} content={"Secondary Large"} className={"mb-3 mx-2"} type={"secondary"}/>
            <Button size={"medium"} content={"Secondary Medium"} className={"mb-3 mx-2"} type={"secondary"}/>
            <Button size={"small"} content={"Secondary Small"} className={"mb-3 mx-2"} type={"secondary"}/>
            <Button size={"small"} content={"Secondary Disabled"} disabled={true} className={"mb-3 mx-2"} type={"secondary"}/>
        </div>
        <div className={"flex items-center "}>
            <Button size={"large"} content={"Tertiary Large"} className={"mb-3 mx-2"} type={"tertiary"}/>
            <Button size={"medium"} content={"Tertiary Medium"} className={"mb-3 mx-2"} type={"tertiary"}/>
            <Button size={"small"} content={"Tertiary Small"} className={"mb-3 mx-2"} type={"tertiary"}/>
            <Button size={"small"} content={"Tertiary Disabled"} disabled={true} className={"mb-3 mx-2"} type={"tertiary"}/>
        </div>
        {/*<Dropdown*/}
        {/*    className="text-light-high w-full mb-2"*/}
        {/*    dropDownVariant="primary"*/}
        {/*    closeDropdown={show}*/}
        {/*    closeHandler={(value:any) => dropCloseDownHandler(value)}*/}
        {/*    dropDownVariantBg="bg-black-700 text-[12px] text-light-high"*/}
        {/*    dropdownLabel={*/}
        {/*        <div className="flex items-center">*/}
        {/*            <span className="text-base text-b font-medium leading-normal md:text-xsm md:ml-2 capitalize">*/}
        {/*   Dropdown*/}
        {/*  </span>*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*    dropDownButtonClass="text-[12px] text-light-high !py-4 bg-dark-700*/}
        {/* button md:text-sm w-full bg-[#151515] !px-6 !justify-between"*/}
        {/*    dropdownType={"click"}*/}
        {/*    staticBackDrop={false}*/}
        {/*    dropDownIcon={true}*/}
        {/*    dropDownContentClass="!bg-[#242424] drop-shadow-md round-md w-max py-0 md:p-0"*/}
        {/*>*/}
        {/*    <p>sstests</p>*/}
        {/*</Dropdown>*/}
    </div>;
};

export default Buttons;
