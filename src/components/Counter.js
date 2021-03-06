import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispatch( counterActions.increment() )
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(15))
  }

  const decrementHandler = () => {
    dispatch( counterActions.decrement() )
  }

  const toggleCounterHandler = () => {
    dispatch( counterActions.toggle() )
  };
 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <div className={classes.value}> { counter } </div>}
      <div>
        <button onClick={ incrementHandler }>increment</button>
        <button onClick={ increaseHandler }>increase by 15</button>
        <button onClick={ decrementHandler }>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
