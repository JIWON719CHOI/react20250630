import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

// ✅ 공통 네비게이션 바 컴포넌트
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand className="fw-bold" href="#">
        📘 React 학습
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/learn">
            Learn
          </Nav.Link>
          <Nav.Link as={Link} to="/tutorial">
            Tutorial
          </Nav.Link>
          <Nav.Link as={Link} to="/docs">
            Docs
          </Nav.Link>
          <Nav.Link as={Link} to="/api">
            API
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// ✅ 공통 사이드바 컴포넌트 (왼쪽)
function LeftSidebar() {
  return (
    <div className="bg-light p-3 h-100 border-end">
      <h6 className="fw-bold">왼쪽 메뉴</h6>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/learn">
          📘 Learn
        </Nav.Link>
        <Nav.Link as={Link} to="/tutorial">
          🎯 Tutorial
        </Nav.Link>
      </Nav>
    </div>
  );
}

// ✅ 공통 사이드바 컴포넌트 (오른쪽)
function RightSidebar() {
  return (
    <div className="bg-light p-3 h-100 border-start">
      <h6 className="fw-bold">리소스</h6>
      <Nav className="flex-column">
        <Nav.Link href="https://ko.react.dev" target="_blank">
          React 공식
        </Nav.Link>
        <Nav.Link href="https://react-bootstrap.github.io" target="_blank">
          React-Bootstrap
        </Nav.Link>
      </Nav>
    </div>
  );
}

// ✅ 공통 푸터 컴포넌트
function Footer() {
  return (
    <footer className="bg-light py-3 text-center border-top">
      <small className="text-muted">
        ⛳️ 2025 MyLearningApp · All rights reserved
      </small>
    </footer>
  );
}

// ✅ 공통 레이아웃 컴포넌트 (Outlet 사용!)
function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        <Row className="g-0">
          <Col md={2} className="d-none d-md-block">
            <LeftSidebar />
          </Col>
          <Col md={8} className="bg-light py-5">
            <Container className="text-center">
              <Outlet />
            </Container>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <RightSidebar />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

// ✅ 페이지 컴포넌트들
function Learn() {
  return (
    <div>
      <h2 className="mb-3">📘 Learn</h2>
      <p className="lead">
        React, Spring, Java 등 다양한 최신 기술을 이론부터 실습까지 배워보세요.
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          doloribus placeat qui tempore! Error facilis fugit hic illo modi nemo
          nisi quaerat quas repellendus reprehenderit? Error mollitia possimus
          quas vitae!
        </span>
        <span>
          Architecto consequatur, minima officiis perferendis soluta voluptate.
          Asperiores, culpa dolor dolorem eius eligendi esse eveniet ex
          excepturi expedita fugit illum magnam magni modi omnis quaerat qui
          quisquam, quo sed, veniam.
        </span>
        <span>
          Ad aperiam asperiores culpa esse harum itaque labore laudantium
          provident qui ratione? Alias culpa cum dolor eaque eum iure libero
          quibusdam quos sit, voluptates. Doloremque eum incidunt laboriosam
          molestiae vel.
        </span>
        <span>
          Dolorem eius expedita fugit, hic, impedit itaque, necessitatibus optio
          qui ratione soluta sunt suscipit voluptas? Aspernatur consequuntur
          eligendi inventore labore mollitia odio pariatur? Aperiam asperiores
          labore nostrum optio voluptatum. Recusandae.
        </span>
        <span>
          Aliquam amet architecto blanditiis culpa earum facere facilis iure
          libero modi nemo nihil porro, quae quia rem tempora vero voluptatum. A
          ab eius error laboriosam laudantium libero nam repellendus sit.
        </span>
        <span>
          A adipisci, asperiores, consequuntur deserunt molestias neque nesciunt
          nobis non quaerat, rem repellendus repudiandae voluptate voluptatibus?
          Ab accusantium assumenda blanditiis culpa illum in ipsum maxime
          necessitatibus nulla, porro repudiandae tenetur?
        </span>
        <span>
          Aliquam animi aperiam commodi eligendi error expedita explicabo illo
          ipsam magnam, nisi odio placeat porro quod ratione rerum suscipit
          voluptatum? Aspernatur autem in labore modi, molestias praesentium quo
          tempore voluptate!
        </span>
        <span>
          Amet asperiores at aut debitis dolorum iure nesciunt non obcaecati
          tempore? Expedita impedit quis sequi voluptate? Autem cum earum
          impedit labore natus non odio quae repellendus. Error esse id
          provident.
        </span>
        <span>
          Amet doloremque impedit nam nisi nostrum nulla ratione totam. Ab atque
          doloribus ex fuga in ipsa, minus molestias necessitatibus obcaecati
          omnis praesentium quo similique velit. Fuga fugiat magnam
          reprehenderit repudiandae!
        </span>
        <span>
          Ad aliquam amet atque aut, culpa cupiditate eum, exercitationem
          explicabo iusto laboriosam maxime minima molestiae obcaecati odio
          quasi quos ratione sed temporibus totam unde vel veritatis vero
          voluptatum? Autem, dolor.
        </span>
      </p>
    </div>
  );
}

