import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
    // чтобы использовать редусеры мы должны передавать их через диспатч!
    const dispatch = useDispatch();

    // чтобы достать данные из стейта нужно использовать селектор useSelector()
    // также селекторы нужно выносить в отдельный модуль, а не указывать их в компоненте напрямую
    // const value = useSelector((state: StateSchema) => state.counter.value);  работает с нетипизированным состояние поэтому нужно типизировать нашей схемой
    const value = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">Value:{value}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                increment
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                decrement
            </Button>
        </div>
    );
};
