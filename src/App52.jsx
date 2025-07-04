import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Layout() {
  return (
    <>
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/react" style={{ cursor: "pointer" }}>
            📘 React 학습
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/react/learn">
                Learn
              </Nav.Link>
              <Nav.Link as={Link} to="/react/state">
                State
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 본문 영역 */}
      <Container>
        <Outlet />
      </Container>

      {/* 푸터 */}
      <footer className="bg-light text-center py-3 mt-5 border-top">
        <small className="text-muted">© 2025 MyReactApp</small>
      </footer>
    </>
  );
}

function Learn() {
  return (
    <div className="text-center">
      <h3 className="mb-3">📚 LEARN</h3>
      <p className="lead">React를 체계적으로 배워봅시다!</p>
    </div>
  );
}

function State() {
  return (
    <div className="text-center">
      <h3 className="mb-3">⚛️ STATE</h3>
      <p className="lead">React 상태 관리의 기본을 익혀보세요.</p>
    </div>
  );
}

function App52() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react" element={<Layout />}>
          <Route
            index
            element={
              <div className="text-center mt-5">
                <h2>환영합니다!</h2>
                <p>좌측 메뉴에서 Learn 또는 State를 선택해보세요.</p>
              </div>
            }
          />
          <Route path="learn" element={<Learn />} />
          <Route path="state" element={<State />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App52;
