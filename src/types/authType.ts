type userLogin ={
    id: number;
    fname: string;
    lname: string;
    level: string;
}

export type initialStateAuth = {
    loading: boolean; 
    userLogin: userLogin | null ;
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
