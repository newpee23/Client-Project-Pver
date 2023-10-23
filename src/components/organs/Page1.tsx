import { ChangeEvent, useState } from "react"
import { useAppSelector } from "../../store/store"
import { Opprovince } from "../../types/atomsType"
import { FormDataP1ReadOnlyType, FormDataP1Type, FromP1Err, pageComponents } from "../../types/pageType"
import DivButton from "../atoms/DivButton"
import DivHeadQuestion from "../atoms/DivHeadQuestion"
import DivHr from "../atoms/DivHr"
import DropDown from "../atoms/DropDown"
import InputFieldAuth from "../atoms/InputFieldAuth"
import { dataSelectP1F19, dataSelectP1F18, dataSelectP1F13, dataSelectP1F12, dataSelectP1F11, dataSelectP1F10, dataSelectP1F9, dataSelectP1F5, prefixName, dataSelectP1F22, dataSelectP1F29, dataSelectConform, dataInsertP1, dataInsertReadonlyP1, dataFromP1Err } from "../function/initialDataFrom"
import { SingleValue } from "react-select"
import { currentDateAge } from "../function/function"
import { validateFormP1 } from "../function/validateForm"
import DivTextMesErr from "../atoms/DivTextMesErr"
import ModalSave from "../atoms/ModalSave"
import LoadingCheck from "../atoms/LoadingCheck"

