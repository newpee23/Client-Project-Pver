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

