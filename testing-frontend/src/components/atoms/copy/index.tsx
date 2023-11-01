import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";
import Styles from "./styles.module.css";
import { IconTypes } from "./types";
import { Icon } from "../Icon";

export const Copy = ({ id, customView = "" }: IconTypes) => {
  const [copyValue, setCopyValue] = useState(false);
  const onCopy = () => {
    setCopyValue(true);
    setTimeout(() => {
      setCopyValue(false);
    }, 1000);
  };
  return (
    <span className="relative flex">
      <CopyToClipboard onCopy={onCopy} text={id}>
        {customView ? (
          copyValue ? (
            <div className={"flex items-center"}>
              <Icon viewClass={Styles.copyIcon} iconName="correct" />
              <span className={"ml-4 text-white-100"}>Copied!</span>
            </div>
          ) : (
            customView
          )
        ) : (
          <span className={Styles.copyButton}>
            <Icon viewClass={Styles.copyIcon} iconName="copy2" />
          </span>
        )}
      </CopyToClipboard>
      {customView ? null : (
          <section className={`${customView ? Styles.copyResultCustomView : "" } ${Styles.copyResult} absolute`}>
            {copyValue ? <span className={"text-white-100"}>Copied</span> : null}
          </section>
      )}
    </span>
  );
};
