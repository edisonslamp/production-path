import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState, // ключ равно значение
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// меняем дефолтный экспорт экшенов и редюсера и переименовываем их чтобы потом к ним обращаться по новому имени

// before
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// after
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
