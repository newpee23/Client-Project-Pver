import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { dataLogin, initialStateAuth, resDataLogin } from "../../types/authType";
import { SERVER_APP_API } from "../../api/config";

const initialState: initialStateAuth = {
  loading: false,
  userLogin: null,
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
  reducers: {},
  extraReducers: (builder) => {
    // login/loadAsync function
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators

export default authSlice.reducer;
