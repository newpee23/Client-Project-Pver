export type userLogin ={
    id: number;
    fname: string;
    lname: string;
    level: string;
}

export type initialStateAuth = {
    userLogin: userLogin | undefined ;
    loading: boolean;
    message: string | undefined;
}

export type dataLogin = {
    username: string;
    password: string;
}

export type resDataLogin = {
    message: string | undefined;
    token: string | undefined;
    userLogin:  userLogin | undefined ;
}
