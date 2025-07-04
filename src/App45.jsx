import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router";

function Child1() {
  // react router 에서 : 경로 -> dynamic segments
  let param = useParams();
  console.log(param);
  return (
    <div>
      <h3>{param.mySubPath}번 게시물 보기🐶</h3>
    </div>
  );
}

// function Child2() {
//   // const params = useParams();
//   const { content } = useParams();
//   return <h3>{content} 배우기</h3>;
// }

function Child2() {
  const { mySubPath } = useParams();

  const renderContent = () => {
    switch (mySubPath) {
      case "collection":
        return "자바 콜렉션 배우기";
      case "io":
        return "자바 IO 배우기";
      case "stream":
        return "자바 스트림 배우기";
      case "class":
        return "자바 클래스 배우기";
      default:
        return "존재하지 않는 주제입니다 😢";
    }
  };

  return (
    <div>
      <h3>{renderContent()}</h3>
    </div>
  );
}

function App45() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route path=":mySubPath" element={<Child1 />} />
          </Route>
          <Route path="java">
            <Route path=":mySubPath" element={<Child2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App45;
