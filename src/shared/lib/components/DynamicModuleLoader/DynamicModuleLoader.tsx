import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/StoreProvider";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

interface DynamicModuleLoaderProps {
    children: ReactNode;
    key: StateSchemaKey;
    reducer: Reducer;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, key, reducer } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` });

        return () => {
            store.reducerManager.remove(key);
            dispatch({ type: `@DESTROY ${key} reducer` });
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
