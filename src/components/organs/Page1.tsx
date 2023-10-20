import { useAppSelector } from "../../store/store"
import { Opprovince } from "../../types/atomsType"
import { pageComponents } from "../../types/pageType"
import DivButton from "../atoms/DivButton"
import DivHeadQuestion from "../atoms/DivHeadQuestion"
import DivHr from "../atoms/DivHr"
import DropDown from "../atoms/DropDown"
import InputFieldAuth from "../atoms/InputFieldAuth"
import { dataSelectP1F19, dataSelectP1F18, dataSelectP1F13, dataSelectP1F12, dataSelectP1F11, dataSelectP1F10, dataSelectP1F9, dataSelectP1F5, genderSelect, prefixName, dataSelectP1F20, dataSelectP1F22, dataSelectP1F29, dataSelectConform } from "../function/initialDataFrom"


const Page1 = (props: pageComponents) => {
 
  const { page1 } = useAppSelector((state) => state?.page);

  return (
    <>
      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
        <p className="font-semibold text-purple-800">หมายเหตุ</p>
        <p className="text-sm"><span className="text-red-600">* กรุณากรอกข้อมูล</span> หากเป็นการระบุตัวเลขแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ 0</u> หากเป็นการระบุตัวอักษรแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ -</u></p>
      </div>

      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 bg-white border border-gray-200 rounded-xl shadow">
        <div>
          <DivHeadQuestion head={"ตอนที่ 1 ข้อมูลพื้นฐานเกี่ยวกับสมาชิกในครัวเรือน / เพิ่มข้อมูล"} status={props.status} editPage="0" />
          <DivHr divClass="flex justify-center" className="h-px bg-gray-200 border-0 w-full" />

            <div className="my-5 py-5 px-5 relative overflow-x-auto">
              <table className="table-auto text-sm text-left text-gray-500">
                <thead>
                  <tr className="bg-purple-100 text-gray-900">
                    <th rowSpan={2} className="min-w-[200px] align-top text-center">ครอบครัวที่</th>
                    <th rowSpan={1} className="min-w-[200px]">1.คำนำหน้า ชื่อ-นามสกุล</th>
                    <th rowSpan={2} className="min-w-[250px] align-top">1.1.ชื่อ-นามสกุล</th>
                    <th rowSpan={2} className="min-w-[270px] align-top">3.ความสัมพันธ์กับเจ้าบ้าน</th>
                    <th rowSpan={1} className="min-w-[200px]">4.วัน/เดือน/ปี ค.ศ. เกิด</th>
                    <th rowSpan={2} className="min-w-[150px] align-top text-center">6.เพศ</th>
                    <th rowSpan={2} className="min-w-[230px] align-top text-center">7.การทะเบียนราษฎร์</th>
                    <th rowSpan={2} className="min-w-[185px] align-top text-center">8.สถานภาพ</th>
                    <th rowSpan={2} className="min-w-[250px] align-top">9.การวางแผนครอบครัว</th>
                    <th rowSpan={2} className="min-w-[230px] align-top">10.ศาสนา/ความเชื่อ</th>
                    <th rowSpan={2} className="min-w-[230px] align-top">11.ระดับการศึกษา</th>
                    <th rowSpan={1} colSpan={4}>12.การใช้ภาษาไทย</th>
                    <th rowSpan={2} className="min-w-[230px] align-top">13.อาศัยที่อยู่</th>
                    <th rowSpan={2} className="min-w-[300px] align-top">14.สถานภาพการทำงานปัจจุบัน</th>
                    <th rowSpan={1} colSpan={4} className=" ">15.อาชีพและรายได้ในปีที่ผ่านมา</th>
                    <th rowSpan={2} className="min-w-[300px] align-top">16.สถานภาพการทำงานในปีหน้า</th>
                    <th rowSpan={1} colSpan={4} className=" ">17.อาชีพและรายได้ในปีหน้า</th>
                  </tr>
                  <tr className="bg-purple-100 text-gray-900">
                    <th colSpan={1} className=" ">2.เลขบัตรประจำตัวประชาชน</th>
                    <th colSpan={6} className=" ">5.อายุ</th>
                    <th colSpan={1} className="min-w-[150px] text-center">ฟัง</th>
                    <th colSpan={1} className="min-w-[150px] text-center">พูด</th>
                    <th colSpan={1} className="min-w-[150px] text-center">อ่าน</th>
                    <th colSpan={1} className="min-w-[150px] text-center">เขียน</th>
                    <th colSpan={1} className="min-w-[200px] text-center">อาชีพ</th>
                    <th colSpan={1} className="min-w-[200px] text-center">สถานที่ทำงาน</th>
                    <th colSpan={1} className="min-w-[150px] text-center">รายได้ต่อเดือน(บาท)</th>
                    <th colSpan={1} className="min-w-[150px] text-center">รายได้ปีเดือน(บาท)</th>
                    <th colSpan={1} className="min-w-[200px] text-center">อาชีพ</th>
                    <th colSpan={1} className="min-w-[200px] text-center">สถานที่ทำงาน</th>
                    <th colSpan={1} className="min-w-[150px] text-center">รายได้ต่อเดือน(บาท)</th>
                    <th colSpan={1} className="min-w-[150px] text-center">รายได้ปีเดือน(บาท)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover-tr">
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกครอบครัวที่" options={page1.message.length > 0 ? page1.message as Opprovince[] : []} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td>
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกคำนำหน้า" options={prefixName} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="text" placeholder="หมายเลขบัตรประชาชน" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </td>
                    <td>
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="text" placeholder="ชื่อ" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="text" placeholder="นามสกุล" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกความสัมพันธ์กับเจ้าบ้าน" options={dataSelectP1F5} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td>
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="date" placeholder="" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="number" placeholder="อายุ" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกเพศ" options={genderSelect} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกการทะเบียนราษฎร์" options={dataSelectP1F9} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกสถานภาพ" options={dataSelectP1F10} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกการวางแผนครอบครัว" options={dataSelectP1F11} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกศาสนา/ความเชื่อ" options={dataSelectP1F12} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกระดับการศึกษา" options={dataSelectP1F13} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="การฟัง" options={dataSelectConform} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="การพูด" options={dataSelectConform} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="การอ่าน" options={dataSelectConform} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="การเขียน" options={dataSelectConform} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกอาศัยอยู่ที่" options={dataSelectP1F18} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกสถานภาพการทำงานปัจจุบัน" options={dataSelectP1F19} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกอาชีพ" options={dataSelectP1F29} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกสถานที่ทำงาน" options={dataSelectP1F22} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="number" placeholder="รายได้ต่อเดือน" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    </td>
                    <td className="align-top">
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="number" placeholder="รายได้ต่อปี" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกสถานภาพการทำงานในปีหน้า" options={dataSelectP1F19} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกอาชีพ" options={dataSelectP1F29} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <DropDown label="" isClearable={true} value={null} isDisabled={false} isSearchable={true} required={true} placeholder="เลือกสถานที่ทำงาน" options={dataSelectP1F22} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    </td>
                    <td className="align-top">
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="number" placeholder="รายได้ต่อเดือน" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    </td>
                    <td className="align-top">
                      <InputFieldAuth label="" readonly={false} minLength={0} name="p0F2" type="number" placeholder="รายได้ต่อปี" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={23}></td>
                    <td colSpan={3}>
                    <DivButton textBtn="บันทึกข้อมูล" type="button" divClass="text-center" className={`focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-green-300 focus:ring-4 font-medium rounded-md text-md px-5 py-3`} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> 

        </div>
      </div>

  
    </>
  )
}

export default Page1