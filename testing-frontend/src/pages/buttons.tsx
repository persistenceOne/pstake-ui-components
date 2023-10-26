import type { NextPage } from "next";
import Buttons from "../components/organisms/buttons";
import TabsContainer from "../components/organisms/tabs";

const Button: NextPage = () => {
    return (
        <div className={"p-4"}>
            <Buttons/>
            <TabsContainer/>
        </div>
    );
};

export default Button;
