import React, { useState } from "react";
import axios from "axios";

function App53() {
  // 상태 변수 선언
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  // 01: 기본 GET 요청 (전체 URL 사용)
  function handleButton1Click() {
    axios.request({
      method: "get",
      url: "http://localhost:8080/api/main28/sub1",
    });
  }

  // 02: 기본 GET 요청 (상대 경로 사용)
  function handleButton2Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub1",
    });
  }

  // 03: POST 요청 (RequestBody 없음)
  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  // 04: async/await + GET 요청
  async function handleButton4Click() {
    try {
      const response = await axios.get("/api/main28/sub4");
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("요청 실패:", error);
    }
  }

  // 05: POST + JSON 데이터 전송
  async function handleButton5Click() {
    try {
      const response = await axios.post("/api/main28/sub5", {
        name: "jiwon",
        age: 31,
      });
      console.log("등록 완료:", response.data);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  }

  // 08: GET + query string 직접 구성
  function handleButton8Click() {
    axios.get("/api/main28/sub8?name=gojo&age=28", {});
  }

  // 10: query string 직접 완성
  function handleButton10Click() {
    axios.get("/api/main28/sub10?address=tokyo&score=99.12", {});
  }

  // 11: config.params 방식
  function handleButton11Click() {
    axios.get("/api/main28/sub11", {
      params: { address: "kyoto", score: "88.15" },
    });
  }

  // 13: URLSearchParams 객체 사용
  function handleButton13Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("name", "satoru");
    searchParams.set("age", "28");
    searchParams.set("address", "kyoto");
    axios.get("/api/main28/sub13", {
      params: searchParams,
    });
  }

  // 15: URLSearchParams 문자열 연결 방식
  function handleButton15Click() {
    const p = new URLSearchParams();
    p.set("name", "geto");
    p.set("age", "27");
    p.set("country", "일본");
    console.log(p.toString());
    axios.get("/api/main28/sub15?" + p);
  }

  // 17: 템플릿 문자열 방식
  function handleButton17Click() {
    axios.get(`/api/main28/sub17?name=${name}&age=${age}&city=${city}`);
  }

  // 18: URLSearchParams 연결 연산자 방식
  function handleButton18Click() {
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    axios.get(`/api/main28/sub18?${p}`);
    // axios.get(`/api/main28/sub18`+p);
  }

  // 19: URLSearchParams 객체를 config.params에 넣기
  function handleButton19Click() {
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    axios.get("/api/main28/sub19", { params: p });
  }

  // 20: 일반 객체를 config.params에 넣기
  function handleButton20Click() {
    axios.get("/api/main28/sub20", {
      params: {
        name: name,
        age: age,
        city: city,
      },
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleButton1Click}>
          01. 기본 GET 요청 (전체 URL)
        </button>
        <button onClick={handleButton2Click}>
          02. 기본 GET 요청 (상대 경로)
        </button>
        <button onClick={handleButton3Click}>03. 기본 POST 요청</button>
        <button onClick={handleButton4Click}>04. async/await 사용</button>
        <button onClick={handleButton5Click}>05. POST + JSON 데이터</button>
        <button onClick={handleButton8Click}>08. 쿼리스트링 직접 구성</button>
        <button onClick={handleButton10Click}>10. 쿼리스트링 직접 완성</button>
        <button onClick={handleButton11Click}>11. config.params 사용</button>
        <button onClick={handleButton13Click}>13. URLSearchParams 객체</button>
        <button onClick={handleButton15Click}>
          15. URLSearchParams 문자열 연결
        </button>
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleButton17Click}>17. 템플릿 문자열 방식</button>
        <button onClick={handleButton18Click}>
          18. URLSearchParams + 연결
        </button>
        <button onClick={handleButton19Click}>
          19. params에 URLSearchParams
        </button>
        <button onClick={handleButton20Click}>20. params에 일반 객체</button>
      </div>
    </div>
  );
}

export default App53;
