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

// สร้างฟังก์ชันเพื่อล้างค่า localStorage ทั้งหมด
export const clearLocalStorageSingIn = (): void => {
    localStorage.removeItem('userLogin');
    localStorage.removeItem('tokenAuth');
  };
