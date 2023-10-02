import { BASEURL } from "../../api/config";
import { cleanState } from "../../store/slices/authSlices";
import { dataSingUp, dataSingUpErr, userLogin } from "../../types/authType";
import { dataFromSingUpErr } from "./initialDataFrom";
import { clearLocalStorageSingIn } from "./localStorage";

export const checkLevelUser = (user: userLogin): void => {
  switch (user.level) {
    case "m":
      window.location.replace(BASEURL + "home");
      break;
    case "a":
      window.location.replace(BASEURL + "dashboard");
      break;
    default:
      window.location.replace(BASEURL);
      break;
  }
};

export const backToLogin = async (): Promise<void> => {
  clearLocalStorageSingIn();
  cleanState();
  window.location.replace(BASEURL);
}

// แปลงเวลา
export function formatDateTimeISOToCustom(isoDateTime: string): string {
  const date = new Date(isoDateTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// check value SingUp
export function checkValueSignUp(data: dataSingUp): dataSingUpErr {

  let valCheckData: dataSingUpErr = dataFromSingUpErr;
  // value fName
  const fNameVal: string = data.m_fname;
  if (fNameVal.length < 1 || fNameVal.length > 60) {
    valCheckData.m_fnameTxt = 'ระบุ Name ระหว่าง 1 - 60 ตัวอักษร';
    valCheckData.m_fnameStatus = true;
  } else {
    valCheckData.m_fnameTxt = '';
    valCheckData.m_fnameStatus = false;
  }

  // value LName
  const LNameVal: string = data.m_fname;
  if (LNameVal.length < 1 && LNameVal.length > 60) {
    valCheckData.m_lnameTxt = 'ระบุ Surname ระหว่าง 1 - 60 ตัวอักษร';
    valCheckData.m_lnameStatus = true;
  } else {
    valCheckData.m_lnameTxt = '';
    valCheckData.m_lnameStatus = false;
  }

  // value Username
  const userNameVal: string = data.m_username;
  if (userNameVal.length < 1 && userNameVal.length > 100) {
    valCheckData.m_usernameTxt = 'ระบุ Username ระหว่าง 1 - 100 ตัวอักษร';
    valCheckData.m_usernameStatus = true;
  } else {
    valCheckData.m_usernameTxt = '';
    valCheckData.m_usernameStatus = false;
  }

  // value Password
  const passWordVal: string = data.m_password;
  if (passWordVal.length < 6) {
    valCheckData.m_passwordTxt = 'ระบุ Password มากกว่า 6 ตัวอักษร';
    valCheckData.m_passwordStatus = true;
  } else if (passWordVal.length > 40) {
    valCheckData.m_passwordTxt = 'ระบุ Password ระหว่าง 1 - 40 ตัวอักษร';
    valCheckData.m_passwordStatus = true;
  } else {
    valCheckData.m_passwordTxt = '';
    valCheckData.m_passwordStatus = false;
  }

  // value idCard
  const idCardVal: string = data.m_idcard;
  if (idCardVal.length !== 13) {
    valCheckData.m_idcardTxt = 'ระบุ idCard 13 ตัวอักษรเท่านั้น';
    valCheckData.m_idcardStatus = true;
  } else {
    valCheckData.m_idcardTxt = '';
    valCheckData.m_idcardStatus = false;
  }

  // value phone
  const phoneVal: string = data.m_phone;
  if (phoneVal.length !== 10) {
    valCheckData.m_phoneTxt = 'ระบุ Phone 10 ตัวอักษรเท่านั้น';
    valCheckData.m_phoneStatus = true;
  } else {
    valCheckData.m_phoneTxt = '';
    valCheckData.m_phoneStatus = false;
  }

  // value email
  const emailVal: string = data.m_email;
  const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailVal.length < 1 || emailVal.length > 60 || !emailPattern.test(emailVal)) {
    valCheckData.m_emailTxt = 'ระบุ Email ไม่ถูกต้องหรือระหว่าง 1 - 60 ตัวอักษร';
    valCheckData.m_emailStatus = true;
  } else {
    valCheckData.m_emailTxt = '';
    valCheckData.m_emailStatus = false;
  }

  return valCheckData;
}

export function validateForm(formDataSingUp: dataSingUp): dataSingUpErr {
  const newFormErr: dataSingUpErr = { ...dataFromSingUpErr };

       // value fname
       const nameVal: string = formDataSingUp.m_fname;
       if(nameVal.length < 1 || nameVal.length > 60){
           newFormErr.m_fnameStatus = true;
           newFormErr.m_fnameTxt = 'ระบุ Name ระหว่าง 1 - 60 ตัวอักษร';
       }else{
           newFormErr.m_fnameStatus = false;
           newFormErr.m_fnameTxt = '';
       }

       // value lname
       const lnameVal: string = formDataSingUp.m_lname;
       if(lnameVal.length < 1 || lnameVal.length > 60){
           newFormErr.m_lnameStatus = true;
           newFormErr.m_lnameTxt = 'ระบุ Surname ระหว่าง 1 - 60 ตัวอักษร';
       }else{
           newFormErr.m_lnameStatus = false;
           newFormErr.m_lnameTxt = '';
       }

       // value username
       const userNameVal: string = formDataSingUp.m_username;
       if(userNameVal.length < 1 && userNameVal.length > 100){
           newFormErr.m_usernameStatus = true;
           newFormErr.m_usernameTxt = 'ระบุ Username ระหว่าง 1 - 100 ตัวอักษร';
       }else{
           newFormErr.m_usernameStatus = false;
           newFormErr.m_usernameTxt = '';
       }

       // value Password
       const passWordVal: string = formDataSingUp.m_password;
       if (passWordVal.length < 6) {
           newFormErr.m_passwordTxt = 'ระบุ Password มากกว่า 6 ตัวอักษร';
           newFormErr.m_passwordStatus = true;
       } else if (passWordVal.length > 40) {
           newFormErr.m_passwordTxt = 'ระบุ Password ระหว่าง 1 - 40 ตัวอักษร';
           newFormErr.m_passwordStatus = true;
       } else {
           newFormErr.m_passwordTxt = '';
           newFormErr.m_passwordStatus = false;
       }

       // value idCard
       const idCardVal: string = formDataSingUp.m_idcard;
       if (!/^[0-9]{13}$/.test(idCardVal)) {
            newFormErr.m_idcardTxt = 'ระบุ idCard 13 ตัวเลขเท่านั้น';
            newFormErr.m_idcardStatus = true;
        } else {
            newFormErr.m_idcardTxt = '';
            newFormErr.m_idcardStatus = false;
        }

       // value phone
       const phoneVal: string = formDataSingUp.m_phone;
       if (!/^[0-9]{10}$/.test(phoneVal)) {
           newFormErr.m_phoneTxt = 'ระบุ Phone 10 ตัวเลขเท่านั้น';
           newFormErr.m_phoneStatus = true;
       } else {
           newFormErr.m_phoneTxt = '';
           newFormErr.m_phoneStatus = false;
       }

       // value email
       const emailVal: string = formDataSingUp.m_email;
       const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       if (emailVal.length < 1 || emailVal.length > 60 || !emailPattern.test(emailVal)) {
           newFormErr.m_emailTxt = 'ระบุ Email ไม่ถูกต้องหรือระบุ ระหว่าง Email 1 - 60 ตัวอักษร';
           newFormErr.m_emailStatus = true;
       } else {
           newFormErr.m_emailTxt = '';
           newFormErr.m_emailStatus = false;
       }

  return newFormErr;
}