function Tutorial() {
  return (
    <div>
      <h2 className="mb-3">🎯 Tutorial</h2>
      <p className="lead">
        단계별 실습을 통해 React 앱을 만들어보며 코딩 실력을 키워보세요.
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          doloribus placeat qui tempore! Error facilis fugit hic illo modi nemo
          nisi quaerat quas repellendus reprehenderit? Error mollitia possimus
          quas vitae!
        </span>
        <span>
          Architecto consequatur, minima officiis perferendis soluta voluptate.
          Asperiores, culpa dolor dolorem eius eligendi esse eveniet ex
          excepturi expedita fugit illum magnam magni modi omnis quaerat qui
          quisquam, quo sed, veniam.
        </span>
        <span>
          Ad aperiam asperiores culpa esse harum itaque labore laudantium
          provident qui ratione? Alias culpa cum dolor eaque eum iure libero
          quibusdam quos sit, voluptates. Doloremque eum incidunt laboriosam
          molestiae vel.
        </span>
        <span>
          Dolorem eius expedita fugit, hic, impedit itaque, necessitatibus optio
          qui ratione soluta sunt suscipit voluptas? Aspernatur consequuntur
          eligendi inventore labore mollitia odio pariatur? Aperiam asperiores
          labore nostrum optio voluptatum. Recusandae.
        </span>
        <span>
          Aliquam amet architecto blanditiis culpa earum facere facilis iure
          libero modi nemo nihil porro, quae quia rem tempora vero voluptatum. A
          ab eius error laboriosam laudantium libero nam repellendus sit.
        </span>
        <span>
          A adipisci, asperiores, consequuntur deserunt molestias neque nesciunt
          nobis non quaerat, rem repellendus repudiandae voluptate voluptatibus?
          Ab accusantium assumenda blanditiis culpa illum in ipsum maxime
          necessitatibus nulla, porro repudiandae tenetur?
        </span>
        <span>
          Aliquam animi aperiam commodi eligendi error expedita explicabo illo
          ipsam magnam, nisi odio placeat porro quod ratione rerum suscipit
          voluptatum? Aspernatur autem in labore modi, molestias praesentium quo
          tempore voluptate!
        </span>
        <span>
          Amet asperiores at aut debitis dolorum iure nesciunt non obcaecati
          tempore? Expedita impedit quis sequi voluptate? Autem cum earum
          impedit labore natus non odio quae repellendus. Error esse id
          provident.
        </span>
        <span>
          Amet doloremque impedit nam nisi nostrum nulla ratione totam. Ab atque
          doloribus ex fuga in ipsa, minus molestias necessitatibus obcaecati
          omnis praesentium quo similique velit. Fuga fugiat magnam
          reprehenderit repudiandae!
        </span>
        <span>
          Ad aliquam amet atque aut, culpa cupiditate eum, exercitationem
          explicabo iusto laboriosam maxime minima molestiae obcaecati odio
          quasi quos ratione sed temporibus totam unde vel veritatis vero
          voluptatum? Autem, dolor.
        </span>
      </p>
    </div>
  );
}

function Docs() {
  return (
    <div>
      <h2 className="mb-3">📚 Docs</h2>
      <p className="lead">
        공식 문서와 함께 React의 철학과 API를 깊이 있게 익히세요.
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          doloribus placeat qui tempore! Error facilis fugit hic illo modi nemo
          nisi quaerat quas repellendus reprehenderit? Error mollitia possimus
          quas vitae!
        </span>
        <span>
          Architecto consequatur, minima officiis perferendis soluta voluptate.
          Asperiores, culpa dolor dolorem eius eligendi esse eveniet ex
          excepturi expedita fugit illum magnam magni modi omnis quaerat qui
          quisquam, quo sed, veniam.
        </span>
        <span>
          Ad aperiam asperiores culpa esse harum itaque labore laudantium
          provident qui ratione? Alias culpa cum dolor eaque eum iure libero
          quibusdam quos sit, voluptates. Doloremque eum incidunt laboriosam
          molestiae vel.
        </span>
        <span>
          Dolorem eius expedita fugit, hic, impedit itaque, necessitatibus optio
          qui ratione soluta sunt suscipit voluptas? Aspernatur consequuntur
          eligendi inventore labore mollitia odio pariatur? Aperiam asperiores
          labore nostrum optio voluptatum. Recusandae.
        </span>
        <span>
          Aliquam amet architecto blanditiis culpa earum facere facilis iure
          libero modi nemo nihil porro, quae quia rem tempora vero voluptatum. A
          ab eius error laboriosam laudantium libero nam repellendus sit.
        </span>
        <span>
          A adipisci, asperiores, consequuntur deserunt molestias neque nesciunt
          nobis non quaerat, rem repellendus repudiandae voluptate voluptatibus?
          Ab accusantium assumenda blanditiis culpa illum in ipsum maxime
          necessitatibus nulla, porro repudiandae tenetur?
        </span>
        <span>
          Aliquam animi aperiam commodi eligendi error expedita explicabo illo
          ipsam magnam, nisi odio placeat porro quod ratione rerum suscipit
          voluptatum? Aspernatur autem in labore modi, molestias praesentium quo
          tempore voluptate!
        </span>
        <span>
          Amet asperiores at aut debitis dolorum iure nesciunt non obcaecati
          tempore? Expedita impedit quis sequi voluptate? Autem cum earum
          impedit labore natus non odio quae repellendus. Error esse id
          provident.
        </span>
        <span>
          Amet doloremque impedit nam nisi nostrum nulla ratione totam. Ab atque
          doloribus ex fuga in ipsa, minus molestias necessitatibus obcaecati
          omnis praesentium quo similique velit. Fuga fugiat magnam
          reprehenderit repudiandae!
        </span>
        <span>
          Ad aliquam amet atque aut, culpa cupiditate eum, exercitationem
          explicabo iusto laboriosam maxime minima molestiae obcaecati odio
          quasi quos ratione sed temporibus totam unde vel veritatis vero
          voluptatum? Autem, dolor.
        </span>
      </p>
    </div>
  );
}

