import { userLogin } from "../../types/authType";

// localStorageUserLogin
export const storageUser: userLogin | null = null;
export const setLocalUser = (data: userLogin): void => {
    localStorage.setItem('userLogin', JSON.stringify(data));
};

// localStorageTokenUser
export const storageTokenUser: string = '';
export const setLocalTokenUser = (data: string): void => {
    localStorage.setItem('tokenAuth', data);
};
