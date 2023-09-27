import { banData, initialStatePage } from "../../types/pageType";
import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "../../api/config";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStatePage = {
    ban: [],
    loading: false,
    message: ""
};

const token = localStorage?.getItem("tokenAuth");
// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

// ดึงข้อมูล Ban ชื่อหมู่บ้าน
export const findBan = createAsyncThunk<banData[]|string>(
    "findBan/loadAsync", async (): Promise<banData[]|string> => {
      try {
        const response: AxiosResponse = await axios.get(
          SERVER_APP_API + `/findQuestionnaire/`,
          {
            headers: {
              "Content-Type": "application/json",
              "token-request": token,
            },
            cancelToken: cancelSource.token,
          }
        );
       
        if(response.data.message){
          return response.data.message as string;
        }
        return response.data;
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response && axiosError.response.status === 401) {
            // console.log("Unauthorized error:", axiosError.response.data);
            const responseDataAsString: string = JSON.stringify(
              axiosError.response.data
            );
            return responseDataAsString;
          } else {
            // กระทำเมื่อเกิดข้อผิดพลาดอื่น ๆ
            console.error("Other error:", axiosError);
          }
        } else {
          // กระทำเมื่อเกิดข้อผิดพลาดที่ไม่ใช่ axios error
          console.error("Non-Axios error:", error);
        }
        return [];
      }
    }
  );

const pageSlice = createSlice({
    name: "page",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
  
    },
  });
  
// Action creators
export default pageSlice.reducer;