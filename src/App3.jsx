// 처음 만드는 component
// component : 함수
// component 명 (함수명) : UpperCamelCase
function MyAwesomeButton() {
  // 함수 코드...

  // return 에 dom에 그려야 할 코드 작성
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      붰튡.
    </button>
  );
}

function MyNewHeader() {
  return (
    <h1
      style={{
        backgroundColor: "red",
        color: "black",
        border: "3px solid black",
        padding: "10px",
      }}
    >
      이건 제목이야
    </h1>
  );
}

function App3() {
  return (
    <>
      {/*주석 방식은 이렇게 다릅니당~*/}
      {/*h1>lorem3^p>lorem^button*2>lorem1**/}
      <h1>Lorem ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
        doloremque facere, fugit laudantium magni maiores pariatur sed
        temporibus voluptate. Consequatur ex illum in ipsa nam necessitatibus
        non odio velit.
      </p>
      <button>
        <span>Lorem.</span>
      </button>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <span>붰튡.</span>
      </button>
      <MyAwesomeButton />
      <MyNewHeader />
    </>
  );
}

export default App3;
