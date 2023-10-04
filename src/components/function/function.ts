import { BASEURL } from "../../api/config";
import { cleanState } from "../../store/slices/authSlices";
import { dataSingUp, dataSingUpErr, userLogin } from "../../types/authType";
import { FormDataP0, FromP0Err } from "../../types/pageType";
import { dataFromP0Err, dataFromSingUpErr } from "./initialDataFrom";
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
export const formatDateTimeISOToCustom = (isoDateTime: string): string => {
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
export const checkValueSignUp = (data: dataSingUp): dataSingUpErr => {

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
// validateForm
export const validateForm = (formDataSingUp: dataSingUp): dataSingUpErr => {
  const newFormErr: dataSingUpErr = { ...dataFromSingUpErr };

  // value fname
  const nameVal: string = formDataSingUp.m_fname;
  if (nameVal.length < 1 || nameVal.length > 60) {
    newFormErr.m_fnameStatus = true;
    newFormErr.m_fnameTxt = 'ระบุ Name ระหว่าง 1 - 60 ตัวอักษร';
  } else {
    newFormErr.m_fnameStatus = false;
    newFormErr.m_fnameTxt = '';
  }

  // value lname
  const lnameVal: string = formDataSingUp.m_lname;
  if (lnameVal.length < 1 || lnameVal.length > 60) {
    newFormErr.m_lnameStatus = true;
    newFormErr.m_lnameTxt = 'ระบุ Surname ระหว่าง 1 - 60 ตัวอักษร';
  } else {
    newFormErr.m_lnameStatus = false;
    newFormErr.m_lnameTxt = '';
  }

  // value username
  const userNameVal: string = formDataSingUp.m_username;
  if (userNameVal.length < 1 && userNameVal.length > 100) {
    newFormErr.m_usernameStatus = true;
    newFormErr.m_usernameTxt = 'ระบุ Username ระหว่าง 1 - 100 ตัวอักษร';
  } else {
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
    newFormErr.m_phoneTxt = 'ระบุ Phone 10 ตัว เป็นเลขเท่านั้น';
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

// validateForm P0
export const validateFormP0 = (dataP0: FormDataP0): FromP0Err => {
  const newFormErr: FromP0Err = { ...dataFromP0Err };

  // f1 รหัสบ้าน
  const f1Val: string = dataP0.p0F1;
  if (!/^[0-9]{10}$/.test(f1Val)) {
    newFormErr.p0F1Status = true;
    newFormErr.p0F1Txt = "ระบุ รหัสบ้าน 10 ตัวเป็นตัวเลขเท่านั้น";
  } else {
    newFormErr.p0F1Status = false;
    newFormErr.p0F1Txt = "";
  }

  // f2 หลังคาเรือนที่
  const f2Val: string = dataP0.p0F2;
  if (!/^[0-9]/.test(f2Val)) {
    newFormErr.p0F2Status = true;
    newFormErr.p0F2Txt = "ระบุ หลังคาเรือนที่ เป็นตัวเลขเท่านั้น";
  } else {
    newFormErr.p0F2Status = false;
    newFormErr.p0F2Txt = "";
  }

  // f3 address
  const f3Val: number = dataP0.p0F3;
  if (f3Val === 0) {
    newFormErr.p0F3Status = true;
    newFormErr.p0F3Txt = "กรุณาเลือก ชื่อหมู่บ้าน";
  } else {
    newFormErr.p0F3Status = false;
    newFormErr.p0F3Txt = "";
  }

  // f4 บ้านเลขที่
  const f4Val: string = dataP0.p0F4;
  if (f4Val.length < 1) {
    newFormErr.p0F4Status = true;
    newFormErr.p0F4Txt = "กรุณาระบุ บ้านเลขที่";
  } else {
    newFormErr.p0F4Status = false;
    newFormErr.p0F4Txt = "";
  }

  //  f9T คำนำหน้า
  const f9tVal: number = dataP0.p0F9T;
  if (f9tVal === 0) {
    newFormErr.p0F9TStatus = true;
    newFormErr.p0F9TTxt = "กรุณาเลือก คำนำหน้าชื่อ";
  } else {
    newFormErr.p0F9TStatus = false;
    newFormErr.p0F9TTxt = "";
  }

  // f9 ชื่อเจ้าของบ้าน
  const f9Val: string = dataP0.p0F9;
  if (f9Val.length < 1) {
    newFormErr.p0F9Status = true;
    newFormErr.p0F9Txt = "กรุณาระบุ ชื่อเจ้าของบ้าน";
  } else {
    newFormErr.p0F9Status = false;
    newFormErr.p0F9Txt = "";
  }

  // f10 นามสกุลเจ้าของบ้าน
  const f10Val: string = dataP0.p0F10;
  if (f10Val.length < 1) {
    newFormErr.p0F10Status = true;
    newFormErr.p0F10Txt = "กรุณาระบุ นามสกุลเจ้าของบ้าน";
  } else {
    newFormErr.p0F10Status = false;
    newFormErr.p0F10Txt = "";
  }

  // f11T คำนำหน้า
  const f11tVal: number = dataP0.p0F11T;
  if (f11tVal === 0) {
    newFormErr.p0F11TStatus = true;
    newFormErr.p0F11TTxt = "กรุณาเลือก คำนำหน้าชื่อ";
  } else {
    newFormErr.p0F11TStatus = false;
    newFormErr.p0F11TTxt = "";
  }

  // f11 ชื่อผู้ให้ข้อมูล
  const f11Val: string = dataP0.p0F11;
  if (f11Val.length < 1) {
    newFormErr.p0F11Status = true;
    newFormErr.p0F11Txt = "กรุณาระบุ ชื่อผู้ให้ข้อมูล";
  } else {
    newFormErr.p0F11Status = false;
    newFormErr.p0F11Txt = "";
  }

  // f12 นามสกุลผู้ให้ข้อมูล
  const f12Val: string = dataP0.p0F12;
  if (f12Val.length < 1) {
    newFormErr.p0F10Status = true;
    newFormErr.p0F10Txt = "กรุณาระบุ นามสกุลผู้ให้ข้อมูล";
  } else {
    newFormErr.p0F10Status = false;
    newFormErr.p0F10Txt = "";
  }

  // f13 หมายเลขโทรศัพท์ที่ติดต่อได้
  const f13Val: string = dataP0.p0F13;
  if (!/^[0-9]{10}$/.test(f13Val)) {
    newFormErr.p0F13Status = true;
    newFormErr.p0F13Txt = "ระบุ หมายเลขโทรศัพท์ 10 ตัว เป็นเลขเท่านั้น";
  } else {
    newFormErr.p0F13Status = false;
    newFormErr.p0F13Txt = "";
  }

  //f14 จำนวนครอบครัวในครัวเรือน
  const f14Val: number = parseInt(dataP0.p0F14);
  if (f14Val < 1) {
    newFormErr.p0F14Status = true;
    newFormErr.p0F14Txt = "กรุณาระบุ จำนวนครอบครัว ตั้งแต่ 1 เป็นต้นไป";
  } else {
    newFormErr.p0F14Status = false;
    newFormErr.p0F14Txt = "";
  }

  // f15 จำนวนสมาชิกทั้งหมดในครัวเรือน
  const f15Val = parseInt(dataP0.p0F15);
  if (f15Val < 1) {
    newFormErr.p0F15Status = true;
    newFormErr.p0F15Txt = "กรุณาระบุ จำนวนสมาชิก ตั้งแต่ 1 เป็นต้นไป";
  } else {
    newFormErr.p0F15Status = false;
    newFormErr.p0F15Txt = "";
  }

  //f16 f17 จำนวนเพศชายและหญิง
  const f16Val = parseInt(dataP0.p0F16);
  const f17Val = parseInt(dataP0.p0F17);
  if (!/^[0-9]$/.test(f16Val.toString()) && f16Val < 1) {
    newFormErr.p0F16Status = true;
    newFormErr.p0F16Txt = "กรุณาระบุ เพศชาย เป็นตัวเลขตั้งแต่ 1 เป็นต้นไป";
  } else if (!/^[0-9]$/.test(f17Val.toString()) && f17Val < 1) {
    newFormErr.p0F17Status = true;
    newFormErr.p0F17Txt = "กรุณาระบุ เพศหญิง เป็นตัวเลขตั้งแต่ 1 เป็นต้นไป";
  } else {
    let totalGender = (f16Val + f17Val);
    if (totalGender > f15Val) {
      newFormErr.p0F16Status = true;
      newFormErr.p0F16Txt = "ไม่สามารถระบุ จำนวนเพศ เกินจำนวนสมาชิกในครัวเรือนได้";
    } else {
      newFormErr.p0F16Status = false;
      newFormErr.p0F16Txt = "";
      newFormErr.p0F17Status = false;
      newFormErr.p0F17Txt = "";
    }
  }

  // f18t ชื่อผู้สำรวจ 1.
  const f18tVal: number = dataP0.p0F18T;
  if (f18tVal === 0) {
    newFormErr.p0F18TStatus = true;
    newFormErr.p0F18TTxt = "กรุณาเลือก คำนำหน้าชื่อ";
  } else {
    newFormErr.p0F18TStatus = false;
    newFormErr.p0F18TTxt = "";
  }

  // f18 ชื่อผู้สำรวจ
  const f18Val: string = dataP0.p0F18;
  if (f18Val.length < 1) {
    newFormErr.p0F18Status = true;
    newFormErr.p0F18Txt = "กรุณาระบุ ชื่อผู้สำรวจ";
  } else {
    newFormErr.p0F18Status = false;
    newFormErr.p0F18Txt = "";
  }

  // f19 นามสกุลผู้สำรวจ
  const f19Val: string = dataP0.p0F19;
  if (f19Val.length < 1) {
    newFormErr.p0F19Status = true;
    newFormErr.p0F19Txt = "กรุณาระบุ นามสกุลผู้สำรวจ";
  } else {
    newFormErr.p0F19Status = false;
    newFormErr.p0F19Txt = "";
  }

  return newFormErr;
}