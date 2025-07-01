// App17.jsx 맨 위에 필요 import
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  Carousel,
  Form,
  Modal,
  Tooltip,
  OverlayTrigger,
  Spinner,
  Tabs,
  Tab,
  ProgressBar,
  Alert,
  Accordion,
  Toast,
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";

function App17() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(true);

  return (
    <>
      {/* 네비게이션 */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={() => setShowModal(true)}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="my-4">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              src="https://64.media.tumblr.com/8076a4062c61e798424cf534d3f091c2/1920ff86bce69fc4-90/s500x750/02920657c420caa17f9996d6d88651da3500b676.gif"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Example of a carousel item.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              src="https://64.media.tumblr.com/ffc68e76aaa7fa6d30fadb103c6fe3e0/2d5dd3eeb972cdd0-35/s540x810/90727bf2de00d3ba9f7e18917b727dd0c9cb45fe.gif"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Another slide with content.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="my-4">
          {/* Card */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Welcome!</Card.Title>
                <Card.Text>
                  This is a multi-functional Bootstrap demo page.
                </Card.Text>
                <Button variant="primary">Go Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Form */}
          <Col md={6}>
            <Form>
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Check type="checkbox" label="Remember me" />
              <Button variant="success" className="mt-2">
                Login
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Tooltip & Spinner */}
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>로딩중입니다</Tooltip>}
        >
          <Button variant="warning">
            Show Spinner <Spinner animation="border" size="sm" />
          </Button>
        </OverlayTrigger>

        {/* Tabs */}
        <Tabs defaultActiveKey="home" className="my-4">
          <Tab eventKey="home" title="홈">
            <p>홈 컨텐츠입니다.</p>
          </Tab>
          <Tab eventKey="profile" title="프로필">
            <p>프로필 정보 표시</p>
          </Tab>
          <Tab eventKey="contact" title="문의">
            <p>연락처 및 문의 내용</p>
          </Tab>
        </Tabs>

        {/* Accordion */}
        <Accordion defaultActiveKey="0" className="my-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>자주 묻는 질문</Accordion.Header>
            <Accordion.Body>
              React-Bootstrap은 Bootstrap 컴포넌트를 React 방식으로 제공합니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>사용법은 어렵나요?</Accordion.Header>
            <Accordion.Body>아주 쉽습니다. 그대로 쓰면 돼요.</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* ProgressBar */}
        <h5>진행도</h5>
        <ProgressBar now={60} label={`60%`} className="mb-4" />

        {/* ButtonGroup */}
        <h5>작업 그룹</h5>
        <ButtonToolbar className="mb-3">
          <ButtonGroup className="me-2">
            <Button variant="outline-primary">왼쪽</Button>
            <Button variant="outline-primary">가운데</Button>
            <Button variant="outline-primary">오른쪽</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline-secondary">기타1</Button>
            <Button variant="outline-secondary">기타2</Button>
          </ButtonGroup>
        </ButtonToolbar>

        {/* Alert */}
        <Alert variant="info">🚀 최신 버전으로 업데이트되었습니다!</Alert>

        {/* Toast */}
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          bg="dark"
          className="text-white position-fixed bottom-0 end-0 m-3"
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">알림</strong>
          </Toast.Header>
          <Toast.Body>새 메시지가 도착했습니다!</Toast.Body>
        </Toast>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>문의하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>이메일: support@example.com</p>
          <p>전화번호: 010-1234-5678</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer className="bg-dark text-center text-light py-3 mt-5">
        &copy; 2025 Gojo Satoru Fan Site
      </footer>
    </>
  );
}

export default App17;
