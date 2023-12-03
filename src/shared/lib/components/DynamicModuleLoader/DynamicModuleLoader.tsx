import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/StoreProvider";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode;

    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducerListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            },
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name, reducer]: ReducerListEntry) => {
                        store.reducerManager.add(name, reducer);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    },
                );
            }
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
