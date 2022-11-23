import { USERS } from "./../models/users";

export const isUserExist = (credentials) => {
  let userType = "";
  Object.keys(USERS).forEach((key) => {
    USERS[key].forEach((user) => {
      if (
        user.userName === credentials.userName &&
        user.password === credentials.password
      )
        userType = key;
    });
  });
  return userType;
};
