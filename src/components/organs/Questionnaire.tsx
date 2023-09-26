import { useCallback } from 'react';
import CardQuestionnaire from '../atoms/CardQuestionnaire';
import { allFromMaster } from '../../types/homeType';
import { clearStorageQuestion } from '../function/localStorage';
interface QuestionnaireProps {
  dataFrom: allFromMaster[];
}
const Questionnaire: React.FC<QuestionnaireProps> = ({ dataFrom }) => {
  if(dataFrom.length === 0){
    clearStorageQuestion();
  }
  const generateCardItem = useCallback((item: allFromMaster | null): JSX.Element[] => {
    const cardQuestionnaires: JSX.Element[] = [];
    if (item?.p0_user) {
      for (let i = 0; i < 18; i++) {
        const pageuser = (item as any)[`p${i}_user`] as number | null;
        const pagetime = (item as any)[`p${i}_time`] as Date | null;
        cardQuestionnaires.push(
          <CardQuestionnaire
            key={`card-${item.id}-${item.f_id}-${i}`}
            pageuser={pageuser}
            pagetime={pagetime}
          />
        );
      }
    } else {
      for (let i = 0; i < 18; i++) {
        cardQuestionnaires.push(
          <CardQuestionnaire
            key={`card-${i}`}
            pageuser={null}
            pagetime={null}
          />
        );
      }
    }
    return cardQuestionnaires;
  }, []);

  return (

    <section>

      <div >
        <div className="flex items-center justify-center text-purple-700 font-semibold text-2xl">
          <span>แบบสอบถามเล่มที่ </span>
        </div>
        <div className="sml:pt-5">
          <div className="grid gap-4 m-5 sml:m-10 lgl:m-40 sml:mt-3 lgl:mt-3 grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 lgl:grid-cols-4 content-center">
            {
              dataFrom.length > 0 ?
                dataFrom.map((item) => (
                  generateCardItem(item)
                )) 
              : 
                generateCardItem(null)
            }
          </div>
        </div>
      </div>

    </section>

  );
};

export default Questionnaire;
