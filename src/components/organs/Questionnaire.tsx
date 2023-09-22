import React, { useState, useEffect } from 'react';
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
  }, []); // ดึงข้อมูลเมื่อคอมโพเนนต์ถูกโหลดครั้งแรกเท่านั้น

  return (
    allFrom ? (
      <section>
        {allFrom.map((item, index) => (
          <div key={item.id + item.f_id}>
            <div className="flex items-center justify-center text-purple-700 font-semibold text-2xl">
              <span>แบบสอบถามเล่มที่ {item.f_id}</span>
            </div>
            <div className="sml:pt-5">
              <div className="grid gap-4 m-5 sml:m-10 lgl:m-40 sml:mt-3 lgl:mt-3 grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 lgl:grid-cols-4 content-center">
                <CardQuestionnaire pageuser={item.p0_user} pagetime={item.p0_time} />
                <CardQuestionnaire pageuser={item.p1_user} pagetime={item.p1_time} />
                <CardQuestionnaire pageuser={item.p2_user} pagetime={item.p2_time} />
                <CardQuestionnaire pageuser={item.p3_user} pagetime={item.p3_time} />
                <CardQuestionnaire pageuser={item.p4_user} pagetime={item.p4_time} />
                <CardQuestionnaire pageuser={item.p5_user} pagetime={item.p5_time} />
                <CardQuestionnaire pageuser={item.p6_user} pagetime={item.p6_time} />
                <CardQuestionnaire pageuser={item.p7_user} pagetime={item.p7_time} />
                <CardQuestionnaire pageuser={item.p8_user} pagetime={item.p8_time} />
                <CardQuestionnaire pageuser={item.p9_user} pagetime={item.p9_time} />
                <CardQuestionnaire pageuser={item.p10_user} pagetime={item.p10_time} />
                <CardQuestionnaire pageuser={item.p11_user} pagetime={item.p11_time} />
                <CardQuestionnaire pageuser={item.p12_user} pagetime={item.p12_time} />
                <CardQuestionnaire pageuser={item.p13_user} pagetime={item.p13_time} />
                <CardQuestionnaire pageuser={item.p14_user} pagetime={item.p14_time} />
                <CardQuestionnaire pageuser={item.p15_user} pagetime={item.p15_time} />
                <CardQuestionnaire pageuser={item.p16_user} pagetime={item.p16_time} />
                <CardQuestionnaire pageuser={item.p17_user} pagetime={item.p17_time} />
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
