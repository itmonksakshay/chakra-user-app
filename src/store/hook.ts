import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userModalActions } from "./services/userModalSlice";
import { postModalActions } from "./services/postModalSlice";

const actions = {
    ...userModalActions,
    ...postModalActions
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
