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
import DivButton from "../atoms/DivButton"
import { validateFormP0 } from "../function/function"

const Page0 = (props: pageComponents) => {

  const dispatch = useAppDispatch();
  const { ban } = useAppSelector((state) => state?.page);
  const { address } = useAppSelector((state) => state?.page);

  const initialDataFrom: FormDataP0 = props.status === "edit" ? { p0F1: "", p0F2: "", p0F3: 0, p0F4: "", p0F5: "", p0F6: "", p0F6Name: "", p0F7: "", p0F7Name: "", p0F8: "", p0F8Name: "", p0F9T: 0, p0F9: "", p0F10: "", p0F11T: 0, p0F11: "", p0F12: "", p0F13: "", p0F14: "", p0F15: "", p0F16: "", p0F17: "", p0F18T: 0, p0F18: "", p0F19: "", p0F20T: 0, p0F20: "", p0F21: "", p0F22: "", p0F23: "", p0F24: "" } : dataInsertP0;
  const [datafrom, setDataFrom] = useState<FormDataP0>(initialDataFrom);
  const [dataErr, setDataErr] = useState<ErrFromDataP0>(dataErrPage0);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckFrom, setIdCheckFrom] = useState(false);
  const [selectedOptionP0F11T, setSelectedOptionP0F11T] = useState<Opprovince | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    const updateData = (newValue: any = value) => {
      setDataFrom((prevData) => ({
        ...prevData,
        [name]: newValue.trim(),
      }));
    };
  
    if (isChecked && (name === 'p0F9' || name === 'p0F10')) {
      setDataFrom((prevData) => ({
        ...prevData,
        p0F11T: 0,
        p0F11: "",
        p0F12: "",
      }));
      setSelectedOptionP0F11T(null);
      setIsChecked(false);
    } else {
      updateData();
    }
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

  const setF11F12FromChecked = () => {
    if (datafrom.p0F9T && datafrom.p0F9 && datafrom.p0F10) {
      const valPrefixName = prefixName.find((item) => item.value === datafrom.p0F9T);
      if (valPrefixName) {
        setSelectedOptionP0F11T(valPrefixName);
      }
      setDataFrom((prevData) => ({
        ...prevData,
        p0F11T: datafrom.p0F9T,
        p0F11: datafrom.p0F9,
        p0F12: datafrom.p0F10,
      }));
      if (dataErr.isChecked) {
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

  const handlePreFixName = (selectedOption: SingleValue<banData>, field: string) => {
    if (selectedOption !== null) {
      if (selectedOption && !Array.isArray(selectedOption)) {
        if(field === 'p0F9T' && isChecked){
          setIsChecked(false);
        }
        const valPrefixName = prefixName.find((item) => item.value === selectedOption.value);
        if (valPrefixName && field === 'p0F11T') {
          setSelectedOptionP0F11T(valPrefixName);
        }
        setDataFrom((prevData) => ({
          ...prevData,
          [field]: selectedOption.value,
        }));
        dispatch(setAddressP0(selectedOption.value));
      }
    } else {
      if(field === 'p0F9T' && isChecked){
        setIsChecked(false);
      }
      if(field === 'p0F11T'){
        setSelectedOptionP0F11T(null);
      }
      setDataFrom((prevData) => ({
        ...prevData,
        [field]: 0,
      }));
      dispatch(setAddressP0(0));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const newFormErr = validateFormP0(datafrom);
    console.log(newFormErr);
  }

  useEffect(() => {
    if (address.length > 0) {
      setAddress(address);
    }
  }, [address]);

  useEffect(() => {
    if (isChecked) {
      setF11F12FromChecked();
    } else {
      setDataFrom((prevData) => ({
        ...prevData,
        p0F11T: 0,
        p0F11: "",
        p0F12: "",
      }));
      setSelectedOptionP0F11T(null);
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
            <form onSubmit={handleSubmit}>
              
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
                    <DropDown label="ชื่อหมู่บ้าน" isClearable={true} onChange={handleDropDownBan} isSearchable={true} required={true} placeholder="เลือกชื่อหมู่บ้าน" options={ban} name="p0F3" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
                  </div>
                  <div className="m-3 hidden md:block"></div>
                </div>
                {/* row 1 */}
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 hover:bg-gray-100">
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="บ้านเลขที่" name="p0F4" type="text" placeholder="บ้านเลขที่" required={true} value={datafrom.p0F4} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="หมู่ที่" name="p0F5" type="text" placeholder="หมู่ที่ (เลือกชื่อหมู่บ้าน)" readonly={true} value={datafrom.p0F5} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="ตำบล" name="p0F6" type="text" placeholder="ตำบล (เลือกชื่อหมู่บ้าน)" readonly={true} value={datafrom.p0F6Name} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="อำเภอ" name="p0F7" type="text" placeholder="อำเภอ (เลือกชื่อหมู่บ้าน)" readonly={true} value={datafrom.p0F7Name} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                  <div className="m-3 mb-0">
                    <InputFieldAuth label="จังหวัด" name="p0F8" type="text" placeholder="จังหวัด (เลือกชื่อหมู่บ้าน)" readonly={true} value={datafrom.p0F8Name} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                  </div>
                </div>
                {/* row 2 */}
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 3,4 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 pt-2 lg:grid-cols-4 xl:grid-cols-5 ">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label">
                        ชื่อเจ้าของบ้าน (เลือกคำนำหน้าชื่อ) <span className="text-red-700"><b>*</b></span>
                      </label>
                    </div>
                    <div className="max-w-full md:max-w-[180px] m-3 mb-0">
                      <DropDown label="" isClearable={true} onChange={(selectedOption) => handlePreFixName(selectedOption, "p0F9T")} isSearchable={false} required={true} placeholder="เลือกคำนำหน้าชื่อ" options={prefixName} name="p0F9T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
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
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 5,6 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 pt-2 lg:grid-cols-4 xl:grid-cols-5 ">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label">
                        ชื่อผู้ให้ข้อมูล (เลือกคำนำหน้าชื่อ) <span className="text-red-700"><b>*</b></span>
                      </label>
                    </div>
                    <div className="max-w-full md:max-w-[180px] m-3 mb-0">
                      <DropDown label="" value={selectedOptionP0F11T} isClearable={true} onChange={(selectedOption) => handlePreFixName(selectedOption, "p0F11T")} isDisabled={isChecked} isSearchable={false} required={true} placeholder="เลือกคำนำหน้าชื่อ" options={prefixName} name="p0F11T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
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
                      <InputFieldAuth label="" name="p0F11" type="text" placeholder="ชื่อ" required={true} value={datafrom.p0F11} readonly={isChecked} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F12" type="text" placeholder="นามสกุล" required={true} value={datafrom.p0F12} readonly={isChecked} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                  </div>
                </div>
                {/* row 5,6*/}
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 7 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label">
                        หมายเลขโทรศัพท์ที่ติดต่อได้ (บ้าน/มือถือ)
                      </label>
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F13" type="text" placeholder="หมายเลขโทรศัพท์" value={datafrom.p0F13} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                  </div>
                </div>
                {/* row 7 */}
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 8,9 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                        จำนวนครอบครัวในครัวเรือน <span className="text-red-700"><b>*</b></span>
                      </label>
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F14" type="number" required={true} placeholder="จำนวนครอบครัว" value={datafrom.p0F14} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                    <div className="m-3 mb-0 items-center  hidden lg:flex">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                        ครอบครัว
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                        จำนวนสมาชิกทั้งหมดในครัวเรือน <span className="text-red-700"><b>*</b></span>
                      </label>
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F15" type="number" required={true} placeholder="จำนวนคน" value={datafrom.p0F15} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                    <div className="m-3 mb-0 items-center hidden lg:flex">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                        คน
                      </label>
                    </div>
                    <div className="m-3 mb-0 flex">
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          ชาย
                        </label>
                      </div>
                      <div className="ml-2 mr-2">
                        <InputFieldAuth label="" name="p0F16" type="number" required={true} placeholder="จำนวนเพศชาย" value={datafrom.p0F16} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                      </div>
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          คน
                        </label>
                      </div>
                    </div>
                    <div className="m-3 mb-0 flex">
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          หญิง
                        </label>
                      </div>
                      <div className="ml-2 mr-2">
                        <InputFieldAuth label="" name="p0F17" type="number" required={true} placeholder="จำนวนเพศหญิง" value={datafrom.p0F17} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                      </div>
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          คน
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 8,9 */}
              </div>

              <div className="overflow-x-auto w-full">
                <div className="flex justify-between bg-violet-800">
                  <div className="text:md md:text-lg p-2 sml:p-3 tracking-tight text-white ">สำหรับทีมสำรวจข้อมูล</div>
                </div>
                {/* row 10 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-5">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label">
                        ชื่อผู้สำรวจ 1. (เลือกคำนำหน้าชื่อ) <span className="text-red-700"><b>*</b></span>
                      </label>
                    </div>
                    <div className="max-w-full md:max-w-[180px] m-3 mb-0">
                      <DropDown label="" isClearable={true} onChange={(selectedOption) => handlePreFixName(selectedOption, "p0F18T")} isSearchable={false} required={true} placeholder="เลือกคำนำหน้าชื่อ" options={prefixName} name="p0F18T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="m-3 hidden lg:block"></div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F18" type="text" placeholder="ชื่อ" required={true} value={datafrom.p0F18} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F19" type="text" placeholder="นามสกุล" required={true} value={datafrom.p0F19} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                  </div>
                </div>
                {/* row 10 */}
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 11 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 pt-2 lg:grid-cols-4 xl:grid-cols-5 ">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label">
                        ชื่อผู้สำรวจ 2. (เลือกคำนำหน้าชื่อ)
                      </label>
                    </div>
                    <div className="max-w-full md:max-w-[180px] m-3 mb-0">
                      <DropDown label="" isClearable={true} onChange={(selectedOption) => handlePreFixName(selectedOption, "p0F20T")} isSearchable={false} required={false} placeholder="เลือกคำนำหน้าชื่อ" options={prefixName} name="p0F18T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="m-3 hidden lg:block"></div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F20" type="text" required={false}  placeholder="ชื่อ" value={datafrom.p0F20} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F21" type="text" required={false} placeholder="นามสกุล" value={datafrom.p0F21} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                  </div>
                </div>
                {/* row 11 */}
                <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
                {/* row 12 */}
                <div className="hover:bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="m-3 mb-0 flex items-center">
                      <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                        สำรวจ ณ วันที่ <span className="text-red-700"><b>*</b></span>
                      </label>
                    </div>
                    <div className="m-3 mb-0">
                      <InputFieldAuth label="" name="p0F22" type="date" required={true} placeholder="จำนวนคน" value={datafrom.p0F22} onChange={(e) => handleInputChange(e)} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    </div>
                    <div className="m-3 mb-0 hidden lg:block"></div>
                    <div className="m-3 mb-0 flex justify-start">
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          เริ่มสำรวจเวลา
                        </label>
                      </div>
                      <div className="ml-2 mr-2">
                        <InputFieldAuth label="" name="p0F23" type="time" required={true} value={datafrom.p0F23} onChange={(e) => handleInputChange(e)} className="w-full border min-w-[100px] border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                      </div>
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          น.
                        </label>
                      </div>
                    </div>
                    <div className="m-3 mb-0 flex justify-start">
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          เสร็จเวลา
                        </label>
                      </div>
                      <div className="ml-2 mr-2">
                        <InputFieldAuth label="" name="p0F24" type="time" required={true} value={datafrom.p0F24} onChange={(e) => handleInputChange(e)} className="w-full min-w-[100px] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                      </div>
                      <div className="flex items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 label mt-[-5px]">
                          น.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row 12 */}
              </div>
          
              <DivHr divClass="flex justify-center" className="h-px mt-1 mb-1 bg-gray-200 border-0 w-full" />
              {isCheckFrom ? ''
                :
                <DivButton textBtn="ตรวจสอบข้อมูล" type="submit" divClass="text-center" className="mt-5 focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-md text-sm px-4 py-2" />}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page0