import multi from './multi/multi';
import add from './add/add';

import { userAccount } from "./userAccount";

export const getUserName = () => "John Doe";

export const getUserPhoneNumber = () => "***********";

export const getUserAccount = () => userAccount;

export const funcs =  {
  multi,
  add,
};

export default {
  multi,
  add,
  getUserName,
  getUserPhoneNumber,
  getUserAccount,
};
