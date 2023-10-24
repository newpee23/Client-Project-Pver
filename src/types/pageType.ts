import { Opprovince } from "./atomsType";

export type pageType = {
    status: string;
    i: string;
}

export type pageComponents = {
    status: string;
}

export interface FormDataP0 {
    p0F1: string;
    p0F2: string;
    p0F3: number;
    p0F4: string;
    p0F5: string;
    p0F6: string;
    p0F6Name: string;
    p0F7: string;
    p0F7Name: string;
    p0F8: string;
    p0F8Name: string;
    p0F9T: number;
    p0F9: string;
    p0F10: string;
    p0F11T: number;
    p0F11: string;
    p0F12: string;
    p0F13: string;
    p0F14: string;
    p0F15: string;
    p0F16: string;
    p0F17: string;
    p0F18T: number;
    p0F18: string;
    p0F19: string;
    p0F20T: number;
    p0F20: string;
    p0F21: string;
    p0F22: string;
    p0F23: string;
    p0F24: string;
}

export interface ErrFromDataP0 {
    isChecked : string;
}

export interface initialStatePage {
    addressAll: addressData[];
    address: addressData[];
    ban : banData[];
    loading : boolean;
    message : string;
    editDataPage0 : { message:FormDataP0 | string , status: boolean };
    page1: { message: Opprovince[] | string , status: boolean };
}

export type banData = {
    value: number;
    label: string;
}
export type addressData = {
    id : number;
    name: string;
    ampherName: string;
    ban: string;
    banProvince: string;
    mo: string;
    provinceName: string;
    tombonName: string;
    tambon_code: string;
    ampher_code: string;
    province_code: string;
}

export interface FromP0Err {
    [key: string]: boolean|string;
    p0F1Status: boolean;
    p0F1Txt: string;
    p0F2Status: boolean;
    p0F2Txt: string;
    p0F3Status: boolean;
    p0F3Txt: string;
    p0F4Status: boolean;
    p0F4Txt: string;
    p0F9TStatus: boolean;
    p0F9TTxt: string;
    p0F9Status: boolean;
    p0F9Txt: string;
    p0F10Status: boolean;
    p0F10Txt: string;
    p0F11TStatus: boolean;
    p0F11TTxt: string;
    p0F11Status: boolean;
    p0F11Txt: string;
    p0F12Status: boolean;
    p0F12Txt: string;
    p0F13Status: boolean;
    p0F13Txt: string;
    p0F14Status: boolean;
    p0F14Txt: string;
    p0F15Status: boolean;
    p0F15Txt: string;
    p0F16Status: boolean;
    p0F16Txt: string;
    p0F17Status: boolean;
    p0F17Txt: string;
    p0F18TStatus: boolean;
    p0F18TTxt: string;
    p0F18Status: boolean;
    p0F18Txt: string;
    p0F19Status: boolean;
    p0F19Txt: string;
    p0F20TStatus: boolean;
    p0F20TTxt: string;
    p0F20Status: boolean;
    p0F20Txt: string;
    p0F21Status: boolean;
    p0F21Txt: string;
    p0F22Status: boolean;
    p0F22Txt: string;
    p0F23Status: boolean;
    p0F23Txt: string;
    p0F24Status: boolean;
    p0F24Txt: string; 
}

export interface resultSubmitP0 {
    message: string | messageSubmitP0;
    status: boolean;
}

export type messageSubmitP0 = {
    p0F1Txt: string;
    p0F2Txt: string;
    p0F9TTxt: string;
    p0F11TTxt: string;
    p0F13Txt: string;
    p0F14Txt: string;
    p0F15Txt: string;
    p0F16Txt: string;
    p0F17Txt: string;
    p0F18TTxt: string;
    p0F23Txt: string;
}

export interface findPage1F1Type {
    message: string | Opprovince[];
    status: boolean;
}

