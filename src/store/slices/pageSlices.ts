import { FormDataP0, addressData, initialStatePage } from "../../types/pageType";
import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "../../api/config";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { dataInsertP0 } from "../../components/function/initialDataFrom";

const initialState: initialStatePage = {
    ban: [],
    addressAll: [],
    address: [],
    loading: false,
    message: "",
    editDataPage0: { message:dataInsertP0 , status: false },
};

const token = localStorage?.getItem("tokenAuth");
// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

// ดึงข้อมูล Ban ชื่อหมู่บ้าน
export const findBan = createAsyncThunk<addressData[]|string>(
    "findBan/loadAsync", async (): Promise<addressData[]|string> => {
      try {
        const response: AxiosResponse = await axios.get(
          SERVER_APP_API + `/findBan`,
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

// ดึวข้อมูลหน้าแก้ไข Page0
export const findPage0EditData = createAsyncThunk<{ message:FormDataP0 | string , status: boolean } , string>(
  "findPage0EditData/loadAsync", async (fId:string):Promise<{ message:FormDataP0 | string , status: boolean }> => {
    try {
      const response: AxiosResponse = await axios.get(
        SERVER_APP_API + `/findPage0/${fId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "token-request": token,
          },
          cancelToken: cancelSource.token,
        }
      );
     
      if(typeof response.data.message === "string"){
        return { message:response.data.message , status: false };
      }
      return response.data as { message:FormDataP0 , status: boolean };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 401) {
          // console.log("Unauthorized error:", axiosError.response.data);
          const responseDataAsString: string = JSON.stringify(
            axiosError.response.data
          );
          return { message: responseDataAsString , status: false };
        } else {
          // กระทำเมื่อเกิดข้อผิดพลาดอื่น ๆ
          console.error("Other error:", axiosError);
        }
      } else {
        // กระทำเมื่อเกิดข้อผิดพลาดที่ไม่ใช่ axios error
        console.error("Non-Axios error:", error);
      }
      return { message: "เกิดข้อผิดพลาดการประมวลผล" , status: false };
    }
  }
);

const pageSlice = createSlice({
    name: "page",
    initialState: initialState,
    reducers: {  
      setLoadingPage: (state, action: PayloadAction<boolean>): void => {
        state.loading = action.payload;
      },
      setAddressP0: (state, action: PayloadAction<number>) => {
        const address = state.addressAll.find((item) => item.id == action.payload);
        state.address = address ? [address] : []; // ตั้ง state.address หากเจอไม่เจอก็ให้ค่าเป็น [] ว่าง
      }
    },
    extraReducers: (builder) => {
      // findBan
      builder.addCase(findBan.fulfilled, (state,action) => {
        if(Array.isArray(action.payload)){
          state.addressAll = action.payload;
          const formattedBan = action.payload.map(item => ({
            value: item.id,
            label: item.banProvince
          }));
          state.ban = formattedBan;
        }else{
          if(typeof action.payload === 'string'){
            state.message = action.payload;
          }
          state.addressAll = [];
        }
      });
      builder.addCase(findBan.rejected, (state, action) => {
        state.message = action.error.message || "";
      });
      // findPage0EditData
      builder.addCase(findPage0EditData.fulfilled, (state,action) => {
     
          if(typeof action.payload.message !== 'string'){
            state.editDataPage0.message = action.payload.message;
            state.editDataPage0.status = action.payload.status;
          }
       
      });
      builder.addCase(findPage0EditData.rejected, (state, action) => {
        state.message = action.error.message || "";
      });
    },
});
  
// Action creators
export const { setLoadingPage , setAddressP0 } = pageSlice.actions;
export default pageSlice.reducer;