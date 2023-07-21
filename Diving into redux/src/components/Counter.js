import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';
const Counter = () => {
  //useSelector is used to access data from store, It automatically sets up a subscription for our store
  const counter = useSelector((state) => { 
    return state.counter.counter;
  })
  const show = useSelector((state) => { 
    return state.counter.showCounter
  })
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(3));
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // console.log(show);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
