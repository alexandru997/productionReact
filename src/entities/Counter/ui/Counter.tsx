import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const incrementFunct = () => {
        dispatch(counterActions.increment());
    };
    const decrementFunct = () => {
        dispatch(counterActions.decrement());
    };

    return (

        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={incrementFunct}
                data-testid="increment-btn"
            >
                +
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrementFunct}
            >
                -
            </Button>
        </div>
    );
};
