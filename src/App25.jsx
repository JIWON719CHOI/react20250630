import React, { useState } from "react";

function MyComp1() {
  const [text, setText] = useState("hi");

  function handleInputChange(e) {
    console.log(e.target.value);
    // setText("다른값")
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function MyComp2() {
  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => setMessage("")}>reset</button>
      </div>
    </>
  );
}

function App25() {
  return (
    <>
      <div>
        <MyComp1 />
        <MyComp2 />
      </div>
    </>
  );
}

export default App25;
