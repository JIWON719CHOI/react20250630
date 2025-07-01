function MyAddress() {
  return null;
}

function MyComp1({ children, color }) {
  return (
    <ul>
      <li>color : {color}</li>
      <li>children: {children}</li>
    </ul>
  );
}

function App11() {
  // 직접 만든 컴포넌트 : 대문자로 시작

  // html 컴포넌트 (built-in component) : 소문자로 시작
  // 브라우저 컴포넌트의 props : html attribute 를 사용
  // but, class -> className, for -> htmlFor

  // style attribute
  // <div style="color: red; background-color: yellow; font-size: 24px;"></div>

  // style prop
  // <div style={{color: "red, backgroundColor: "yellow", fontSize: "24px"}}></div>

  // style prop : style attribute  역할
  return (
    <>
      <MyComp1 color="red">Contents</MyComp1>
      <h1>title</h1>
      <p>text</p>
      <div>div</div>
      <a href="https://www.google.com">GOOGLE</a>
      <br />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UQwUQehNlI5bAdrpryQl9cOBh8KvQjwSsA&s"
        alt="Gojo"
        title="Gojo"
      />
      <br />
      <label htmlFor="nameInput">Name</label>
      <input type="text" id="nameInput" />
      <hr />
      <div className="content">HI</div>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          fontSize: "25px",
          padding: "2rem",
        }}
      >
        PUSH
      </button>
    </>
  );
}

export default App11;