const Page1 = (props: pageComponents) => {

  const { page1 } = useAppSelector((state) => state?.page);
  const [dataFromPage1, setDataFromPage1] = useState<FormDataP1Type>(dataInsertP1);
  const [inputReadOnly, setInputReadOnly] = useState<FormDataP1ReadOnlyType>(dataInsertReadonlyP1);
  const [errTxtErr, setErrTxtErr] = useState<FromP1Err>(dataFromP1Err);
  const [isCheckFrom, setIsCheckFrom] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataFrom(name, value);
    switch (name) {
      case "p1F6":
        setDataFrom("p1F7", currentDateAge(value));
        break;
      case "p1F22":
        handleP1F22("p1F22", value);
        break;
      case "p1F27":
        handleP1F22("p1F27", value);
        break;
      default:
        break;
    }

  };

  const handleChangeDropDown = (selectedOption: SingleValue<Opprovince>, name: string) => {
    setSelectFrom(name, selectedOption);
    switch (name) {
      case "p1F2T":
        handleP1F2T(selectedOption);
        break;
      case "p1F19":
        handleP1F19(selectedOption, "p1F19");
        break;
      case "p1F24":
        handleP1F19(selectedOption, "p1F24");
        break;
      default:
        break;
    }
  };

  const handleP1F22 = (name: string, value: string) => {
    let numberValue: number = parseFloat(value);
    const total: number = (numberValue * 12);
    if (!isNaN(numberValue)) {
      let nameTotal: string = "";
      if (name === "p1F22") nameTotal = "p1F23";
      if (name === "p1F27") nameTotal = "p1F28";
      setDataFrom(nameTotal, total.toString());
    }
  }

  const handleP1F2T = (selectedOption: SingleValue<Opprovince>) => {
    if (selectedOption?.value === 1 || selectedOption?.value === 4) {
      setSelectFrom("p1F8", { label: "ชาย", value: 1 });
    } else if (selectedOption?.value === 2 || selectedOption?.value === 3 || selectedOption?.value === 5) {
      setSelectFrom("p1F8", { label: "หญิง", value: 2 });
    } else if (selectedOption === null) {
      setSelectFrom("p1F8", null);
    }
  };

  const handleP1F19 = (selectedOption: SingleValue<Opprovince>, name: string) => {
    if (name === "p1F19") {
      if (selectedOption?.value === 8 || selectedOption?.value === 9) {
        if (dataFromPage1.p1F20) setSelectFrom("p1F20", null);
        if (dataFromPage1.p1F21) setSelectFrom("p1F21", null);
        setDataFrom("p1F22", "0");
        setDataFrom("p1F23", "0");
        setReadOnlyFrom("p1F20", true);
        setReadOnlyFrom("p1F21", true);
      } else {
        setDataFrom("p1F22", "");
        setDataFrom("p1F23", "");
        setReadOnlyFrom("p1F20", false);
        setReadOnlyFrom("p1F21", false);
      }
    }
    if (name === "p1F24") {
      if (selectedOption?.value === 8 || selectedOption?.value === 9) {
        if (dataFromPage1.p1F25) setSelectFrom("p1F25", null);
        if (dataFromPage1.p1F26) setSelectFrom("p1F26", null);
        setDataFrom("p1F27", "0");
        setDataFrom("p1F28", "0");
        setReadOnlyFrom("p1F25", true);
        setReadOnlyFrom("p1F26", true);
      } else {
        setDataFrom("p1F27", "");
        setDataFrom("p1F28", "");
        setReadOnlyFrom("p1F25", false);
        setReadOnlyFrom("p1F26", false);
      }
    }
  };

  const setReadOnlyFrom = (name: string, value: boolean) => {
    setInputReadOnly((prevData) => ({ ...prevData, [name]: value, }));
  }

  const setSelectFrom = (name: string, selectedOption: Opprovince | null) => {
    setDataFromPage1((prevData) => ({ ...prevData, [name]: selectedOption, }));
  }

  const setDataFrom = (name: string, value: string) => {
    setDataFromPage1((prevData) => ({ ...prevData, [name]: value.trim(), }));
  }

  const handleCheckFrom = () => {
    setLoadingPage(true);
    const newFromErr: FromP1Err = validateFormP1(dataFromPage1);
    if (newFromErr.status) {
      setIsCheckFrom(false);
      setErrTxtErr(newFromErr);
    } else {
      setIsCheckFrom(true);
      setErrTxtErr(dataFromP1Err);
    }
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }

  const btnSaveShow = (): JSX.Element => {
    if (!isCheckFrom && !loadingPage) {
      const btn: JSX.Element = (
        <div>
          <DivButton textBtn="ตรวจสอบข้อมูล" type="button" onClick={handleCheckFrom} divClass="text-center" className="mt-2 focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-md text-md px-5 py-3" />
          <DivTextMesErr className="text-center text-sm text-amber-700 mt-2" text="(กรุณาตรวจสอบข้อมูล)" />
        </div>
      );
      return btn;
    }
    const btn: JSX.Element = (
      <div>
        <DivButton textBtn="บันทึกข้อมูล" onClick={() => setIsModalOpen(true)} type="button" divClass="text-center" className={`focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-green-300 focus:ring-4 font-medium rounded-md text-md px-5 py-3`} />
        <DivTextMesErr className="text-center text-sm text-green-700 mt-2" text="(ตรวจสอบข้อมูลเรียบร้อย)" />
      </div>
    );
    return btn;
  };

  const theadPage1 = (): JSX.Element => {
    const thead: JSX.Element = (
      <thead>
        <tr className="bg-purple-100 text-gray-900">
          <th rowSpan={2} className="min-w-[200px] align-top text-center">ครอบครัวที่</th>
          <th rowSpan={1} className="min-w-[230px]">1.คำนำหน้าชื่อ</th>
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
          <th colSpan={1} className="min-w-[150px] text-center">รายได้ต่อปี(บาท)</th>
          <th colSpan={1} className="min-w-[200px] text-center">อาชีพ</th>
          <th colSpan={1} className="min-w-[200px] text-center">สถานที่ทำงาน</th>
          <th colSpan={1} className="min-w-[150px] text-center">รายได้ต่อเดือน(บาท)</th>
          <th colSpan={1} className="min-w-[150px] text-center">รายได้ต่อปี(บาท)</th>
        </tr>
      </thead>
    );
    return thead;
  }

  const handleSubmit = async (): Promise<void> => {
    console.log(dataFromPage1);
  }
  return (
    <>
      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
        <p className="font-semibold text-purple-800">หมายเหตุ</p>
        <p className="text-sm"><span className="text-red-600">* กรุณากรอกข้อมูล</span> หากเป็นการระบุตัวเลขแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ 0</u> หากเป็นการระบุตัวอักษรแล้ว<u className="text-purple-800">ไม่มีข้อมูลใส่ -</u></p>
      </div>

      <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 bg-white border border-gray-200 rounded-xl shadow">
        <div>
          <DivHeadQuestion head={"ตอนที่ 1 ข้อมูลพื้นฐานเกี่ยวกับสมาชิกในครัวเรือน"} status="edit" editPage="1" />
          <DivHr divClass="flex justify-center" className="h-px bg-gray-200 border-0 w-full" />

          <div className="my-5 py-5 px-5 overflow-x-auto min-h-[550px]">
            <div className="text-md text-purple-800 my-5">
              <p>เพิ่มข้อมูลเกี่ยวกับสมาชิกในครัวเรือน</p>
            </div>
            <table className="text-sm text-left text-gray-500">
              {theadPage1()}
              <tbody>
                <tr className="hover-tr">
                  <td className="align-top">
                    <DropDown label="" isClearable={true} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F1")} value={dataFromPage1.p1F1} isDisabled={inputReadOnly.p1F1} isSearchable={true} required={true} placeholder="เลือกครอบครัวที่" options={page1.message.length > 0 ? page1.message as Opprovince[] : []} name="p1F1" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F1Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F1Txt} />}
                  </td>
                  <td>
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F2T} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F2T")} isDisabled={inputReadOnly.p1F2T} isSearchable={true} required={true} placeholder="เลือกคำนำหน้า" options={prefixName} name="p1F2T" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F2TTxt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F2TTxt} />}
                    <InputFieldAuth label="" onChange={(e) => handleInputChange(e)} readonly={false} maxLength={13} minLength={1} value={dataFromPage1.p1F2} name="p1F2" type="text" placeholder="หมายเลขบัตรประชาชน(13หลัก)" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    {errTxtErr.p1F2Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F3Txt} />}
                  </td>
                  <td>
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F3} onChange={(e) => handleInputChange(e)} value={dataFromPage1.p1F3} minLength={0} name="p1F3" type="text" placeholder="ชื่อ" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F3Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F3Txt} />}
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F4} onChange={(e) => handleInputChange(e)} value={dataFromPage1.p1F4} minLength={0} name="p1F4" type="text" placeholder="นามสกุล" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    {errTxtErr.p1F4Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F4Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F5} isDisabled={inputReadOnly.p1F5} isSearchable={true} required={true} placeholder="เลือกความสัมพันธ์กับเจ้าบ้าน" options={dataSelectP1F5} name="p1F5" onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F5")} className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F5Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F5Txt} />}
                  </td>
                  <td>
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F6} onChange={(e) => handleInputChange(e)} minLength={0} name="p1F6" value={dataFromPage1.p1F6} type="date" placeholder="" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F6Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F6Txt} />}
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F7} onChange={(e) => handleInputChange(e)} minLength={0} name="p1F7" type="text" value={dataFromPage1.p1F7} placeholder="อายุ" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5" />
                    {errTxtErr.p1F7Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F7Txt} />}
                  </td>
                  <td className="align-top">
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F8} onChange={(e) => handleInputChange(e)} minLength={0} name="p1F8" type="text" value={dataFromPage1.p1F8?.label ? dataFromPage1.p1F8?.label : ""} placeholder="เพศ" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F8Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F8Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F9} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F9")} isDisabled={inputReadOnly.p1F9} isSearchable={true} required={true} placeholder="เลือกการทะเบียนราษฎร์" options={dataSelectP1F9} name="p1F9" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F9Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F9Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F10} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F10")} isDisabled={inputReadOnly.p1F10} isSearchable={true} required={true} placeholder="เลือกสถานภาพ" options={dataSelectP1F10} name="p1F10" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F10Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F10Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F11} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F11")} isDisabled={inputReadOnly.p1F11} isSearchable={true} required={true} placeholder="เลือกการวางแผนครอบครัว" options={dataSelectP1F11} name="p1F11" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F11Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F11Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F12} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F12")} isDisabled={inputReadOnly.p1F12} isSearchable={true} required={true} placeholder="เลือกศาสนา/ความเชื่อ" options={dataSelectP1F12} name="p1F12" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F12Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F12Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F13} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F13")} isDisabled={inputReadOnly.p1F13} isSearchable={true} required={true} placeholder="เลือกระดับการศึกษา" options={dataSelectP1F13} name="p1F13" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F13Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F13Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F14} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F14")} isDisabled={inputReadOnly.p1F14} isSearchable={true} required={true} placeholder="การฟัง" options={dataSelectConform} name="p1F13" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F14Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F14Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F15} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F15")} isDisabled={inputReadOnly.p1F15} isSearchable={true} required={true} placeholder="การพูด" options={dataSelectConform} name="p1F15" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F15Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F15Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F16} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F16")} isDisabled={inputReadOnly.p1F16} isSearchable={true} required={true} placeholder="การอ่าน" options={dataSelectConform} name="p1F16" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F16Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F16Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F17} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F17")} isDisabled={inputReadOnly.p1F17} isSearchable={true} required={true} placeholder="การเขียน" options={dataSelectConform} name="p1F17" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F17Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F17Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F18} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F18")} isDisabled={inputReadOnly.p1F18} isSearchable={true} required={true} placeholder="เลือกอาศัยอยู่ที่" options={dataSelectP1F18} name="p1F18" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F18Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F18Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F19} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F19")} isDisabled={inputReadOnly.p1F19} isSearchable={true} required={true} placeholder="เลือกสถานภาพการทำงานปัจจุบัน" options={dataSelectP1F19} name="p1F19" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F19Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F19Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F20} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F20")} isDisabled={inputReadOnly.p1F20} isSearchable={true} required={true} placeholder="เลือกอาชีพ" options={dataSelectP1F29} name="p1F20" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F20Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F20Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F21} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F21")} isDisabled={inputReadOnly.p1F21} isSearchable={true} required={true} placeholder="เลือกสถานที่ทำงาน" options={dataSelectP1F22} name="p1F21" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F21Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F21Txt} />}
                  </td>
                  <td className="align-top">
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F22} onChange={(e) => handleInputChange(e)} value={dataFromPage1.p1F22} minLength={0} name="p1F22" type="number" placeholder="รายได้ต่อเดือน" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F22Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F22Txt} />}
                  </td>
                  <td className="align-top">
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F23} onChange={(e) => handleInputChange(e)} value={dataFromPage1.p1F23} minLength={0} name="p1F23" type="number" placeholder="รายได้ต่อปี" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F23Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F23Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F24} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F24")} isDisabled={inputReadOnly.p1F24} isSearchable={true} required={true} placeholder="เลือกสถานภาพการทำงานในปีหน้า" options={dataSelectP1F19} name="p1F24" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F24Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F24Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F25} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F25")} isDisabled={inputReadOnly.p1F25} isSearchable={true} required={true} placeholder="เลือกอาชีพ" options={dataSelectP1F29} name="p1F25" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F25Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F25Txt} />}
                  </td>
                  <td className="align-top">
                    <DropDown label="" isClearable={true} value={dataFromPage1.p1F26} onChange={(selectedOption) => handleChangeDropDown(selectedOption, "p1F26")} isDisabled={inputReadOnly.p1F26} isSearchable={true} required={true} placeholder="เลือกสถานที่ทำงาน" options={dataSelectP1F22} name="p1F26" className="w-full text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block mt-3" />
                    {errTxtErr.p1F26Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F26Txt} />}
                  </td>
                  <td className="align-top">
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F27} minLength={0} onChange={(e) => handleInputChange(e)} value={dataFromPage1.p1F27} name="p1F27" type="number" placeholder="รายได้ต่อเดือน" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F27Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F27Txt} />}
                  </td>
                  <td className="align-top">
                    <InputFieldAuth label="" readonly={inputReadOnly.p1F28} minLength={0} onChange={(e) => handleInputChange(e)} value={dataFromPage1.p1F28} name="p1F28" type="number" placeholder="รายได้ต่อปี" required={true} className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block p-2.5 mt-3" />
                    {errTxtErr.p1F28Txt && <DivTextMesErr className="text-sm mb-2 text-red-700 font-semibold" text={errTxtErr.p1F28Txt} />}
                  </td>
                </tr>
                <tr>
                  <td colSpan={23}></td>
                  <td colSpan={3}>
                    {!isCheckFrom && !loadingPage &&
                      btnSaveShow()
                    }
                    {loadingPage ? (<LoadingCheck setHeight="h-auto mt-2" color="amber" txt="กำลังตรวจสอบข้อมูล" />) : isCheckFrom && btnSaveShow()}
                  </td>
                </tr>
              </tbody>
              {theadPage1()}
            </table>
          </div>
        </div>
      </div>
      <ModalSave isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} handleSubmit={handleSubmit} />

    </>
  )
}

export default Page1