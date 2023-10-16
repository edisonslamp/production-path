import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "../../types/counterSchema";
import { getCounter } from "../getCounter/getCounter";

// функция createSelector использует библиотеку reselect. она позволяет создавать сложные селекторы их уже существующих, комбинирует их
// она мемоизирует селектор и меняет его только в том случае если меняется его значение.
// в данном случае какие либо расчеты внутри функции будут только тогда когда значение counter изменится
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => {
        return counter.value;
    },
);
