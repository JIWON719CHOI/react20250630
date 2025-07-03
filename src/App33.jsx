import React, { useState } from "react";

function MyComp1() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() => setList([...list, item])}>추가</button>
      </div>
      <div>
        <h3>리스트</h3>
        <ul>
          {list.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MyInput({ onSaveClick }) {
  const [item, setItem] = useState("");

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => onSaveClick(item)}>추가</button>
    </div>
  );
}

function MyList({ list }) {
  return (
    <div>
      <h3>리스트</h3>
      <ul>
        {list.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp2() {
  // lifting state up : 하위(자식) 컴포넌트의 상태를 상위(조상,부모) 컴포넌트로 옮김
  const [list, setList] = useState([]);

  function handleSaveClick(item) {
    setList([...list, item]);
  }

  return (
    <div>
      <MyInput onSaveClick={handleSaveClick} />
      <MyList list={list} />
    </div>
  );
}

function App33() {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App33;
