import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";

const initialState: LoginSchema = {
    isLoading: false,
    username: "",
    password: "",
};

export const loginSlice = createSlice({
    name: "login",
    initialState, // ключ равно значение
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

// меняем дефолтный экспорт экшенов и редюсера и переименовываем их чтобы потом к ним обращаться по новому имени

// before
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// after
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
