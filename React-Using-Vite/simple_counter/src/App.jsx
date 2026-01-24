import React, { useState } from "react";

const App = () => {
  const [Num, setNum] = useState(0);
  return (
    <div className="container">
      <button onClick={() => setNum(Num - 1)}>Decrease</button>
      <h1>{Num}</h1>
      <button onClick={() => setNum(Num + 1)}>Increase</button>
    </div>
  );
};

export default App;