export interface FormDataP1Type {
    [key: string]: string | Opprovince | null;
    p1F1: Opprovince | null;
    p1F2T: Opprovince | null;
    p1F2: string;
    p1F3: string;
    p1F4: string;
    p1F5: Opprovince | null;
    p1F6: string;
    p1F7: string;
    p1F8: Opprovince | null;
    p1F9: Opprovince | null;
    p1F10: Opprovince | null;
    p1F11: Opprovince | null;
    p1F12: Opprovince | null;
    p1F13: Opprovince | null;
    p1F14: Opprovince | null;
    p1F15: Opprovince | null;
    p1F16: Opprovince | null;
    p1F17: Opprovince | null;
    p1F18: Opprovince | null;
    p1F19: Opprovince | null;
    p1F20: Opprovince | null;
    p1F21: Opprovince | null;
    p1F22: string;
    p1F23: string;
    p1F24: Opprovince | null;
    p1F25: Opprovince | null;
    p1F26: Opprovince | null;
    p1F27: string;
    p1F28: string;
}

export interface FormDataP1InsertType {
    [key: string]: string | number | null;
    p1F1: number | null;
    p1F2T: number | null;
    p1F2: string;
    p1F3: string;
    p1F4: string;
    p1F5: number | null;
    p1F6: string;
    p1F7: string;
    p1F8: number | null;
    p1F9: number | null;
    p1F10: number | null;
    p1F11: number | null;
    p1F12: number | null;
    p1F13: number | null;
    p1F14: number | null;
    p1F15: number | null;
    p1F16: number | null;
    p1F17: number | null;
    p1F18: number | null;
    p1F19: number | null;
    p1F20: number | null;
    p1F21: number | null;
    p1F22: string;
    p1F23: string;
    p1F24: number | null;
    p1F25: number | null;
    p1F26: number | null;
    p1F27: string;
    p1F28: string;
}

export interface FormDataP1ReadOnlyType {
    p1F1: boolean;
    p1F2T: boolean;
    p1F2: boolean;
    p1F3: boolean;
    p1F4: boolean;
    p1F5: boolean;
    p1F6: boolean;
    p1F7: boolean;
    p1F8: boolean;
    p1F9: boolean;
    p1F10: boolean;
    p1F11: boolean;
    p1F12: boolean;
    p1F13: boolean;
    p1F14: boolean;
    p1F15: boolean;
    p1F16: boolean;
    p1F17: boolean;
    p1F18: boolean;
    p1F19: boolean;
    p1F20: boolean;
    p1F21: boolean;
    p1F22: boolean;
    p1F23: boolean;
    p1F24: boolean;
    p1F25: boolean;
    p1F26: boolean;
    p1F27: boolean;
    p1F28: boolean;
}

export interface FromP1Err {
    [key: string]: boolean|string;
    p1F1Status: boolean;
    p1F1Txt: string;
    p1F2Status: boolean;
    p1F2Txt: string;
    p1F2TStatus: boolean;
    p1F2TTxt: string;
    p1F3Status: boolean;
    p1F3Txt: string;
    p1F4Status: boolean;
    p1F4Txt: string;
    p1F5Status: boolean;
    p1F5Txt: string;
    p1F6Status: boolean;
    p1F6Txt: string;
    p1F7Status: boolean;
    p1F7Txt: string;
    p1F8Status: boolean;
    p1F8Txt: string;
    p1F9Status: boolean;
    p1F9Txt: string;
    p1F10Status: boolean;
    p1F10Txt: string;
    p1F11Status: boolean;
    p1F11Txt: string;
    p1F12Status: boolean;
    p1F12Txt: string;
    p1F13Status: boolean;
    p1F13Txt: string;
    p1F14Status: boolean;
    p1F14Txt: string;
    p1F15Status: boolean;
    p1F15Txt: string;
    p1F16Status: boolean;
    p1F16Txt: string;
    p1F17Status: boolean;
    p1F17Txt: string;
    p1F18Status: boolean;
    p1F18Txt: string;
    p1F19Status: boolean;
    p1F19Txt: string;
    p1F20Status: boolean;
    p1F20Txt: string;
    p1F21Status: boolean;
    p1F21Txt: string;
    p1F22Status: boolean;
    p1F22Txt: string;
    p1F23Status: boolean;
    p1F23Txt: string;
    p1F24Status: boolean;
    p1F24Txt: string; 
    p1F25Status: boolean;
    p1F25Txt: string; 
    p1F26Status: boolean;
    p1F26Txt: string; 
    p1F27Status: boolean;
    p1F27Txt: string; 
    p1F28Status: boolean;
    p1F28Txt: string; 
    status: boolean;
}