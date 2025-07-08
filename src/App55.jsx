import React from "react";
import axios from "axios";

function App55() {
  function handleButton1Click() {
    axios.put("/api/main30/sub1");
  }

  function handleButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  function handleButton5Click() {
    axios.put("/api/main30/sub5", {
      nickName: "Geto", // string
      // object
      team: {
        name: "Jujutsu",
        location: "Tokyo",
      },
      age: 27, // number
      married: false, // boolean
      address: ["Osaka", "Kyoto", "Tokyo"], // array
    });
  }

  function handleButton7Click() {}

  return (
    <div>
      <button onClick={handleButton1Click}>01. PUT + 기본 요청</button>
      <button onClick={handleButton2Click}>02. PUT + Delete 요청</button>
      <button onClick={handleButton5Click}>05. PUT + DTO 파싱</button>
      <button onClick={handleButton7Click}>07. POST + MultiFile</button>
    </div>
  );
}

export default App55;
