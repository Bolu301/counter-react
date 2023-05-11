import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="header text-center">
      <h1 className="text-4xl ">Counter Component</h1>
      <h2 className="text-2xl my-3"> {count} </h2>
      <div className="space-x-4">
        <button
          className="rounded-full bg-blue-500 py-1 px-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="rounded-full bg-blue-500 py-1 px-3"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
      <Timer time={time} setTime={setTime} />
    </div>
  );
}

export default App;
