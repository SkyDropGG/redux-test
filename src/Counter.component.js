import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';

const CounterComponent = () => {

  const count = useSelector((state) => {
    const { value } = state.counter;

    return value;
  });

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment())
  };

  const handleMinusClick = () => {
    dispatch(decrement())
  };

  return (
    <div>
      {count}
      <button onClick={handlePlusClick}>+</button>
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
};

CounterComponent.propTypes = {};

export const Counter = CounterComponent;
