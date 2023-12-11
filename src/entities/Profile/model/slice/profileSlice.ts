import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/Profile";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState, // ключ равно значение
    reducers: {},
});

// меняем дефолтный экспорт экшенов и редюсера и переименовываем их чтобы потом к ним обращаться по новому имени

// before
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// after
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
