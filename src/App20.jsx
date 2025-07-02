import React from "react";

function App20() {
  function AwesomeHeader({ children, onDoubleClick }) {
    return <h1 onDoubleClick={onDoubleClick}>{children}</h1>;
  }

  function AwesomeButton({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          fontSize: "2rem",
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <div>
      <AwesomeHeader onDoubleClick={() => console.log("A-header")}>
        wow
      </AwesomeHeader>
      <button onClick={() => console.log("regular-button")}>
        browser component button
      </button>
      <AwesomeButton onClick={() => console.log("Awesome-Button")}>
        cool button
      </AwesomeButton>
      <button variant="outline-danger" onClick={() => console.log("bootstrap")}>
        bootstrap
      </button>
    </div>
  );
}

export default App20;
