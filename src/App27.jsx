import React from "react";

function MyComp1() {
  const [number, setNumber] = React.useState(1);
  const [oddEven, setoddEven] = React.useState("ODD");

  function handleButtonClick() {
    setNumber(number + 1);
    if (oddEven == "ODD") {
      setoddEven("EVEN");
    } else {
      setoddEven("ODD");
    }
  }

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{oddEven}</span>
      </div>
      <button onClick={handleButtonClick}>➕</button>
    </div>
  );
}

function MyComp2() {
  const [number, setNumber] = React.useState(1);
  let oddEven = number % 2 === 0 ? "ODD" : "EVEN";

  function handleButtonClick() {
    setNumber(number + 1);
  }

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{oddEven}</span>
      </div>
      <button onClick={handleButtonClick}>➕</button>
    </div>
  );
}

function MyComp3() {
  const [text, setText] = React.useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>{text.length}</p>
    </div>
  );
}

function App27() {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
    </div>
  );
}

export default App27;
