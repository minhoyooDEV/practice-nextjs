import useCounter from "~/hooks/useCounter.hook";

const SimpleCounterPage = () => {
  const {count, reset, increaseCount, decreaseCount} = useCounter(0)

  return (
    <div>
      <h1>Simple Counter</h1>
      <div>카운터 값: {count}</div>
      <button onClick={() => increaseCount()}>증가</button>
      <button onClick={() => decreaseCount()}>감소</button>
      <button onClick={() => reset()}>초기화</button>
    </div>
  );
};

export default SimpleCounterPage;
