import type { NextPage } from "next";
import Buttons from "../components/organisms/buttons";
import TabsContainer from "../components/organisms/tabs";
import DropdownsList from "../components/organisms/dropdowns";

const Button: NextPage = () => {
    return (
        <div className={"p-4 mb-8"}>
            <Buttons/>
            <TabsContainer/>
            <DropdownsList/>
        </div>
    );
};

export default Button;
