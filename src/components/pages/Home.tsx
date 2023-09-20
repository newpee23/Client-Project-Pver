import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { checkTokenUser } from "../../store/slices/authSlices";
import { userLogin } from "../../types/authType";
import { backToLogin } from "../function/function";
import Navbar from "../organs/Navbar";
import FormHome from "../molecules/home/FormHome";
import DivHr from "../atoms/DivHr";
import Questionnaire from "../organs/Questionnaire";

type Props = {};

function Home({ }: Props) {

  const user = localStorage.getItem("userLogin");
  const dispatch = useAppDispatch();

  const checkToken = async () => {
    if (user) {
      let parsedData: userLogin = JSON.parse(user);
      try {
        const statusChToken = await dispatch(checkTokenUser(parsedData.id));
        if (statusChToken.payload === '"No Token, Authorization Denied"') {
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
    <Navbar />
    <section>
      <FormHome />
      <DivHr divClass="flex justify-center" className="h-px mt-4 mb-6 bg-gray-400 border-0 dark:bg-gray-700 w-10/12 opacity-20" />
      <Questionnaire />
    </section>
  
  </>);
}

export default Home;
