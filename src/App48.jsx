import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// ✅ 공통 네비게이션 바 컴포넌트
function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#2c3e50",
        padding: "1rem",
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
      }}
    >
      <Link style={linkStyle} to="/learn">
        📘 Learn
      </Link>
      <Link style={linkStyle} to="/tutorial">
        🎯 Tutorial
      </Link>
      <Link style={linkStyle} to="/docs">
        📚 Docs
      </Link>
      <Link style={linkStyle} to="/api">
        ⚙️ API
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

// ✅ 공통 푸터 컴포넌트
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.85rem",
        color: "#888",
      }}
    >
      ⛳️ 2025 MyLearningApp · All rights reserved
    </footer>
  );
}

// ✅ 공통 레이아웃 컴포넌트 (Outlet 사용!)
function Layout() {
  return (
    <>
      <NavBar />
      <main style={{ padding: "2rem", minHeight: "70vh", textAlign: "center" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// ✅ 페이지 컴포넌트들
function Learn() {
  return (
    <div>
      <h2>📘 Learn</h2>
      <p>React, Spring, Java 등 다양한 기술을 배워보세요!</p>
    </div>
  );
}

function Tutorial() {
  return (
    <div>
      <h2>🎯 Tutorial</h2>
      <p>실습 중심으로 코딩 실력을 키워보세요!</p>
    </div>
  );
}

function Docs() {
  return (
    <div>
      <h2>📚 Docs</h2>
      <p>공식 문서를 통해 깊이 있는 학습을 해보세요.</p>
    </div>
  );
}

function Api() {
  return (
    <div>
      <h2>⚙️ API</h2>
      <p>백엔드 API 연동과 활용 방법을 배웁니다.</p>
    </div>
  );
}

// ✅ 전체 앱 컴포넌트
function App48() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="learn" element={<Learn />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="docs" element={<Docs />} />
          <Route path="api" element={<Api />} />
          {/* 선택: Not Found 처리 */}
          <Route path="*" element={<h2>🚨 Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App48;
