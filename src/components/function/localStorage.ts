import { userLogin } from "../../types/authType";
import { allFromMaster } from "../../types/homeType";

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

// localStorageQuestionnaire
export const storageQuestion: allFromMaster[] = [];
export const setLocalQuestion = (data: allFromMaster[]): void => {
    localStorage.setItem('question', JSON.stringify(data));
};

// สร้างฟังก์ชันเพื่อล้างค่า localStorage ทั้งหมด
export const clearLocalStorageSingIn = (): void => {
    localStorage.removeItem('userLogin');
    localStorage.removeItem('tokenAuth');
    localStorage.removeItem('question');
};
