import { buttonSingIN } from "../../types/atomsType";

const DivButton = (props: buttonSingIN) => {
    return (
        <div className={props.divClass}>
            <button type={props.type} className={props.className}>{props.textBtn}</button>
        </div>
    )
}

export default DivButton;