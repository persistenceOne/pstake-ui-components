import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";
import "./styles.css";
import { IconTypes } from "./types";
import {CopyIcon} from "../../stories-utils/Copy";

export const Copy = ({ id, customView = "" }: IconTypes) => {
    const [copyValue, setCopyValue] = useState(false);
    const onCopy = () => {
        setCopyValue(true);
        setTimeout(() => {
            setCopyValue(false);
        }, 5000000);
    };
    return (
        <span className="relative flex">
      <CopyToClipboard onCopy={onCopy} text={id}>
        {customView ? (
            customView
        ) : (
            <span className="copyButton">
              <CopyIcon />
          </span>
        )}
      </CopyToClipboard>
      <section className={`copyResult absolute`}>
        {copyValue ? <span>Copied</span> : null}
      </section>
    </span>
    );
};
