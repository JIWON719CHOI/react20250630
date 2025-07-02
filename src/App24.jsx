import React, { useState } from "react";

function MyComp1() {
  const [count, setCount] = useState(0);
  console.log(count); // 현재 상태 출력
  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>➕</button>
    </div>
  );

  function handleButtonClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
}

function MyComp2() {
  const [count, setCount] = useState(0);
  console.log(count); // 현재 상태 출력
  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>➕</button>
    </div>
  );

  function handleButtonClick() {
    // 상태가 변경되자 마자 다시 그리지는 않음(re-render)
    // react는 적절한 순간에 변경된 상태로 다시 그림(re-render)
    setCount(count + 1);
    setCount(count + 2);
  }
}

function MyComp3() {
  const [number, setNumber] = useState(0);
  console.log(number); // 현재 상태 출력

  // let number = count;

  function handleButtonClick() {
    setNumber(number + 2);
  }

  return (
    <div>
      {/* 버튼 클릭 시 number 2씩 증가 */}
      {number}
      <br />
      <button onClick={handleButtonClick}>➕</button>
    </div>
  );
}

function App24() {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
    </div>
  );
}

export default App24;
