import React from "react";
import axios from "axios";

function App54() {
  function handleButton1Click() {
    axios.request({ method: "post", url: "/api/main29/sub1" });
  }

  function handleButton2Click() {
    axios.post("/api/main29/sub2");
  }

  // 04. 두번째 파라미터는 json 으로 직렬화(stringify, encoding)
  function handleButton4Click() {
    axios.post("/api/main29/sub4", { name: "gojo", age: 28 });
  }

  function handleButton5Click() {
    axios.post("/api/main29/sub5", {
      address: "Tokyo",
      score: 99.23,
      country: "Japan",
    });
  }

  function handleButton6Click() {
    axios.post("/api/main29/sub6", {
      val1: "Shinjuku", // String
      val2: 66, // Integer
      val3: 77.243, // Double
      val4: true, // Boolean
      val5: null, // null
      val6: ["a", "b", "c"], // Array (List)
      val7: { x: 1, y: 2 }, // Object (Map)
    });
  }

  function handleButton8Click() {
    axios.post("/api/main29/sub8", {
      address: "Okinawa",
      date: "2021-01-01",
      fruits: ["apple", "banana", "lemon", "strawberry"],
    });
  }

  function handleButton9Click() {
    axios.post("/api/main29/sub9", {
      name: "Gojo",
      teams: ["Tokyo", "Jujutsu", "HighSchool"],
      person: {
        name: "Satoru",
        country: "Japan",
        age: 28,
      },
    });
  }

  function handleButton11Click() {
    axios.post("/api/main29/sub11", [`Gojo`, `Geto`, `Ieiri`]);
  }

  function handleButton12Click() {
    axios.post("/api/main29/sub12", [
      {
        name: "Gojo",
        age: 28,
        address: "Kyoto",
      },
      {
        name: "Geto",
        age: 27,
        address: "Tokyo",
      },
      {
        name: "Ieiri",
        age: 29,
        address: "Okinawa",
      },
    ]);
  }

  function handleButton13Click() {
    axios.post("/api/main29/sub13", {
      nickName: "흥민", // string
      // object
      team: {
        name: "토트넘",
        location: "런던",
      },
      age: 33, // number
      married: false, // boolean
      address: ["서울", "런던", "베를린"], // array
    });
  }

  function handleButton14Click() {
    axios.post("/api/main29/sub14", {
      person: {
        name: "Gojo",
        age: 28,
      },
      city: "Tokyo",
      score: 99.99,
      checked: true,
      notes: ["Jujutsu", "Kaisen", "Muryokusho"],
    });
  }
  // 연습 : 14번 버튼 클릭 시 일하는 request handler method 만들고
  // json은 dto(MyBean292)로 파싱하기

  return (
    <div>
      <button onClick={handleButton1Click}>01. 기본 POST 요청(request)</button>
      <button onClick={handleButton2Click}>02. 기본 POST 요청(post)</button>
      <button onClick={handleButton4Click}>04. POST + 데이터 요청</button>
      <button onClick={handleButton5Click}>05. POST + 데이터 요청</button>
      <button onClick={handleButton6Click}>06. POST + 데이터 타입</button>
      <button onClick={handleButton8Click}>08. POST + 데이터 배열</button>
      <button onClick={handleButton9Click}>09. POST + 데이터 객체</button>
      <button onClick={handleButton11Click}>
        11. POST + 데이터 배열(list)
      </button>
      <button onClick={handleButton12Click}>
        12. POST + 데이터 객체 속 배열
      </button>
      <button onClick={handleButton13Click}>13. POST + DTO 파싱</button>
      <button onClick={handleButton14Click}>14. POST + DTO 파싱</button>
    </div>
  );
}

export default App54;
