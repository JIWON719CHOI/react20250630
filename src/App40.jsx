import React, { useState } from "react";

function MyComp1() {
  const [url, setUrl] = React.useState("/board/list");
  const [target, setTarget] = useState(url);
  let childComp = null;
  switch (target) {
    case "/board/list":
      childComp = (
        <div>
          <h3>Forum List</h3>
        </div>
      );
      break;
    case "/member/list":
      childComp = (
        <div>
          <h3>Member List</h3>
        </div>
      );
      break;
    case "/board/3":
      childComp = (
        <div>
          <h3>Page Num.3</h3>
        </div>
      );
      break;
    case "/board/4":
      childComp = (
        <div>
          <h3>Page Num.4</h3>
        </div>
      );
      break;
    default:
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={() => setTarget(url)}>GO</button>
      </div>
      <div>{childComp}</div>
    </div>
  );
}

function App40() {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App40;
