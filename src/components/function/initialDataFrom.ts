import { Opprovince } from "../../types/atomsType";
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