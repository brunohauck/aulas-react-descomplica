import {useState} from 'react';

function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count is: {count}</h2>

      <Child handleClick={handleClick} />
    </div>
  );
}