import React from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router";

// /board/detail?id=3 : <h3>3번 게시물</h3>

function Child1() {
  // useSearchParams hook : query string (request param) 정보 얻기
  // URLSearchParams 와 set 메소드를 배열로 리턴
  const [params] = useSearchParams();

  console.log(params);
  console.log("id", params.get("id"));
  return (
    <div>
      <h3>{params.get("id")} 번 게시물 보기🥸</h3>
    </div>
  );
}

function Child2() {
  const [params] = useSearchParams();

  return (
    <div>
      <h3>{params.get("id")} 회원 정보 보기👤</h3>
    </div>
  );
}

function App46() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="board/detail" element={<Child1 />} />
          <Route path="member/detail" element={<Child2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App46;
