import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userModalActions } from "./services/userModalSlice";
import { postActions } from "./services/postSlice";

const actions = {
    ...userModalActions,
    ...postActions
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
