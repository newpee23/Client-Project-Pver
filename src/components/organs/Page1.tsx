import { pageComponents } from "../../types/pageType"
import DivHeadQuestion from "../atoms/DivHeadQuestion"
import DivHr from "../atoms/DivHr"

const Page1 = (props: pageComponents) => {
  const songData = [
    {
      song: 'The Sliding Mr. Bones (Next Stop, Pottersville)',
      artist: 'Malcolm Lockyer',
      year: '1961',
    },
    {
      song: 'Witchy Woman',
      artist: 'The Eagles',
      year: '1972',
    },
    {
      song: 'Shining Star',
      artist: 'Earth, Wind, and Fire',
      year: '1975',
    },
  ];

  return (
    <>
      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
        <p className="font-semibold text-purple-800">หมายเหตุ</p>
        <p className="text-sm"><span className="text-red-600">* กรุณากรอกข้อมูล</span> หากเป็นการระบุตัวเลขแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ 0</u> หากเป็นการระบุตัวอักษรแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ -</u></p>
      </div>
      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 bg-white border border-gray-200 rounded-xl shadow">
        <div>
          <DivHeadQuestion head={props.status === "insert" ? "ตอนที่ 1 ข้อมูลพื้นฐานเกี่ยวกับสมาชิกในครัวเรือน / เพิ่มข้อมูล" : "ตอนที่ 1 ข้อมูลพื้นฐานเกี่ยวกับสมาชิกในครัวเรือน / แก้ไขข้อมูล"} status={props.status} editPage="0" />
          <DivHr divClass="flex justify-center" className="h-px bg-gray-200 border-0 w-full" />

          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="table-auto text-sm text-left text-gray-500 ">
                <thead>
                  <tr>
                    <th rowSpan={1} className="min-w-[80px] text-center">ครอบครัวที่</th>
                    <th colSpan={2} className="min-w-[180px]">1.คำนำหน้า ชื่อ-นามสกุล</th>
                    <th rowSpan={2} className="min-w-[150px]">3.ความสัมพันธ์กับเจ้าบ้าน</th>
                    <th rowSpan={2} className="min-w-[130px]">4.วัน/เดือน/ปี พ.ศ.เกิด</th>
                    <th rowSpan={2} >6.เพศ</th>
                    <th rowSpan={2} >7.การทะเบียนราษฎร์</th>
                    <th rowSpan={2} >8.สถานภาพ</th>
                    <th rowSpan={2} >9.การวางแผนครอบครัว</th>
                    <th rowSpan={2} >10.ศาสนา/ความเชื่อ</th>
                    <th rowSpan={2} >11.ระดับการศึกษา</th>
                    <th rowSpan={2} >12.การใช้ภาษาไทย</th>
                    <th rowSpan={2} >13.อาศัยที่อยู่</th>
                    <th rowSpan={2} >14.สถานภาพการทำงานปัจจุบัน</th>
                    <th rowSpan={2} >15.อาชีพและรายได้ในปีที่ผ่านมา</th>
                    <th rowSpan={2} >16.สถานภาพการทำงานในปีหน้า</th>
                    <th rowSpan={2} >17.อาชีพและรายได้ในปีหน้า</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th colSpan={2} className="min-w-[180px]">2.เลขบัตรประจำตัวประชาชน</th>
                  </tr>

                </thead>
                <tbody>
                  {songData.map((song, index) => (
                    <tr key={index}>
                      <td>{song.song}</td>
                      <td>{song.artist}</td>
                      <td>{song.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page1