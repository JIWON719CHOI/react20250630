import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// 🧩 각 컴포넌트
function Learn() {
  return <h3>react 배우기</h3>;
}

function Tutorial() {
  return <h3>react 공부하기</h3>;
}

function Install() {
  return <h3>react 설치하기</h3>;
}

function Reference() {
  return <h3>react 참고문서</h3>;
}

// 🏠 홈 링크 컴포넌트
function Home() {
  return (
    <div>
      <h2>📚 React 라우팅 연습</h2>
      <ul>
        <li>
          <Link to="/learn">React 배우기</Link>
        </li>
        <li>
          <Link to="/tutorial">React 공부하기</Link>
        </li>
        <li>
          <Link to="/install">React 설치하기</Link>
        </li>
        <li>
          <Link to="/reference/react">React 참고문서</Link>
        </li>
      </ul>
    </div>
  );
}

// 🚀 메인 앱
function App42() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/install" element={<Install />} />
        <Route path="/reference/react" element={<Reference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App42;
