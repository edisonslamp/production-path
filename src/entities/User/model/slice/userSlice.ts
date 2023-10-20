import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/User";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: "user",
    initialState, // ключ равно значение
    reducers: {},
});

// меняем дефолтный экспорт экшенов и редюсера и переименовываем их чтобы потом к ним обращаться по новому имени

// before
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// after
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
