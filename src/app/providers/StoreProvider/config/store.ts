import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StateSchema } from "./StateSchema";

// Оборачиваем конфигурацию в отдельную функцию чтобы потом можно было ее перееиспользовать где-нибудь в тестах
export function createReduxStore(initialState?: StateSchema) {
    // определили изначальное состояние (initialState) для использования в сторибуках

    // определим схему для типа, которая будет принимать эта функция
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: IS_DEV,
        preloadedState: initialState,
    });
}

// пока не нужные типы
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
