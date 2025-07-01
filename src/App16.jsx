import "bootstrap/dist/css/bootstrap.min.css";
import { FaBattleNet } from "react-icons/fa6";
import "./App16.css";

import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  Badge,
  Alert,
  ButtonGroup,
  Row,
  Col,
  Table,
} from "react-bootstrap";

function App16() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #000000, #003366, #0ff)",
        color: "white",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand
            href="#"
            style={{
              color: "#00d5ff",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaBattleNet size={24} className="rotate-icon" />
            Gojo's Domain
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#abilities">Abilities</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 콘텐츠 영역 */}
      <Container>
        <Row className="g-4">
          {/* 고죠 프로필 카드 */}
          <Col md={6}>
            <Card
              bg="dark"
              text="light"
              border="primary"
              style={{ boxShadow: "0 0 10px #00cfff" }}
            >
              <Card.Img
                variant="top"
                src="https://i.namu.wiki/i/RjiyjdLYcrBJl6zbCdbBR5dYiOMHjmbH0hYQ1oMiFxcvtMWb8XEzXDZFiPPT_PrSUMxOTddUWyHaNGc5rcr2NQ.gif"
                alt="Gojo Satoru"
              />
              <Card.Body>
                <Card.Title style={{ color: "#00eaff" }}>
                  고죠 사토루 (Gojo Satoru)
                </Card.Title>
                <Card.Subtitle className="mb-2">
                  <Badge bg="info" text="dark">
                    Six Eyes
                  </Badge>{" "}
                  <Badge bg="warning" text="dark">
                    Limitless
                  </Badge>
                </Card.Subtitle>
                <Card.Text>
                  푸른 눈과 무한한 힘을 지닌 최강의 주술사. 그의 영역에 들어온
                  적은 결코 빠져나올 수 없다.
                </Card.Text>
                <Button variant="outline-info">More Infos</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* 능력 카드 */}
          <Col md={6}>
            <Card
              bg="black"
              text="white"
              border="light"
              style={{ boxShadow: "0 0 10px cyan" }}
            >
              <Card.Header style={{ backgroundColor: "#001f33" }}>
                Abilities
              </Card.Header>
              <Card.Body>
                <Card.Text as="div">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>무한(無限)</strong>: 모든 접근을 무한대로 느리게
                      만듦
                    </li>
                    <li>
                      <strong>홍염(赤焰)</strong>: 고열의 반격 기술
                    </li>
                    <li>
                      <strong>블루 & 레드</strong>: 흡수와 반발을 조합한 궁극기
                    </li>
                  </ul>
                </Card.Text>
                <ButtonGroup>
                  <Button variant="outline-primary">Gauge</Button>
                  <Button variant="outline-danger">Blood Rush</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* 기술 요약 테이블 */}
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="mt-3"
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.5",
            borderColor: "#00eaff",
            boxShadow: "0 0 10px #00f0ff",
          }}
        >
          <thead style={{ backgroundColor: "#001f33" }}>
            <tr>
              <th>#</th>
              <th>기술 이름</th>
              <th>설명</th>
              <th>위험도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>무한(無限)</td>
              <td>접근하는 모든 것을 무한히 느리게 만듦</td>
              <td>🟦 고위험</td>
            </tr>
            <tr style={{ backgroundColor: "#0a1a2a" }}>
              <td>2</td>
              <td>청(蒼, Blue)</td>
              <td>모든 것을 끌어당기는 힘</td>
              <td>🟧 중간</td>
            </tr>
            <tr>
              <td>3</td>
              <td>적(赫, Red)</td>
              <td>모든 것을 밀쳐내는 반발력</td>
              <td>🟥 위험</td>
            </tr>
            <tr style={{ backgroundColor: "#1a0033" }}>
              <td>4</td>
              <td>무량공처</td>
              <td>지각을 마비시키는 고죠의 영역 전개</td>
              <td>⚠️ 치명적</td>
            </tr>
          </tbody>
        </Table>

        {/* 경고 메시지 */}
        <Alert
          variant="info"
          className="mt-4"
          style={{ backgroundColor: "#003366", color: "white" }}
        >
          ⚠️ 주의: 고죠 사토루의 "농담"은 현실이 됩니다. 조심하세요.
        </Alert>

        {/* 버튼 영역 */}
        <div className="text-center my-4">
          <Button variant="info" size="lg" className="me-3">
            🌀 Domain Expansion
          </Button>
          <Button
            variant="dark"
            size="lg"
            className="border border-light text-info"
          >
            ♻️ Reverse Cursed
          </Button>
        </div>
      </Container>

      {/* Footer */}
      <footer
        className="bg-dark text-center text-light py-3 mt-5"
        style={{ borderTop: "1px solid #00eaff" }}
      >
        &copy; 2025 Gojo Satoru Fan Site
      </footer>
    </div>
  );
}

export default App16;
