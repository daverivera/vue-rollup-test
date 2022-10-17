import { userAccount } from "./userAccount";

export const getUserName = () => "John Doe";

export const getUserPhoneNumber = () => "***********";

export const getUserAccount = () => userAccount;

export default {
  getUserName,
  getUserPhoneNumber,
  getUserAccount,
};
