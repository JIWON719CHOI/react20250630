import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function MyComp1({ value }) {
  return <div className="border">value ✖️ 2 🟰 {value * 2}</div>;
}

let someValue = 1;

function MyComp2() {
  someValue = someValue + 1;
  return <div className="border bg-light">someValue 🟰 {someValue}</div>;
}

function MyComp3() {
  useEffect(() => {
    console.log("🐶마운트");
    return () => {
      console.log("😺언마운트");
    };
  }, []);
  return (
    <div>
      <h3>MyComp3</h3>
    </div>
  );
}

function Child41() {
  useEffect(() => {
    console.log("👶자식마운트");
    return () => {
      console.log("👼자식언마운트");
    };
  }, []);
  return (
    <div>
      <h3>Child41</h3>
    </div>
  );
}

function MyComp4() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck
        type="switch"
        checked={show}
        onClick={() => setShow(!show)}
      ></FormCheck>
      {show && <Child41 />}
    </div>
  );
}

function App38() {
  // strict mode    : 모든 컴포넌트를 마운트->언마운트->마운트
  //                  (이를 통해서 검증한다. 순수성 확인=purity)
  // pure component : 함수(컴포넌트) 밖의 데이터를 변경하지 말것.
  return (
    <div>
      <MyComp1 value={1} />
      <MyComp1 value={2} />
      <MyComp1 value={3} />
      <br />
      <MyComp2 />
      <MyComp2 />
      <MyComp2 />
      <br />
      <MyComp3 />
      <br />
      <MyComp4 />
    </div>
  );
}

export default App38;
