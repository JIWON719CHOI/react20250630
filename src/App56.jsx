import React, { useState } from "react";
import axios from "axios";

function App56() {
  const [myFiles, setMyFiles] = useState();

  function handleButton1Click() {
    // file 전송 시 postForm/putForm
    axios.postForm("/api/main31/sub1", {
      name: "gojo",
      age: 28,
      myFiles: myFiles,
    });
  }

  function handleButton2Click() {
    axios.postForm("/api/main31/sub2", {
      address: "Tokyo",
      score: 99.99,
      yourFiles: myFiles,
    });
  }

  function handleButton3Click() {
    axios.postForm("/api/main31/sub3", {
      city: "Shibuya",
      uploadFiles: myFiles,
    });
  }

  function handleButton4Click() {
    axios.postForm("/api/main31/sub4", {
      id: 27,
      userName: "Geto",
      address: "Okinawa",
      uploadFiles: myFiles,
    });
  }

  function handleButton5Click() {
    axios.postForm("/api/main31/sub5", {
      score: 99.98,
      className: "Jujutsu",
      location: "Tokyo",
      uploads: myFiles,
    });
  }

  return (
    <div>
      {/* file은 e.target.files */}
      <input type="file" onChange={(e) => setMyFiles(e.target.files)} />
      <button onClick={handleButton1Click}>01_Single_File_Send</button>
      <input
        type="file"
        multiple={true}
        onChange={(e) => setMyFiles(e.target.files)}
      />
      <button onClick={handleButton2Click}>02_Multiple_File_Send</button>
      <input
        type="file"
        multiple={true}
        onChange={(e) => setMyFiles(e.target.files)}
      />
      <button onClick={handleButton3Click}>03_Multiple_File_Send</button>
      <input
        type="file"
        multiple={true}
        onChange={(e) => setMyFiles(e.target.files)}
      />
      <button onClick={handleButton4Click}>04_Multiple_File_Send</button>
      <input
        type="file"
        multiple
        onChange={(e) => setMyFiles(e.target.files)}
      />
      <button onClick={handleButton5Click}>05_Multiple_File_Send</button>
      <div>
        <button
          onClick={() => {
            axios.get("/api/main31/sub6/tokyo");
          }}
        >
          TOKYO
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub6/kyoto");
          }}
        >
          KYOTO
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub6/osaka");
          }}
        >
          OSAKA
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            axios.get("/api/main31/sub7/1207");
          }}
        >
          id 1207
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub7/0205");
          }}
        >
          id 0205
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub7/1126");
          }}
        >
          id 1126
        </button>
      </div>
    </div>
  );
}

export default App56;
