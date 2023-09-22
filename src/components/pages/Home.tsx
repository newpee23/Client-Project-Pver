import { useEffect } from "react";
import { userLogin } from "../../types/authType";
import Navbar from "../organs/Navbar";
import FormHome from "../molecules/home/FormHome";
import DivHr from "../atoms/DivHr";
import Questionnaire from "../organs/Questionnaire";
import Loading from "../atoms/Loading";
import { checkTokenUser } from "../../api/homeApi";
import { useAppSelector } from "../../store/store";

function Home() {

  const user = localStorage.getItem("userLogin");
  const { loading } = useAppSelector((state) => state?.home);
  const checkToken = async () => {
    if (!user) return;
    const parsedData: userLogin = JSON.parse(user);
    await checkTokenUser(parsedData.id);
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
        {loading ? (
        <Loading setHeight="60vh" />
        ) : (
        <Questionnaire />
        )}
      </section>
    </>
  );
}

export default Home;