function Api() {
  return (
    <div>
      <h2 className="mb-3">⚙️ API</h2>
      <p className="lead">
        백엔드 API 연동 방법과 fetch, axios 등을 이용한 데이터 처리 방법을
        배워요.
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          doloribus placeat qui tempore! Error facilis fugit hic illo modi nemo
          nisi quaerat quas repellendus reprehenderit? Error mollitia possimus
          quas vitae!
        </span>
        <span>
          Architecto consequatur, minima officiis perferendis soluta voluptate.
          Asperiores, culpa dolor dolorem eius eligendi esse eveniet ex
          excepturi expedita fugit illum magnam magni modi omnis quaerat qui
          quisquam, quo sed, veniam.
        </span>
        <span>
          Ad aperiam asperiores culpa esse harum itaque labore laudantium
          provident qui ratione? Alias culpa cum dolor eaque eum iure libero
          quibusdam quos sit, voluptates. Doloremque eum incidunt laboriosam
          molestiae vel.
        </span>
        <span>
          Dolorem eius expedita fugit, hic, impedit itaque, necessitatibus optio
          qui ratione soluta sunt suscipit voluptas? Aspernatur consequuntur
          eligendi inventore labore mollitia odio pariatur? Aperiam asperiores
          labore nostrum optio voluptatum. Recusandae.
        </span>
        <span>
          Aliquam amet architecto blanditiis culpa earum facere facilis iure
          libero modi nemo nihil porro, quae quia rem tempora vero voluptatum. A
          ab eius error laboriosam laudantium libero nam repellendus sit.
        </span>
        <span>
          A adipisci, asperiores, consequuntur deserunt molestias neque nesciunt
          nobis non quaerat, rem repellendus repudiandae voluptate voluptatibus?
          Ab accusantium assumenda blanditiis culpa illum in ipsum maxime
          necessitatibus nulla, porro repudiandae tenetur?
        </span>
        <span>
          Aliquam animi aperiam commodi eligendi error expedita explicabo illo
          ipsam magnam, nisi odio placeat porro quod ratione rerum suscipit
          voluptatum? Aspernatur autem in labore modi, molestias praesentium quo
          tempore voluptate!
        </span>
        <span>
          Amet asperiores at aut debitis dolorum iure nesciunt non obcaecati
          tempore? Expedita impedit quis sequi voluptate? Autem cum earum
          impedit labore natus non odio quae repellendus. Error esse id
          provident.
        </span>
        <span>
          Amet doloremque impedit nam nisi nostrum nulla ratione totam. Ab atque
          doloribus ex fuga in ipsa, minus molestias necessitatibus obcaecati
          omnis praesentium quo similique velit. Fuga fugiat magnam
          reprehenderit repudiandae!
        </span>
        <span>
          Ad aliquam amet atque aut, culpa cupiditate eum, exercitationem
          explicabo iusto laboriosam maxime minima molestiae obcaecati odio
          quasi quos ratione sed temporibus totam unde vel veritatis vero
          voluptatum? Autem, dolor.
        </span>
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2 className="text-danger">🚨 페이지를 찾을 수 없습니다</h2>
      <p>존재하지 않는 경로입니다.</p>
    </div>
  );
}

// ✅ 전체 앱 컴포넌트
function App49() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="learn" element={<Learn />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="docs" element={<Docs />} />
          <Route path="api" element={<Api />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App49;
