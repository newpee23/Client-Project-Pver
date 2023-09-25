import React, { useState, useEffect, useCallback } from 'react';
import CardQuestionnaire from '../atoms/CardQuestionnaire';
import { allFromMaster } from '../../types/homeType';

const Questionnaire = React.memo(() => {
  const [allFrom, setAllFrom] = useState<allFromMaster[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('question');
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData.length > 0) {
        setAllFrom(parsedData);
      }
    }
  }, []);

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
            key={`card-${i}-${i}-${i}`}
            pageuser={null}
            pagetime={null}
          />
        );
      }
    }
    return cardQuestionnaires;
  }, []);

  return (
    allFrom.length > 0 ? (
      <section>
        {allFrom.map((item, index) => (
          <div key={item.id + item.f_id}>
            <div className="flex items-center justify-center text-purple-700 font-semibold text-2xl">
              <span>แบบสอบถามเล่มที่ {item.f_id}</span>
            </div>
            <div className="sml:pt-5">
              <div className="grid gap-4 m-5 sml:m-10 lgl:m-40 sml:mt-3 lgl:mt-3 grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 lgl:grid-cols-4 content-center">
                {generateCardItem(item)}
              </div>
            </div>
          </div>
        ))}
      </section>
    ) : (
      <div className="flex items-center justify-center h-72 text-purple-700 font-semibold text-2xl">
        <span>ไม่พบข้อมูลแบบสอบถาม</span>
      </div>
    )
  );
});

export default Questionnaire;
