import { KeyboardEvent } from "react";

export const PasswordValidation = (data: string) => {
  const regex = /^\S{3}\S+$/;
  if (/\s/g.test(data)) {
    return new Error("Spaces not allowed");
  } else if (!regex.test(data)) {
    return new Error("Password must be greater than 3 letters");
  }
  return new Error("");
};

export const ValidateAlphaNumeric = (e: KeyboardEvent<HTMLInputElement>) => {
  const regEx = /^[a-z0-9A-Z]+$/;
  if (!regEx.test(e.key)) {
    e.preventDefault();
  }
};

export const ValidateString = (e: KeyboardEvent<HTMLInputElement>) => {
  const regEx = /^[a-z]+$/;
  if (!regEx.test(e.key)) {
    e.preventDefault();
  }
};

export const ValidateSpecialCharacters = (
  e: KeyboardEvent<HTMLInputElement>
) => {
  const key = e?.key.toLowerCase();
  if (key === "e" || key === "-" || key === "+") {
    e.preventDefault();
  }
};

export const ValidateSpace = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === " ") {
    e.preventDefault();
  }
};

export const ValidateAlphaNumericSpaces = (
  e: KeyboardEvent<HTMLInputElement>
) => {
  const regEx = /^[a-z0-9A-Z ]+$/;
  if (!regEx.test(e.key)) {
    e.preventDefault();
  }
};

export const ValidateStringSpaces = (e: KeyboardEvent<HTMLInputElement>) => {
  const regEx = /^[a-z ]+$/;
  if (!regEx.test(e.key)) {
    e.preventDefault();
  }
};
