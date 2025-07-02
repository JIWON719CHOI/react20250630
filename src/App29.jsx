import React, { useState } from "react";

function MyComp1() {
  const arr = [`Gojo`, `Geto`, `Nanami`];
  const paras = arr.map((item, index) => <p key={index}>{item}</p>);
  console.log(paras);
  return <div>{paras}</div>;
}

function MyComp2() {
  const datas = [9, 5, 1, 0];

  const paras = datas.map((item, index) => <p key={index}>{item}</p>);
  return (
    <div>
      <ul>
        <li>{paras}</li>
      </ul>
    </div>
  );
}

function MyComp3() {
  const [datas, setDatas] = React.useState([`java`, `react`, `spring`]);

  function handleButtonClick() {
    datas.puth("boot");

    // react 는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서, 이전 상태 배열을 복사한 새 배열을 상태변경 시 사용해야 함
    setDatas(datas);
  }

  console.log("change!");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>add</button>
    </div>
  );
}

function MyComp4() {
  const [data, setData] = useState([`java`, `react`, `spring`]);

  function handleButtonClick() {
    const nextData = [...data, "boot"];
    setData(nextData);
  }

  console.log("change!");

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>add</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["Gojo", "Geto", "Nanami"]);

  // 이름 추가
  const handleAdd = (name) => setList([...list, name]);

  // 마지막 항목 제거
  const handleRemoveLast = () => {
    if (list.length > 0) {
      setList(list.slice(0, -1)); // 마지막 요소 제외한 배열로 설정
    }
  };

  const buttons = ["Gojo", "Geto", "Nanami"];

  return (
    <div>
      {/* 추가 버튼 */}
      {buttons.map((name) => (
        <button key={name} onClick={() => handleAdd(name)}>
          {name}
        </button>
      ))}

      {/* 삭제 버튼 */}
      <button onClick={handleRemoveLast} style={{ marginLeft: "10px" }}>
        ❌ 마지막 제거
      </button>

      {/* 목록 출력 */}
      <ul>
        {list.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp6() {
  const [datas, setDatas] = useState([]); // 리스트 상태
  const [text, setText] = useState(""); // 입력 상태

  // 추가 버튼
  const handleAdd = () => {
    if (text.trim() !== "") {
      setDatas([...datas, text]); // 입력된 text를 배열에 추가
      setText(""); // 입력창 비우기
    }
  };

  // 삭제 버튼
  const handleRemove = () => {
    if (datas.length > 0) {
      setDatas(datas.slice(0, -1)); // 마지막 항목 제거
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // 입력될 때마다 text 상태 업데이트
      />

      <ul>
        {datas.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>

      <button onClick={handleAdd}>add</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
}

function App29() {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
    </div>
  );
}

export default App29;
