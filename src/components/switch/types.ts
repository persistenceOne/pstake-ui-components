import { ChangeEventHandler } from "react";

export interface SwitchTypes {
  size: "lg" | "md" | "sm";
  labelText: string;
  checked: boolean;
  onChange?: ChangeEventHandler<any> | undefined;
}
