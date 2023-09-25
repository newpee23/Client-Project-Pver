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

  const { loading, message } = useAppSelector((state) => state?.home);

  const checkToken = async () => {
    const user = localStorage.getItem("userLogin");

    if (!user) return;
    const parsedData: userLogin = JSON.parse(user);
    await checkTokenUser(parsedData.id);

  };

  useEffect(() => {
    checkToken();
  }, []);

  const generateQuestionnaire = (): JSX.Element => {
    return message ? (
      <div>
        <div className="flex items-center justify-center h-72 text-purple-700 font-semibold text-2xl">
          <span>{message}</span>
        </div>
      </div>
    ) : (
      <Questionnaire />
    );
  };

  return (
    <>
      <Navbar />
      <section>
        <FormHome />
        <DivHr divClass="flex justify-center" className="h-px mt-4 mb-6 bg-gray-400 border-0 dark:bg-gray-700 w-10/12 opacity-20" />
        {loading ? (
          <Loading setHeight="60vh" />
        ) : (
          generateQuestionnaire()
        )}
      </section>
    </>
  );
}

export default Home;
