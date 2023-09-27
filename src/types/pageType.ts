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
}

export interface initialStatePage {
    ban : banData[];
    loading : boolean;
    message : string;
}

export type banData = {
    id : string;
    name: string;
}
