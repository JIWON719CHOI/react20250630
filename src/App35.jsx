import React, { createContext, useContext, useState } from "react";

// ✅ MyComp1: text 값을 깊은 자식까지 전달 (props 전달 연습)
function MyComp1() {
  const [text, setText] = React.useState("");

  return (
    <div>
      <h2>MyComp1</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComp11 text={text} />
    </div>
  );
}

function ChildComp11({ text }) {
  return (
    <div>
      <ChildComp12 text={text} />
    </div>
  );
}

function ChildComp12({ text }) {
  return (
    <div>
      <ChildComp13 text={text} />
    </div>
  );
}

function ChildComp13({ text }) {
  return (
    <div>
      <p>입력한 텍스트: {text}</p>
    </div>
  );
}

// ✅ MyComp2: list 추가, 자식에게 list 전달
function MyComp2() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);

  function handleAddClick() {
    if (text.trim() !== "") {
      setList([...list, text]);
      setText(""); // 입력창 비우기
    }
  }

  return (
    <div>
      <h2>MyComp2</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}>ADD</button>
      <ChildComp21 list={list} />
    </div>
  );
}

function ChildComp21({ list }) {
  return (
    <div>
      <ChildComp22 list={list} />
    </div>
  );
}

function ChildComp22({ list }) {
  return (
    <div>
      <ChildComp23 list={list} />
    </div>
  );
}

function ChildComp23({ list }) {
  return (
    <div>
      <h3>입력된 목록</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ MyComp3: Context 사용 예시
// 1️⃣ create context
const MyComp3Context = createContext(null);

function MyComp3() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>MyComp3 (Context 사용 예시)</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* 3️⃣ provide context */}
      <MyComp3Context.Provider value={message}>
        <ChildComp31 />
      </MyComp3Context.Provider>
    </div>
  );
}

function ChildComp31() {
  return (
    <div>
      <ChildComp32 />
    </div>
  );
}

function ChildComp32() {
  return (
    <div>
      <ChildComp33 />
    </div>
  );
}

function ChildComp33() {
  // 2️⃣ use context
  const message = useContext(MyComp3Context);
  return (
    <div>
      <p>📨 MESSAGE: {message}</p>
    </div>
  );
}

// ✅ MyComp4: Context 사용 예시
const MyComp4Context = createContext(null);

function MyComp4() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  // 연습:  list를 context 사용해서 ChildComp43 에서 출력해보기
  return (
    <div>
      <h2>MyComp4(Context 사용 연습)</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => setList([...list, item])}>추가</button>
      <MyComp4Context.Provider value={list}>
        <ChildComp41 />
      </MyComp4Context.Provider>
    </div>
  );
}

function ChildComp41() {
  return (
    <div>
      <ChildComp42 />
    </div>
  );
}

function ChildComp42() {
  return (
    <div>
      <ChildComp43 />
    </div>
  );
}

function ChildComp43() {
  const list = useContext(MyComp4Context);
  return (
    <div>
      <h3>목록</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ 최상위 컴포넌트
function App35() {
  return (
    <div>
      {/* using context */}
      <MyComp4 />
      <hr />
      {/* using context */}
      <MyComp3 />
      <hr />
      {/*prop drilling*/}
      <MyComp2 />
      <hr />
      {/*prop drilling*/}
      <MyComp1 />
    </div>
  );
}

export default App35;
