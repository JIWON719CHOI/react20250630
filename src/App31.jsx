import React from "react";

function MyComp1() {
  const [person, setPerson] = React.useState({
    name: "Gojo",
    address: { city: "Tokyo", country: "Japan" },
  });

  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value }); // 얕은 복사로도 문제 없음
  }

  function handleCityChange(e) {
    // 얕은 복사는 주소값만 복사되므로 원본 변경 가능성 있음
    // ➡ 겉보기엔 잘 동작하지만, 상태 추적에 혼란이 생길 수 있어요.
    //   리액트는 상태가 바뀌었는지 "참조값"을 보고 판단하기 때문이에요.
    const newPerson = structuredClone(person); // 깊은 복사 (address 까지도 완전히 새 객체로 복사되기 때문에 안전)
    newPerson.address.city = e.target.value;
    setPerson(newPerson);
  }

  function handleCountryChange(e) {
    const newPerson = structuredClone(person);
    newPerson.address.country = e.target.value;
    setPerson(newPerson);
  }

  return (
    <div>
      <h3>📍 React 중첩 객체 상태 다루기</h3>

      <div>
        <label>NAME: </label>
        <input
          type="text"
          placeholder="NAME"
          value={person.name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label>CITY: </label>
        <input
          type="text"
          placeholder="CITY"
          value={person.address.city}
          onChange={handleCityChange}
        />
      </div>

      <div>
        <label>COUNTRY: </label>
        <input
          type="text"
          placeholder="COUNTRY"
          value={person.address.country}
          onChange={handleCountryChange}
        />
      </div>

      <hr />
      <p>👤 Name: {person.name}</p>
      <p>🏙️ City: {person.address.city}</p>
      <p>🌏 Country: {person.address.country}</p>
    </div>
  );
}

function App31() {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App31;
