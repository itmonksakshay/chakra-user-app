"use client";

import React, { useRef } from 'react';
import { AppStore, store } from '.';
import { Provider } from "react-redux";

type IProps = {
    children: React.ReactNode
}

const StoreProvider = ({
    children
}: IProps) => {
    const storeRef = useRef<AppStore>();
    if(!storeRef.current) {
        storeRef.current = store();
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
