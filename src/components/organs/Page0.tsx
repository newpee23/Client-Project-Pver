import { ChangeEvent, useState, useEffect } from "react"
import { ErrFromDataP0, FormDataP0, addressData, banData, pageComponents } from "../../types/pageType"
import DivHeadQuestion from "../atoms/DivHeadQuestion"
import DivHr from "../atoms/DivHr"
import InputFieldAuth from "../atoms/InputFieldAuth"
import { dataErrPage0, dataInsertP0, prefixName } from "../function/initialDataFrom"
import { SingleValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../store/store"
import DropDown from "../atoms/DropDown"
import { setAddressP0 } from "../../store/slices/pageSlices"
import { Opprovince } from "../../types/atomsType"

const Page0 = (props: pageComponents) => {

  const dispatch = useAppDispatch();
  const { ban } = useAppSelector((state) => state?.page);
  const { address } = useAppSelector((state) => state?.page);

  const initialDataFrom: FormDataP0 = props.status === "edit" ? { p0F1: "10", p0F2: "20", p0F3: 0, p0F4: "", p0F5: "", p0F6: "", p0F6Name: "", p0F7: "", p0F7Name: "", p0F8: "", p0F8Name: "", p0F9T: 0, p0F9: "", p0F10: "", p0F11T: 0, p0F11: "", p0F12: "" } : dataInsertP0;
  const [datafrom, setDataFrom] = useState<FormDataP0>(initialDataFrom);
  const [dataErr, setDataErr] = useState<ErrFromDataP0>(dataErrPage0);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Opprovince | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;
    setDataFrom((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const handleDropDownBan = (selectedOption: SingleValue<banData>) => {
    if (selectedOption !== null) {
      if (selectedOption && !Array.isArray(selectedOption)) {
        setDataFrom((prevData) => ({
          ...prevData,
          p0F3: selectedOption.value,
        }));
        dispatch(setAddressP0(selectedOption.value));
      } else {
        // Handle multi-select logic here if needed
      }
    } else {
      setDataFrom((prevData) => ({
        ...prevData,
        p0F3: 0,
      }));
      dispatch(setAddressP0(0));
    }
  };

  const handlePreFixNameF9 = (selectedOption: SingleValue<banData>) => {
    if (selectedOption !== null) {
      if (selectedOption && !Array.isArray(selectedOption)) {
        setDataFrom((prevData) => ({
          ...prevData,
          p0F9T: selectedOption.value,
        }));
        dispatch(setAddressP0(selectedOption.value));
      }
    } else {
      setDataFrom((prevData) => ({
        ...prevData,
        p0F9T: 0,
      }));
      dispatch(setAddressP0(0));
    }
  };

  const handlePreFixNameF11 = (selectedOption: SingleValue<banData>) => {
    if (selectedOption !== null) {
      if (selectedOption && !Array.isArray(selectedOption)) {
        const valPrefixName = prefixName.find((item) => item.value === selectedOption.value);
        if(valPrefixName){
          setSelectedOption(valPrefixName);
        }
        setDataFrom((prevData) => ({
          ...prevData,
          p0F11T: selectedOption.value,
        }));
        dispatch(setAddressP0(selectedOption.value));
      }
    } else {
      setSelectedOption(null);
      setDataFrom((prevData) => ({
        ...prevData,
        p0F11T: 0,
      }));
      dispatch(setAddressP0(0));
    }
  };

  const setF11F12FromChecked = () => {
    if (datafrom.p0F9T && datafrom.p0F9 && datafrom.p0F10) {
      const valPrefixName = prefixName.find((item) => item.value === datafrom.p0F9T);
      if(valPrefixName){
        setSelectedOption(valPrefixName);
      }
      setDataFrom((prevData) => ({
        ...prevData,
        p0F11T: datafrom.p0F9T,
        p0F11: datafrom.p0F9,
        p0F12: datafrom.p0F10,
      }));
      if(dataErr.isChecked){
        setDataErr((ErrData) => ({
          ...ErrData,
          isChecked: "",
        }));
        setDataFrom((prevData) => ({
          ...prevData,
          p0F11T: 0,
          p0F11: "",
          p0F12: "",
        }));
      }
   
    } else {
      setDataErr((ErrData) => ({
        ...ErrData,
        isChecked: "(*กรุณาเพิ่มข้อมูล ชื่อเจ้าของบ้าน)",
      }));
      setIsChecked(!isChecked)
    }
  }


  const setAddress = (data: addressData[]) => {
    setDataFrom((prevData) => ({
      ...prevData,
      p0F5: data[0].mo ? data[0].mo : '',
      p0F6: data[0].tambon_code ? data[0].tambon_code : '',
      p0F6Name: data[0].tombonName ? data[0].tombonName : '',
      p0F7: data[0].ampher_code ? data[0].ampher_code : '',
      p0F7Name: data[0].ampherName ? data[0].ampherName : '',
      p0F8: data[0].province_code ? data[0].province_code : '',
      p0F8Name: data[0].provinceName ? data[0].provinceName : '',
    }));

  }

  useEffect(() => {
    if (address.length > 0) {
      setAddress(address);
    }
  }, [address]);

  useEffect(() => {
    if (isChecked) {
      setF11F12FromChecked();
    }else{
      setDataFrom((prevData) => ({
        ...prevData,
        p0F11T: 0,
        p0F11: "",
        p0F12: "",
      }));
      setSelectedOption(null);
    }
  }, [isChecked]);

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

          <div className="p-5">
            <div className="overflow-x-auto w-full">
              {/* row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 hover:bg-gray-100">
                <div className="m-3"></div>
                <div className="m-3 mb-0">
                  <InputFieldAuth label="รหัสบ้าน" name="p0F1" type="number" placeholder="รหัสบ้าน ระบุตัวเลขเท่านั้น" required={true} value={datafrom.p0F1} onChange={(e) => handleInputChange(e)} className="w-full border border-purple-00 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
                <div className="m-3 mb-0">
                  <InputFieldAuth label="หลังคาเรือนที่" name="p0F2" type="number" placeholder="หลังคาเรือนที่ ระบุตัวเลขเท่านั้น" required={true} value={datafrom.p0F2} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
                <div className="m-3 mb-0">
                  <DropDown label="ชื่อหมู่บ้าน" isClearable={true} onChange={handleDropDownBan} isSearchable={true} required={true} placeholder="เลือกเชื่อหมู่บ้าน" options={ban} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
                </div>
                <div className="m-3 hidden md:block"></div>
              </div>
              {/* row 1 */}

              {/* row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 hover:bg-gray-100">
                <div className="m-3 mb-0">
                  <InputFieldAuth label="บ้านเลขที่" name="p0F4" type="text" placeholder="บ้านเลขที่" required={true} value={datafrom.p0F4} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
                <div className="m-3 mb-0">
                  <InputFieldAuth label="หมู่ที่" name="p0F5" type="text" placeholder="หมู่ที่" readonly={true} value={datafrom.p0F5} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
                <div className="m-3 mb-0">
                  <InputFieldAuth label="ตำบล" name="p0F6" type="text" placeholder="ตำบล" readonly={true} value={datafrom.p0F6Name} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
                <div className="m-3 mb-0">
                  <InputFieldAuth label="อำเภอ" name="p0F6" type="text" placeholder="อำเภอ" readonly={true} value={datafrom.p0F7Name} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
                <div className="m-3 mb-0">
                  <InputFieldAuth label="จังหวัด" name="p0F6" type="text" placeholder="จังหวัด" readonly={true} value={datafrom.p0F8Name} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                </div>
              </div>
              {/* row 2 */}

              <DivHr divClass="flex justify-center" className="h-px mt-5 mb-4 bg-purple-600 border-0 w-full" />
              {/* row 3,4 */}
              <div className="hover:bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 pt-2 lg:grid-cols-4 xl:grid-cols-5 ">
                  <div className="m-3 mb-0 flex items-center">
                    <label className="block mb-2 text-sm font-medium text-gray-900 label">
                      ชื่อเจ้าของบ้าน (เลือกคำนำหน้าชื่อ) <span className="text-red-700"><b>*</b></span>
                    </label>
                  </div>
                  <div className="max-w-full md:max-w-[180px] m-3 mb-0">
                    <DropDown label="" isClearable={true} onChange={handlePreFixNameF9} isSearchable={false} required={true} placeholder="เลือกคำนำหน้าชื่อ" options={prefixName} name="p0F9T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <div className="m-3 hidden lg:block"></div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="" name="p0F9" type="text" placeholder="ชื่อ" required={true} value={datafrom.p0F9} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="" name="p0F10" type="text" placeholder="นามสกุล" required={true} value={datafrom.p0F10} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                </div>
              </div>
              {/* row 3,4 */}

              {/* row 5,6 */}
              <div className="hover:bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 pt-2 lg:grid-cols-4 xl:grid-cols-5 ">
                  <div className="m-3 mb-0 flex items-center">
                    <label className="block mb-2 text-sm font-medium text-gray-900 label">
                      ชื่อผู้ให้ข้อมูล (เลือกคำนำหน้าชื่อ) <span className="text-red-700"><b>*</b></span>
                    </label>
                  </div>
                  <div className="max-w-full md:max-w-[180px] m-3 mb-0">
                    <DropDown label="" value={selectedOption} isClearable={true} onChange={handlePreFixNameF11} isSearchable={false} required={true} placeholder="เลือกคำนำหน้าชื่อ" options={prefixName} name="p0F11T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
                  </div>
                  <div className="m-3 mb-0">
                    <div className="flex items-center">
                      <input id="link-checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} type="checkbox" value="" className="w-5 h-5 text-purple-600 accent-purple-700 rounded focus:ring-purple-500 cursor-pointer" />
                      <label className="ml-2 text-sm font-medium text-gray-900">ใช้ข้อมูลเดียวกับ <span className="text-purple-600 hover:underline">ชื่อเจ้าของบ้าน</span></label>
                    </div>
                    {dataErr.isChecked && <label className="ml-2 text-sm font-medium text-red-700"><b>{dataErr.isChecked}</b></label>}
                  </div>
                </div>
           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <div className="m-3 hidden lg:block"></div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="" name="p0F11" type="text" placeholder="ชื่อ" required={true} value={datafrom.p0F11} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="" name="p0F12" type="text" placeholder="นามสกุล" required={true} value={datafrom.p0F12} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                </div>
              </div>
              {/* row 5,6*/}

              <DivHr divClass="flex justify-center" className="h-px mt-5 mb-4 bg-purple-600 border-0 w-full" />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page0