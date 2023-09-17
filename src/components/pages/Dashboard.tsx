import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { checkTokenUser } from "../../store/slices/authSlices";
import { userLogin } from "../../types/authType";
import { backToLogin } from "../function/function";
import Navbar from "../organs/Navbar";

type Props = {}

 const Dashboard = ({}: Props) => {
  const user = localStorage.getItem("userLogin");
  const dispatch = useAppDispatch();

  const checkToken = async () => {
    if (user) {
      let parsedData: userLogin = JSON.parse(user);
      try {
        const statusChToken = await dispatch(checkTokenUser(parsedData.id));
        if (statusChToken.payload === "No Token, Authorization Denied") {
          backToLogin();
        }
      } catch (error) {
        backToLogin();
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
    <Navbar/>
    <div>Dashbord</div>
    </>
  )
}

export default Dashboard;