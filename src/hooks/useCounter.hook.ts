import { useState } from "react";

const useCounter = (initCount:number = 0) => {
	const [count, setCount] = useState(initCount);
	const reset = () => setCount(initCount);
	const increaseCount = () => setCount(count + 1);
	const decreaseCount = () => setCount(count - 1);

	return {
		count,
		reset,
		increaseCount,
		decreaseCount
	}
}

export default useCounter;