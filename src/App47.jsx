import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";

function Child1() {
  const [params, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(params.get("keyword") || "");
  const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  // 🔍 검색 버튼 클릭
  function handleSearchClick() {
    setSearchParams({ keyword });
  }

  // 📄 페이지 번호 클릭
  function handlePageButtonClick(num) {
    const newParams = new URLSearchParams(params);
    newParams.set("page", num);
    newParams.set("keyword", keyword); // 검색어도 유지
    setSearchParams(newParams);
  }

  // 🎯 현재 page 번호 가져오기
  const currentPage = Number(params.get("page")) || 1;

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h3>📄 게시판 목록</h3>

      {/* 🔍 검색 영역 */}
      <div className="d-flex mb-3">
        <input
          type="text"
          placeholder="검색어 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="form-control me-2"
        />
        <button className="btn btn-primary" onClick={handleSearchClick}>
          🔍
        </button>
      </div>

      {/* 페이지네이션 */}
      <div className="d-flex justify-content-center gap-2 flex-wrap">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => handlePageButtonClick(num)}
            className={`btn ${
              num === currentPage ? "btn-secondary" : "btn-outline-secondary"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* 🔎 현재 파라미터 상태 확인용 (디버그용) */}
      <div className="mt-4 text-muted">
        현재 검색어: <strong>{params.get("keyword") || "-"}</strong>, 페이지:{" "}
        <strong>{params.get("page") || "1"}</strong>
      </div>
    </div>
  );
}

function App47() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board/list" element={<Child1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App47;
