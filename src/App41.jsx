import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function BoardList() {
  return (
    <div>
      <h3>게시물 목록</h3>
    </div>
  );
}

function MemberList() {
  return (
    <div>
      <h3>회원 목록</h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h3>어바웃 정보</h3>
    </div>
  );
}

function App41() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="board/list" element={<BoardList />}></Route>
          <Route path="member/list" element={<MemberList />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App41;
