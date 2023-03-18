import { IS_SIGNED } from "./types";

export const is_signed = (signed) => {
  // console.log("is_signed action:", signed);
  return {
    type: IS_SIGNED,
    payload: signed,
  };
};
