import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "../../api/config";
import { initialStateHome } from "../../types/homeType";

const initialState: initialStateHome = {
  allFrom: '',
  message: ''
};
const token = localStorage?.getItem('tokenAuth');
// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

// Check token
export const findQuestionnaire = createAsyncThunk<string , { f_id: string, id: number }>(
  "findQuestionnaire/loadAsync", async({ f_id, id }): Promise<string> => {
  
    try {
      const response: AxiosResponse = await axios.get(SERVER_APP_API+`/findQuestionnaire/${f_id}/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      })
      console.log(response.data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 401) {
          // console.log("Unauthorized error:", axiosError.response.data);
          const responseDataAsString:string = JSON.stringify(axiosError.response.data);
          return responseDataAsString;
        } else {
          // กระทำเมื่อเกิดข้อผิดพลาดอื่น ๆ
          console.error("Other error:", axiosError);
        }
      } else {
        // กระทำเมื่อเกิดข้อผิดพลาดที่ไม่ใช่ axios error
        console.error("Non-Axios error:", error);
      }
      return  '';
    }
  
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {

     // cleanState function
    cleanStateHome: (): initialStateHome => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
   
  },
});

// Action creators
export const { cleanStateHome} = homeSlice.actions;
export default homeSlice.reducer;
