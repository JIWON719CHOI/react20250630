import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function Child11() {
  const [count, setCount] = useState(0);
  // useEffect : 컴포넌트 생애 주기(lifeCycle) 별 실행되는 코드 작성 가능한 훅

  useEffect(() => {
    // 🐶initial-render(mount)
    console.log("💙첫 렌더링 시 실행(mount 시 실행)");
    // 😺 unmount 때 실행되는 코드 : useEffect의 첫번째 파라미터로 들어가는 함수의 리턴되는 함수로..
    return () => {
      console.log("💚unmount-code...");
    };
  }, []);
  console.log("❤️RUN-ChildFunction!");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => setCount(count + 1)}>➕{count}</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <FormCheck
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <Child11 />}
    </div>
  );
}

function Child21() {
  useEffect(() => {
    console.log("⭐Child21-mount!");
    return () => {
      console.log("🌙Child21-unmount!");
    };
  }, []);
  return (
    <div>
      <h3>Child21</h3>
    </div>
  );
}

function MyComp2() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <FormCheck
        type="switch"
        checked={show}
        onChange={() => setShow(!show)}
      ></FormCheck>
      {show && <Child21 />}
    </div>
  );
}

function Child31() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = React.useState(0);
  // useEffect 의 두번째 파라미터: dependencies (의존)
  //                               변경 감지할 값들의 목록,
  //                               이 목록의 값이 변경되면 useEffect의 첫번째 파라미터(함수) 실행
  useEffect(() => {
    console.log("🤍업데이트 되면 실행되는 함수의 코드들..."); // mount 되도 실행, update도 실행
  }, [count]);
  useEffect(() => {
    console.log("🖤마운트 될 때만 실행되는 코드...");
  }, []); // 비어있는 [] dependencies..

  useEffect(() => {
    console.log("🌈otherCount 업데이트 되면 실행되는 함수의 코드들...");
  }, [otherCount]);
  useEffect(() => {
    console.log("🪼count/otherCount 업데이트");
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>COUNT={count}</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        OTHER={otherCount}
      </button>
    </div>
  );
}

function MyComp3() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck
        type="switch"
        checked={show}
        onChange={() => setShow(!show)}
      ></FormCheck>
      <h2>불효자식 컴포넌트</h2>
      {show && <Child31 />}
    </div>
  );
}

function Child41() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🐶마운트🐶");
  }, []);
  useEffect(() => {
    console.log("😺업데이트😺");
  }, [count]);
  useEffect(() => {
    return () => {
      console.log("🐵언마운트🐵");
    };
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>🔘{count}</button>
    </div>
  );
}

function MyComp4() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child41 />}
    </div>
  );
}

function App37() {
  return (
    <div>
      {/*<MyComp1 />*/}
      {/*<hr />*/}
      {/*<MyComp2 />*/}
      {/*<hr />*/}
      {/*<MyComp3 />*/}
      <hr />
      <MyComp4 />
    </div>
  );
}

export default App37;
