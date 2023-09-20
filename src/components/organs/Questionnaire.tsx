import { useEffect } from "react";
import { useAppSelector } from "../../store/store";

type Props = {}

const Questionnaire = (props: Props) => {
    const { allFrom  } = useAppSelector((state) => state?.home);
    useEffect(() => {
        
      }, []);
  return (
    <div>Questionnaire : {allFrom}</div>
  )
}

export default Questionnaire;