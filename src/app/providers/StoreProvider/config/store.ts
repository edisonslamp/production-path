import {
    ReducersMapObject,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { NavigateOptions, To } from "react-router-dom";
import { $api } from "shared/api/api";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

// Оборачиваем конфигурацию в отдельную функцию чтобы потом можно было ее перееиспользовать где-нибудь в тестах
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    // определили изначальное состояние (initialState) для использования в сторибуках
    const rootReducers: ReducersMapObject = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    // определим схему для типа, которая будет принимать эта функция
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: IS_DEV,
        preloadedState: initialState,
        middleware: () =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    });

    // Временная мера
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// пока не нужные типы
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
