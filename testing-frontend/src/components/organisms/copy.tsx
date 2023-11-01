import React from "react";
import {Button, Dropdown} from "@persistenceone/pstake-ui-components";
import {Copy} from "../atoms/copy";

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
            <div className="w-[100px] flex items-center justify-center">
                <Copy id={"test"}/>
            </div>
            <div className="w-[100px] flex items-center">
                <Copy id={"test"} customView={<Button size={"small"}
                                                      content={
                                                          <p className={"mr-2 whitespace-nowrap"}>Test Copy</p>
                                                      }
                                                      className={"mb-3 mr-8"} type={"primary"}/>}/>
            </div>
        </div>
        </div>

            );
};

export default CopyExample;
