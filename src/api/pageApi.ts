import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";
import { FormDataP0 } from "../types/pageType";
import { userLogin } from "../types/authType";
import { logOutPage } from "./logoutApi";

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();
const token = localStorage?.getItem("tokenAuth");
const user = localStorage.getItem('userLogin');
const fId = localStorage.getItem('questionId');

export const savePage0 = async (data:FormDataP0): Promise<string> => {
    if(user && fId){
        let parsedData: userLogin = JSON.parse(user);
        try {
            const requestData: {data:FormDataP0; member_id: number,fId: string} = {"data":data, "member_id":parsedData.id, "fId":fId};

            const response: AxiosResponse = await axios.post(
              SERVER_APP_API + `/insert/savePage0`,
              requestData,
              {
                headers: {
                  "Content-Type": "application/json",
                  "token-request": token,
                },
                cancelToken: cancelSource.token,
              }
            );

            return response.data.message;
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              // กรณีเกิด AxiosError คุณสามารถจัดการกับ error ได้ตามที่คุณต้องการ
              return `เกิดข้อผิดพลาด: ${error.message}`;
            } else {
              // กรณีเกิด error ที่ไม่ใช่ AxiosError คุณสามารถจัดการกับ error นี้ได้
              return "เกิดข้อผิดพลาดไม่รู้จัก";
            }
          }
    }else{
        logOutPage();
        return "";
    }
};
