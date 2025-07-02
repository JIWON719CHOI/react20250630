import React from "react";

function MyComp1() {
  // use... : 훅(hook)
  // react 훅의 사용을 순서로 기억한다.
  const [number, setNumber] = React.useState(0);
  const [text, setText] = React.useState("");
  const [name, setName] = React.useState("son");

  // 따라서 use...(hook) 사용 시
  // 1. 조건 절에 넣으면 안됨
  // 2. 반복문에 넣으면 안됨()

  if (true) {
    const [message, setMessage] = React.useState("");
  }

  // for (let i = 0, i < 3; i++) const [other, setOther] = React.useState(""); ❌

  const [alert, setAlert] = React.useState("");

  return null;
}

function App28() {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App28;
