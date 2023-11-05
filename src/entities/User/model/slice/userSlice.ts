import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { User, UserSchema } from "../types/User";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: "user",
    initialState, // ключ равно значение
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },

        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },

        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

// меняем дефолтный экспорт экшенов и редюсера и переименовываем их чтобы потом к ним обращаться по новому имени

// before
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// after
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
