import { useSelector, useDispatch } from "react-redux";
import { errHide } from "../redux/slice/uiSlice";
import type { RootState } from "../redux/store/store";
import PopupWrapper from "../styles/Blocks/PopupWrapper";
import Owerfill from "../styles/Blocks/Owerfill";
import CardWrapperFull from "../styles/Blocks/CardWrapperFull";
import CardTitle from "../styles/Blocks/CardTitle";
import CardDescription from "../styles/Blocks/CardDescription";

export const Popup = () => {

    const ui = useSelector((state: RootState) => state.ui);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(errHide());
    }

    return (
        <PopupWrapper show={ui.popup}>
            <Owerfill onClick={handleClick}/>
            <CardWrapperFull>
                <CardTitle>{ui.errCode}</CardTitle>
                <CardDescription>{ui.errMessage}</CardDescription>
            </CardWrapperFull>
        </PopupWrapper>
    );
};
