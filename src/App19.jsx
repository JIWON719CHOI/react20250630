import React from "react";

function App19(props) {
  // on... prop: event prop
  // 함수를 값으로 받아서 이벤트가 발생하면 함수를 실행.

  function action1() {
    console.log("title-mouse-in");
  }

  function action2() {
    console.log("title-mouse-out");
  }

  const action3 = function () {
    console.log("plot-double-click");
  };

  const action4 = function () {
    console.log("button-click");
  };

  const action5 = function () {
    console.log("button-double-click");
  };
  const action6 = function () {
    console.log("button-mouse-in");
  };
  const greet = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <button
        onClick={action4}
        onDoubleClick={action5}
        onMouseEnter={action6}
        style={{ padding: "10px" }}
      >
        button
      </button>
      <button onClick={() => greet("Gojo")}>Say Hello</button>
      <p onDoubleClick={action3} className="bg-dark text-success">
        plot
      </p>
      <h3
        onMouseEnter={action1}
        onMouseLeave={action2}
        className="text-warning"
      >
        title
      </h3>
    </div>
  );
}

export default App19;
