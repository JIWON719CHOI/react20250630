import React from "react";
import axios from "axios";

function App57() {
  function handleButton1Click() {
    axios.get("/api/main32/sub1").then((res) => {
      console.log("응답 받은 후 실행되는 코드");
      console.log(res.data);
    });
  }

  async function handleButton2Click() {
    try {
      const res = await axios.get("/api/main32/sub2");
      console.log("💩응가 받음");
      console.log(res.data);
    } catch (err) {
      console.error("요청 실패:", err);
    }
  }

  function handleButton3Click() {
    axios.get("/api/main32/sub3").then((res) => {
      console.log(res.data); // JSON 이 parsing 된 js object
      console.log();
      const data = res.data;
      console.log(data.name);
      console.log(data.age);
    });
  }

  function handleButton5Click() {
    axios.get("/api/main32/sub5").then((res) => {
      const data = res.data;
      console.log(data.id, data.city, data.phone.phone1, data.phone.phone2);
    });
  }

  function handleButton6Click() {
    axios.get("/api/main32/sub6").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.address[0],
        data.address[1],
        data.address[2],
      );
    });
  }

  function handleButton7Click() {
    axios.get("/api/main32/sub7").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.fruits[0],
        data.fruits[1],
        data.address.city,
        data.address.country,
      );
    });
  }

  function handleButton8Click() {
    axios.get("/api/main32/sub8").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.title,
        data.price,
        data.category.author,
        data.category.genre,
        data.orders[0],
        data.orders[1],
      );
    });
  }

  function handleButton15Click() {
    // axios.then()은 200번대 응답 코드에만 실행
    // 200 번대 외에는 catch 메소드 실행
    axios
      .get("/api/main32/sub15")
      .then((res) => {
        console.log("15_OK, RESPONDED!");
      })
      .catch((err) => {
        console.log("15_ERROR!");
      });
  }

  function handleButton16Click() {
    axios
      .get("/api/main32/sub16")
      .then((res) => {
        console.log("16_OK, RESPONDED!");
      })
      .catch((err) => {
        console.log("16_internalServerError!");
      });
  }

  function handleButton18Click() {
    axios
      .get("/api/main32/sub18")
      .then((res) => {
        console.log("18_OK, RESPONDED!");
      })
      .catch((err) => {
        console.log("18_internalServerError!");
      });
  }

  function handleButton19Click() {
    axios
      .get("/api/main32/sub19")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  }

  function handleButton21Click() {
    axios
      .get("/api/main32/sub21")
      .then((res) => {
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);
      })
      .catch((err) => {
        console.log(err.res.data[0]);
        console.log(err.res.data[1]);
        console.log(err.res.data[2]);
      });
  }

  function handleButton22Click() {
    axios
      .get("/api/main32/sub22")
      .then((res) => {
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);
      })
      .catch((err) => {
        console.log(err.res.data[0]);
        console.log(err.res.data[1]);
        console.log(err.res.data[2]);
      });
  }

  function handleButton23Click() {
    axios
      .get("/api/main32/sub23")
      .then((res) => {
        console.log("GOOD");
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 400) {
          console.log("Client error");
        } else if (err.status === 500) {
          console.log("Server Error");
        }
      })
      .finally(() => {
        console.log("🤷‍♀️What ever~ Run Code!");
      });
  }

  return (
    <div>
      <div>
        <button onClick={handleButton1Click}>01. GET DATA</button>
        <button onClick={handleButton2Click}>02. GET DATA</button>
        <button onClick={handleButton3Click}>03. 직렬화된 JSON DATA GET</button>
        <button onClick={handleButton5Click}>05. 직렬화된 JSON DATA GET</button>
        <button onClick={handleButton6Click}>06. 직렬화된 JSON DATA GET</button>
        <button onClick={handleButton7Click}>07. 직렬화된 JSON DATA GET</button>
        <button onClick={handleButton8Click}>08. 직렬화된 JSON DATA GET</button>
      </div>
      <div>
        <button
          onClick={() => {
            axios.get("/api/main32/sub9");
          }}
        >
          200 error
        </button>
        <button
          onClick={() => {
            axios.get("/api/main32/sub10");
          }}
        >
          404 error
        </button>
        <button
          onClick={() => {
            axios.get("/api/main32/sub11");
          }}
        >
          500 error
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            axios.get("/api/main32/sub12");
          }}
        >
          200
        </button>
        <button
          onClick={() => {
            axios.get("/api/main32/sub13");
          }}
        >
          405
        </button>
        <button
          onClick={() => {
            axios.get("/api/main32/sub14");
          }}
        >
          404
        </button>
      </div>
      <div>
        <button onClick={handleButton15Click}>15. 200_ResponseEntity</button>
        <button onClick={handleButton16Click}>16. 400_ResponseEntity</button>
        <button onClick={handleButton18Click}>18. 500_ResponseEntity</button>
        <button onClick={handleButton19Click}>19. 404_ResponseEntity</button>
        <button onClick={handleButton21Click}>21. 200_ResponseEntity</button>
        <button onClick={handleButton22Click}>22. 500_ResponseEntity</button>
        <button onClick={handleButton23Click}>23. Random_ResponseEntity</button>
      </div>
    </div>
  );
}

export default App57;
