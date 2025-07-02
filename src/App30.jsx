import React, { useState } from "react";

function MyComp1() {
  // 2개 state를 따로 관리
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3>✅ MyComp1: 상태 따로 관리</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일 입력"
      />
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
    </div>
  );
}

function MyComp2() {
  // 객체형 state를 직접 수정 (❌ 잘못된 방식)
  const [person, setPerson] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    person.name = e.target.value;
    setPerson(person); // 같은 참조 → 상태 변경 감지 안 됨
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
    setPerson(person);
  }

  return (
    <div>
      <h3>❌ MyComp2: 상태를 직접 수정하면 재렌더링 안 됨</h3>
      <input
        type="text"
        value={person.name}
        onChange={handleNameChange}
        placeholder="이름 입력"
      />
      <br />
      <input
        type="email"
        value={person.email}
        onChange={handleEmailChange}
        placeholder="이메일 입력"
      />
      <p>이름: {person.name}</p>
      <p>이메일: {person.email}</p>
    </div>
  );
}

function MyComp3() {
  // 객체형 state 복사해서 수정 (✅ 올바른 방식)
  const [person, setPerson] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    const nextPerson = { ...person }; // 복사
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }

  function handleEmailChange(e) {
    const nextPerson = structuredClone(person); // 깊은 복사
    nextPerson.email = e.target.value;
    setPerson(nextPerson);
  }

  return (
    <div>
      <h3>✅ MyComp3: 객체 복사 후 수정</h3>
      <input
        type="text"
        value={person.name}
        onChange={handleNameChange}
        placeholder="이름 입력"
      />
      <br />
      <input
        type="email"
        value={person.email}
        onChange={handleEmailChange}
        placeholder="이메일 입력"
      />
      <p>이름: {person.name}</p>
      <p>이메일: {person.email}</p>
    </div>
  );
}

function MyComp4() {
  const [student, setStudent] = useState({
    name: "",
    className: "",
    score: "",
  });

  function handleNameChange(e) {
    const next = structuredClone(student);
    next.name = e.target.value;
    setStudent(next);
  }

  function handleClassChange(e) {
    const next = structuredClone(student);
    next.className = e.target.value;
    setStudent(next);
  }

  function handleScoreChange(e) {
    const next = structuredClone(student);
    next.score = e.target.value;
    setStudent(next);
  }

  return (
    <div>
      <h3>✅ MyComp4: 여러 필드 상태 관리</h3>
      <input
        type="text"
        value={student.name}
        onChange={handleNameChange}
        placeholder="이름 입력"
      />
      <br />
      <input
        type="text"
        value={student.className}
        onChange={handleClassChange}
        placeholder="반 입력"
      />
      <br />
      <input
        type="number"
        value={student.score}
        onChange={handleScoreChange}
        placeholder="점수 입력"
      />
      <p>이름: {student.name}</p>
      <p>반: {student.className}</p>
      <p>점수: {student.score}</p>
    </div>
  );
}

function App30() {
  return (
    <div>
      <MyComp1 />
      <br />
      <MyComp2 />
      <br />
      <MyComp3 />
      <br />
      <MyComp4 />
    </div>
  );
}

export default App30;
