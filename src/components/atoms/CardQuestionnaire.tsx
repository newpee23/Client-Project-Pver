import { pageCard } from "../../types/homeType";
import DivButton from "./DivButton";

const CardQuestionnaire = (props: pageCard) => {

    return (

        <div className="flex justify-center items-center">
            <div className="block w-full sml:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative hover:scale-110 hover:z-50 transform transition-transform duration-300">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                {props.pageuser ? 
                <DivButton textBtn="แก้ไขข้อมูล" type="button" divClass="text-center" className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"/>
                : 
                <DivButton textBtn="บันทึกข้อมูล" type="button" divClass="text-center" className="focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-4 py-2"/>
                }
            </div>
        </div>

    )
}
export default CardQuestionnaire;