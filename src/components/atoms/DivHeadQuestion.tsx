import { useState } from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useAppDispatch } from '../../store/store';
import { findPage0EditData } from '../../store/slices/pageSlices';

type Props = {
    head: string;
    status: string;
    editPage: string;
}

const DivHeadQuestion = (props: Props) => {

    const dispatch = useAppDispatch();
    const [isRotating, setIsRotating] = useState(false);
 
    const handleLoopClick = async () => {
        const fId = localStorage.getItem('questionId');
        if (props.status === 'edit' && fId) {
           
            switch (props.editPage) {
                case "0":
                    setIsRotating(true);
                    try {
                        await dispatch(findPage0EditData(fId));
                    } catch (error) {
                        setIsRotating(false);
                    } finally {
                        setTimeout(() => {
                            setIsRotating(false);
                        }, 1000); // หมุนเป็นเวลา 1 วินาที
                    }
                    break;
            
                default:
                    break;
            }
        }
    };

    return (
        <div className="flex justify-between rounded-t-xl card-bg">
            <div className="text:md md:text-lg p-3 sml:p-5 tracking-tight text-gray-700 ">{props.head}</div>
            {props.status === 'edit' && 
            <div className="p-3 sml:p-5 color-violet-700 cursor-pointer" onClick={handleLoopClick}>
                <AutorenewIcon className={isRotating ? 'animate-spin' : ''} />
            </div>}
        </div>
    )
}

export default DivHeadQuestion