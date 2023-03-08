import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from './counterSlice'
import IncrementByAmount from "../../components/IncrementByAmount";

export default function Counter() {
    const count = useSelector((state) =>
        state.counter.value
    )
    const dispatch = useDispatch()

    function incrementDispatch(v) {
        dispatch(incrementByAmount(Number(v)))
    }

    return (
        <div>
            <div>
                <button aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <IncrementByAmount dispatchFunction={incrementDispatch} count={count}></IncrementByAmount>
            </div>
        </div>
    )
}