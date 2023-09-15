import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { dataLogin, initialStateAuth, resDataLogin } from "../../types/authType";
import { SERVER_APP_API } from "../../api/config";

import { setLocalTokenUser, setLocalUser } from "../../components/function/localStorage";
import { checkLevelUser } from "../../components/function/function";

const initialState: initialStateAuth = {
  userLogin: undefined,
  loading: false,
  message: ''
};

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

// Login function
export const login = createAsyncThunk<resDataLogin , dataLogin>(
  "login/loadAsync",
  async (dataLogin): Promise<resDataLogin> => {
    try {
      const formData = new FormData();
      formData.append("m_username", dataLogin.username);
      formData.append("m_password", dataLogin.password);

      const response: AxiosResponse = await axios.post(
        SERVER_APP_API + "/LoginUser",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          cancelToken: cancelSource.token,
        }
      );

      const dataResponse:resDataLogin = response.data;
      
      return dataResponse;

    } catch (error: unknown) {
      let ErrStr:string = '';
      if (axios.isCancel(error)) {
        console.log("Request canceled : ", error);
        ErrStr = "Request canceled:"+ error;
      } else {
        console.log("Error : ", error);
        ErrStr = "Error : "+ error;
      }
      return { message: ErrStr,token: undefined,userLogin: undefined };
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
     // cleanState function
    cleanState: (): initialStateAuth => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.message = action.payload.message;
      if(action.payload.token && action.payload.userLogin){
        setLocalUser(action.payload.userLogin);
        setLocalTokenUser(action.payload.token);
        checkLevelUser(action.payload.userLogin);
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.message =  action.error.message || "";
    });
  },
});

// Action creators
export const { setLoading , cleanState} = authSlice.actions;
export default authSlice.reducer;
