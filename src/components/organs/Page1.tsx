import { pageComponents } from "../../types/pageType"

const Page1 = (props: pageComponents) => {
  return (
    <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
      <p className="font-semibold text-purple-800">คำอธิบาย <u>ข้อที่ 1 - 13</u></p>
      <p className="text-sm"><span className="text-red-600">3. ความสัมพันธ์กับเจ้าบ้าน</span> กรอกเลข 
        <span className="text-purple-800 ml-2"><b>1 = เจ้าบ้าน</b></span>
        <span className="text-purple-800 ml-2"><b>2 = สามี/ภรรยา</b></span>
        <span className="text-purple-800 ml-2"><b>3 = บิดา/มารดา</b></span>
        <span className="text-purple-800 ml-2"><b>4 = พี่/น้อง</b></span>
        <span className="text-purple-800 ml-2"><b>5 = บุตร</b></span>
        <span className="text-purple-800 ml-2"><b>6 = หลาน</b></span>
        <span className="text-purple-800 ml-2"><b>7 = หัวหน้าครอบครัว</b></span>
        <span className="text-purple-800 ml-2"><b>8 = ผู้อาศัย</b></span>
        <span className="text-purple-800 ml-2"><b>9 = อื่นๆ</b></span>
      </p>
      <p className="text-sm"><span className="text-red-600">6. เพศ</span> กรอกเลข 
        <span className="text-purple-800 ml-2"><b>1 = ชาย</b></span>
        <span className="text-purple-800 ml-2"><b>2 = หญิง</b></span>
      </p>
    </div>
  )
}

export default Page1