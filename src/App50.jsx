import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Button } from "react-bootstrap";

function MainLayout() {
  const navigate = useNavigate();

  function handleGojoClick() {
    navigate("/gojo");
  }

  function handleGetoClick() {
    navigate("/geto");
  }

  function handleIeiriClick() {
    navigate("/ieiri");
  }

  return (
    <div>
      {/* 네비게이션 바 */}
      <div className="d-flex justify-content-around my-3">
        <div>NAVBAR</div>
        <div>
          <Link to="/gojo">Gojo</Link>
        </div>
        <div>
          <Link to="/geto">Geto</Link>
        </div>
        <div>
          <Link to="/ieiri">Ieiri</Link>
        </div>
      </div>

      {/* 버튼 바 */}
      <div className="d-flex justify-content-around my-3">
        <div>BUTTONBAR</div>
        <div>
          <Button variant="link" onClick={handleGojoClick}>
            Gojo
          </Button>
        </div>
        <div>
          <Button variant="link" onClick={handleGetoClick}>
            Geto
          </Button>
        </div>
        <div>
          <Button variant="link" onClick={handleIeiriClick}>
            Ieiri
          </Button>
        </div>
      </div>

      {/* 본문 영역 */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App50() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="gojo" element={<div>Gojo</div>} />
          <Route path="geto" element={<div>Geto</div>} />
          <Route path="ieiri" element={<div>Ieiri</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App50;
