import React from "react";

function MyComp1() {
  const [number1, setNumber1] = React.useState(1);
  const [number2, setNumber2] = React.useState(10);

  console.log(number1, number2);
  return (
    <div>
      <div>
        <div>{number1}</div>
        <button onClick={() => setNumber1(number1 + 1)}>button1</button>
      </div>
      <div>
        <div>{number2}</div>
        <button onClick={() => setNumber2(number2 - 1)}>button2</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <p>{text1}</p>
      </div>

      <div>
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <p>{text2}</p>
      </div>
    </div>
  );
}

function App26() {
  return (
    <div>
      <MyComp1 />
      <br />
      <MyComp2 />
    </div>
  );
}

export default App26;
