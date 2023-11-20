import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/StoreProvider";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

interface DynamicModuleLoaderProps {
    children: ReactNode;
    name: StateSchemaKey;
    reducer: Reducer;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, name, reducer } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });

        return () => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name} reducer` });
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
