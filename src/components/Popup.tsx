import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { popupHide, setUser, popupShow } from "../redux/slice/uiSlice";
import type { RootState } from "../redux/store/store";
import { getUser } from "../api/api";
import PopupWrapper from "../styles/Blocks/PopupWrapper";
import Owerfill from "../styles/Blocks/Owerfill";
import CardWrapperFull from "../styles/Blocks/CardWrapperFull";
import CardTitle from "../styles/Blocks/CardTitle";
import CardDescription from "../styles/Blocks/CardDescription";
import CardContent from "../styles/Blocks/CardContent";

export const Popup = () => {

    const ui = useSelector((state: RootState) => state.ui);

    const dispatch = useDispatch();

    const handleClick = () => {
       dispatch(popupHide());
       if (params['*'] && params['*'] !== "") {
         navigate('/');
       }
    }

    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    const getApi = () => {
        if (params['*'] && params['*'] !== "") {
            getUser(params['*'])
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(setUser(res.data));
                        dispatch(
                            popupShow({ ...ui, popupSubtitle: res.data.html_url, popupTitle: res.data.login, popupContent: res.data.bio })
                        );
                    }
                })
                .catch((err) => {
                    dispatch(
                        popupShow({ ...ui, popupSubtitle: err.message, popupTitle: err.response.status, popupContent: '' })
                    );
                })
                .finally(() => {});
        }
    }

    const handleUrl = useMemo(() => getApi(), [location]);

    return (
        <PopupWrapper show={ui.popup}>
            <Owerfill onClick={handleClick} />
            <CardWrapperFull>
                <CardTitle>{ui.popupTitle}</CardTitle>
                <CardDescription>{ui.popupSubtitle}</CardDescription>
                <CardContent>{ui.popupContent}</CardContent>
            </CardWrapperFull>
        </PopupWrapper>
    );
};
