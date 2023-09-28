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
}

export interface initialStatePage {
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
    id : string;
    name: string;
    ampherName: string;
    ban: string;
    banProvince: string;
    mo: string;
    provinceName: string;
    tombonName: string;
}
