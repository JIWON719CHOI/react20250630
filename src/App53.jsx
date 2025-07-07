import React from "react";
import axios from "axios";

function App53() {
  function handleButton1Click() {
    axios.request({
      method: "get",
      url: "https://localhost:8000/main1/sub1",
    });
  }

  return (
    <div>
      <button onClick={handleButton1Click}>REQUEST SEND1️⃣</button>
    </div>
  );
}

export default App53;
