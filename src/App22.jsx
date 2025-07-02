import React from "react";

function App22() {
  function handleLinkSubmit(e) {
    e.preventDefault();
    return console.log("link submitted!");
  }

  return (
    <div>
      <form
        action="https://www.google.com/search"
        method="GET"
        target="_blank"
        onSubmit={handleLinkSubmit}
      >
        <input type="text" name="q" placeholder="검색어 입력" />
        <button type="submit">Search</button>
      </form>

      <button onClick={() => console.log("button-click")}>button</button>
      <a href="http://www.google.com" onClick={handleLinkClick}>
        google
      </a>
    </div>
  );

  function handleLinkClick(e) {
    // event.preventDefault() : 브라우저 기본 동작을 막기
    e.preventDefault();
    return console.log("link-click");
  }
}

export default App22;
