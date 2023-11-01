import React, {useState} from "react";
import {Button, Modal} from "@persistenceone/pstake-ui-components";
import { Icon } from "../atoms/Icon";

const ModalExample = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showCloseButton, setShowCloseButton] = useState<boolean>(false);
    const [showFadeIn, setShowFadeIn] = useState<boolean>(false);
    return (
        <div>
            <p className={"text-white-200 text-xl mx-4 mb-6 border-b"}>Modals</p>
                <div className={"mx-4 flex items-center"}>
                    <Modal
                        show={show}
                        onClose={() => {
                            setShow(false);
                        }}
                        header=""
                        className=""
                        modalDialogClassName={"!max-w-[600px]"}
                        staticBackDrop={false}
                        closeButton={false}
                        animate={null}
                    >
                        <p>Basic Modal</p>
                    </Modal>
                    <Button size={"small"} content={"Basic Modal"} className={"mb-3 mx-2"} type={"primary"} onClick={()=>{setShow(true)}}/>

                    <Modal
                        show={showCloseButton}
                        onClose={() => {
                            setShowCloseButton(false);
                        }}
                        header=""
                        className=""
                        modalDialogClassName={"!max-w-[600px]"}
                        staticBackDrop={false}
                        closeButton={<Icon viewClass="arrow-right fill-[#fff] !w-[10px]" iconName="close"/>}
                        animate={"fadeIn"}
                    >
                        <p>test</p>
                    </Modal>
                    <Button size={"small"} content={"Modal With Close Button"} className={"mb-3 mx-2"} type={"primary"} onClick={()=>{setShowCloseButton(true)}}/>

                    <Modal
                        show={showFadeIn}
                        onClose={() => {
                            setShowFadeIn(false);
                        }}
                        header=""
                        className=""
                        modalDialogClassName={"!max-w-[600px]"}
                        staticBackDrop={false}
                        closeButton={true}
                        animate={"fadeIn"}
                    >
                        <p>Button with Fade In Animate</p>
                    </Modal>
                    <Button size={"small"} content={"Fade In"} className={"mb-3 mx-2"} type={"primary"} onClick={()=>{setShowFadeIn(true)}}/>

                </div>
            </div>
            );
};

export default ModalExample;
