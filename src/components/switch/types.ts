import { ChangeEventHandler } from "react";

export interface SwitchTypes {
  size:  "md" | "sm";
  labelText: string;
  checked: boolean;
  onChange?: ChangeEventHandler<any> | undefined;
}
