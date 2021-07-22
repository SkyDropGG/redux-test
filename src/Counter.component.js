import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from './redux/counter.slice';

const {
  increment,
  decrement,
  set,
} = counterSlice.actions;

const getCounterValue = (state) => (
  state.counter.value
);

const CounterComponent = () => {

  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const [setter, setSetter] = useState('0');

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleSetterChange = (event) => {
    setSetter(event.target.value);
  };

  const handleSetClick = () => {
    const action = set(setter);

    console.log('action:', action);

    dispatch(action);
  };

  return (
    <div>
      {count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br />
      <input type="number" value={setter} onChange={handleSetterChange} />
      <button onClick={handleSetClick}>Применить</button>
    </div>
  );
};

CounterComponent.propTypes = {};

export const Counter = CounterComponent;
