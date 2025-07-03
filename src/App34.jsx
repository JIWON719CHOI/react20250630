import React, { useState } from "react";

// ✅ 입력만 담당하는 컴포넌트
function MyInput({ person, onNameChange, onAddressChange }) {
  return (
    <div>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={onNameChange}
          placeholder="이름 입력"
        />
      </div>
      <div>
        <input
          type="text"
          value={person.address}
          onChange={onAddressChange}
          placeholder="주소 입력"
        />
      </div>
    </div>
  );
}

// ✅ 출력만 담당하는 컴포넌트
function MyOutput({ person }) {
  return (
    <div>
      <p>NAME: {person.name}</p>
      <p>ADDRESS: {person.address}</p>
    </div>
  );
}

// ✅ 상태를 가지고 있는 부모 컴포넌트
function MyComp2() {
  const [person, setPerson] = useState({ name: "", address: "" });

  function handleNameChange(e) {
    const nextPerson = { ...person, name: e.target.value }; // 얕은 복사
    setPerson(nextPerson);
  }

  function handleAddressChange(e) {
    const nextPerson = { ...person, address: e.target.value };
    setPerson(nextPerson);
  }

  return (
    <div>
      <h2>MyComp2 (상태 끌어올리기)</h2>
      <MyInput
        person={person}
        onNameChange={handleNameChange}
        onAddressChange={handleAddressChange}
      />
      <MyOutput person={person} />
    </div>
  );
}

// ✅ 단순한 예제: 상태를 MyComp1 내부에서만 관리
function MyComp1() {
  const [person, setPerson] = useState({ name: "", address: "" });

  return (
    <div>
      <h2>MyComp1 (자기 자신 안에서 상태 관리)</h2>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          placeholder="이름 입력"
        />
      </div>
      <div>
        <input
          type="text"
          value={person.address}
          onChange={(e) => setPerson({ ...person, address: e.target.value })}
          placeholder="주소 입력"
        />
      </div>
      <div>
        <p>NAME: {person.name}</p>
        <p>ADDRESS: {person.address}</p>
      </div>
    </div>
  );
}

// ✅ 최상위 앱
function App34() {
  return (
    <div>
      <MyComp1 />
      <hr />
      <MyComp2 />
    </div>
  );
}

export default App34;
