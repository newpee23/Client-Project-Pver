import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";
import { backToLogin } from "../components/function/function";

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();
const token = localStorage?.getItem("tokenAuth");

export const checkTokenUser = async (id:number): Promise<void> => {
    try {
      const response: AxiosResponse =  await axios.get(SERVER_APP_API+`/member/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      });
      if(response.data === "No Token, Authorization Denied"){
        backToLogin();
      }
      return;
    } catch (error: unknown) {
        console.log(error);
        backToLogin();
    }
  };