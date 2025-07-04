import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// 연습
// 각 버튼 클릭 시
function MyLayout() {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/");
  }

  function handleMyClick() {
    navigate("/my");
  }

  function handleOtherClick() {
    navigate("/other");
  }

  return (
    <div>
      <div>
        {/* / 로 이동*/}
        <Button variant="outline-info" onClick={handleHomeClick}>
          HOME
        </Button>

        {/* /qwe 로 이동*/}
        <Button variant="outline-info" onClick={handleMyClick}>
          MY
        </Button>

        {/* /asd 로 이동*/}
        <Button variant="outline-info" onClick={handleOtherClick}>
          OTHER
        </Button>
        {/* history(방문기록) 기준으로 이동하기 */}
        <Button onClick={() => navigate(-1)}>BACK</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App51() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route
              index
              element={
                <div>
                  <h3>HOME</h3>
                </div>
              }
            />
            <Route
              path="my"
              element={
                <div>
                  <h3>My</h3>
                </div>
              }
            />
            <Route
              path="other"
              element={
                <div>
                  <h3>Other</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App51;
