import React from "react";
import {Tabs, Tab} from "@persistenceone/pstake-ui-components";

const TabsContainer = () => {
    return (
       <div>
           <p className={"text-white-200 text-xl mx-4 mb-6 border-b"}>Tabs</p>
           <div className={"mx-4"}>
               <Tabs className={"mb-4"}>
                   <Tab title="Stake">
                       Stake tab
                   </Tab>
                   <Tab title="Unstake">
                       Unstake tab
                   </Tab>
               </Tabs>
               <Tabs className={"mb-4"}>
                   <Tab title="Stake">
                       Stake tab
                   </Tab>
                   <Tab title="Unstake">
                       Unstake tab
                   </Tab>
                   <Tab title="Swap" disable={true}>
                       Swap tab
                   </Tab>
               </Tabs>
               <Tabs className={"mb-4"}>
                   <Tab title="Stake">
                       Stake tab
                   </Tab>
                   <Tab title="Unstake">
                       Unstake tab
                   </Tab>
                   <Tab title="Swap">
                       Swap tab
                   </Tab>
               </Tabs>
           </div>
       </div>
    );
};

export default TabsContainer;
