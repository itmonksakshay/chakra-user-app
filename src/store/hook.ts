import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userActions } from "./services/userSlice";

const actions = {
    ...userActions
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
