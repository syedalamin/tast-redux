import { useDispatch, useSelector } from "react-redux";
import { increment, decrement , incrementByValue, decrementByValue} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementByValue(2))}>Increment 2</button>
      <br />
      <button onClick={() => dispatch(incrementByValue(5))}>Increment 5</button>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(decrementByValue(2))}>Decrement 2</button>
      <br />
      <button onClick={() => dispatch(decrementByValue(5))}>Decrement 5</button>
    </div>
  );
};

export default Counter;
