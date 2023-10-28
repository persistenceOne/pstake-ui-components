import React from "react";
import {Button} from "@persistenceone/pstake-ui-components";


const Buttons = () => {

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
    </div>;
};

export default Buttons;
