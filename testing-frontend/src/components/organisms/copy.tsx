import React from "react";
import {Button, Dropdown, Copy} from "@persistenceone/pstake-ui-components";

const CopyExample = () => {
    return (  <div>
        <p className={"text-white-200 text-xl mx-4 mb-6 border-b"}>Copy</p>
        <div className={"mx-4 flex items-center"}>
            <Button size={"small"}
                    content={ <div className={"flex items-center"}>
                        <p className={"mr-2"}>Test Copy</p>
                        <Copy id={"test"}/>
                    </div>}
                    className={"mb-3 mr-8"} type={"primary"}/>
            <div className="w-[100px] flex items-center">
                <Copy id={"test"}/>
            </div>
        </div>
        </div>

            );
};

export default CopyExample;
