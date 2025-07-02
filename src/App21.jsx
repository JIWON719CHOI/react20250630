import React from "react";

function App21() {
  function handleButtonClick(e) {
    // e : event 객체
    console.log(e);

    // stopPropagation() : 이벤트 전달 막기
    e.stopPropagation();
    console.log("click!");
  }

  function handlePlotClick(e) {
    e.stopPropagation();
    console.log("plot click!");
  }

  return (
    <div className="p-5 bg-info" onClick={() => console.log("div-click")}>
      <p className="bg-danger" onClick={handlePlotClick}>
        Lorem ipsum dolor.
      </p>
      <button onClick={handleButtonClick}>button</button>
    </div>
  );
}

export default App21;
