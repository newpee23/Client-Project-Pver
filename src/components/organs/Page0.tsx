import { ChangeEvent, useState } from "react"
import { FormDataP0, banData, pageComponents } from "../../types/pageType"
import DivHeadQuestion from "../atoms/DivHeadQuestion"
import DivHr from "../atoms/DivHr"
import InputFieldAuth from "../atoms/InputFieldAuth"
import { dataInsertP0 } from "../function/initialDataFrom"
import Select, { SingleValue } from "react-select";
import { useAppSelector } from "../../store/store"
import DropDown from "../atoms/DropDown"
// import { useAppSelector } from "../../store/store"


const Page0 = (props: pageComponents) => {

  const { ban } = useAppSelector((state) => state?.page);
  const initialDataFrom: FormDataP0 = props.status === "edit" ? { p0F1: "10", p0F2: "20", p0F3: 0 } : dataInsertP0;
  const [datafrom, setDataFrom] = useState<FormDataP0>(initialDataFrom);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataFrom((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropDownBan = (selectedOption: SingleValue<banData>) => {
    if(selectedOption !== null){
      if (selectedOption && !Array.isArray(selectedOption)) {
        setDataFrom((prevData) => ({
          ...prevData,
          p0F3: selectedOption.value,
        }));
      } else {
        // Handle multi-select logic here if needed
      }
    }else{
      setDataFrom((prevData) => ({
        ...prevData,
        p0F3: 0,
      }));
    }
  };

  return (
    <>
      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
        <p className="font-semibold text-purple-800">หมายเหตุ</p>
        <p className="text-sm"><span className="text-red-600">* กรุณากรอกข้อมูล</span> หากเป็นการระบุตัวเลขแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ 0</u> หากเป็นการระบุตัวอักษรแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ -</u></p>
      </div>
      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 bg-white border border-gray-200 rounded-xl shadow">
        <div>
          <DivHeadQuestion head="หน้าหลัก" status={props.status} />
          <DivHr divClass="flex justify-center" className="h-px bg-gray-200 border-0 w-full" />

          <div className="relative overflow-x-auto p-5">
            {/* row 1 */}
            <div className="flex hover:bg-gray-100">
              <div className="min-w-[275px] m-3"></div>
              <div className="min-w-[275px] m-3 mb-0">
                <InputFieldAuth label="รหัสบ้าน" name="p0F1" type="number" placeholder="รหัสบ้าน ระบุตัวเลขเท่านั้น" required={true} value={datafrom.p0F1} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
              </div>
              <div className="min-w-[275px] m-3 mb-0">
                <InputFieldAuth label="หลังคาเรือนที่" name="p0F2" type="number" placeholder="หลังคาเรือนที่ ระบุตัวเลขเท่านั้น" required={true} value={datafrom.p0F2} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
              </div>
              <div className="min-w-[275px] m-3 mb-0">
              <DropDown label="ชื่อหมู่บ้าน" isClearable={true} onChange={handleDropDownBan} isSearchable={true} required={true} placeholder="เลือกเชื่อหมู่บ้าน" options={ban} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
              </div>
            </div>
            {/* row 1 */}
            {/* row 1 */}
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
            <div className="flex">
              <div className="min-w-[275px] m-3"></div>
            </div>
      
            {/* row 1 */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page0