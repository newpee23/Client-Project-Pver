import { Opprovince } from "../../types/atomsType";
import { dataSingUp, dataSingUpErr } from "../../types/authType";
import { ErrFromDataP0, FormDataP0 } from "../../types/pageType";

export const dataInsertP0: FormDataP0 = {
    p0F1: "",
    p0F2: "",
    p0F3: 0,
    p0F4: "",
    p0F5: "",
    p0F6: "",
    p0F6Name: "",
    p0F7: "",
    p0F7Name: "",
    p0F8: "",
    p0F8Name: "",
    p0F9T: 0,
    p0F9: "",
    p0F10: "",
    p0F11T: 0,
    p0F11: "",
    p0F12: "",
}

export const dataErrPage0: ErrFromDataP0 = {
    isChecked: "",
}

export const prefixName: Opprovince[] = [
    {
      value: 1,
      label: "นาย"
    },
    {
      value: 2,
      label: "นาง"
    },
    {
      value: 3,
      label: "นางสาว"
    },
    {
      value: 4,
      label: "เด็กชาย"
    },
    {
      value: 5,
      label: "เด็กหญิง"
    }
];

export const dataFromSingUp: dataSingUp = {
  m_fname: "",
  m_lname: "",
  m_idcard: "",
  m_email: "",
  m_username: "",
  m_password: "",
  m_phone: "",
  m_address: "",
  m_level: "m"
}

export const dataFromSingUpErr: dataSingUpErr= {
  m_fnameStatus: false,
  m_fnameTxt: '',
  m_lnameStatus: false,
  m_lnameTxt: '',
  m_usernameStatus: false,
  m_usernameTxt: '',
  m_passwordStatus: false,
  m_passwordTxt: '',
  m_idcardStatus: false,
  m_idcardTxt: '',
  m_emailStatus: false,
  m_emailTxt: '',
  m_phoneStatus: false,
  m_phoneTxt: ''
};