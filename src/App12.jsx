function MyAwesomeButton({ color, children }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: "red",
        padding: "10px",
        borderRadius: "10px",
        border: "2px solid green",
        fontSize: "2rem",
      }}
    >
      {children}
    </button>
  );
}

function App12() {
  return (
    <>
      <MyAwesomeButton>등록</MyAwesomeButton>
      <hr />
      <MyAwesomeButton color="blue">저장</MyAwesomeButton>
      <hr />
      <MyAwesomeButton color="yellow">수정</MyAwesomeButton>
    </>
  );
}

const myAddress = "seoul";
// export : 현재 파일의 함수(변수, 값)을 내보내기
// named export
export { MyAwesomeButton, myAddress };

// default export
export default App12;
