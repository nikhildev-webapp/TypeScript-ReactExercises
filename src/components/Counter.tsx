import { useState } from "react";
 //* TypeScript infers 'count' is a number because of the initial value 0

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count+1)
    }
  return (
      <>
          <h1>Counter</h1> 
          <p>Creating Counter in typescript</p>
          <p>Count:{count}</p>
          <p>Clikc the <button onClick={increment}>Count+</button></p>
      </>
  )
}

export default Counter