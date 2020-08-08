import { atom } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "Brendon",
});

export const lastnameState = atom({
  key: "lastnameState",
  default: "Guedes",
});