import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const actions = {
 //...
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
