import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>홈</h2>
      <ul>
        <li>
          <Link to="/learn">배우기</Link>
        </li>
        <li>
          <Link to="/learn/java">자바</Link>
        </li>
        <li>
          <Link to="/learn/react">리액트</Link>
        </li>
        <li>
          <Link to="/learn/spring">스프링</Link>
        </li>
        <li>
          <Link to="/learn/java/collection">자바 콜렉션</Link>
        </li>
      </ul>
    </div>
  );
}

function App44() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="learn">
          <Route index element={<h3>web, app dev learn</h3>} />
          <Route path="react" element={<h3>리액트 배우기</h3>} />
          <Route path="spring" element={<h3>스프링 배우기</h3>} />

          <Route path="java">
            <Route index element={<h3>자바</h3>} />
            <Route path="collection" element={<h3>자바 콜렉션 배우기</h3>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App44;
