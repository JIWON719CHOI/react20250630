import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ChildComp11() {
  const [count, setCount] = useState(1);
  return (
    <div className="border bg-info">
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>➕</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <div>
      <Form.Check
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <ChildComp11 />}
      <hr />
      <Form.Check
        type="switch"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
      />
      {checked2 && <ChildComp11 />}
    </div>
  );
}

// 🌳 component 의 lifeCycle
// initial render : 컴포넌트 트리에 붙을 때
// re-render :  상태가 변경될 때
// 트리에서 떨어짐
function App36() {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App36;
