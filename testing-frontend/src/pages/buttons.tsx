import type { NextPage } from "next";
import Buttons from "../components/organisms/buttons";
import TabsContainer from "../components/organisms/tabs";
import DropdownsList from "../components/organisms/dropdowns";
import CopyExample from "../components/organisms/copy";

const Button: NextPage = () => {
    return (
        <div className={"p-4 mb-8"}>
            <Buttons/>
            <TabsContainer/>
            <DropdownsList/>
            <CopyExample/>
        </div>
    );
};

export default Button;
