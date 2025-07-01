function MyComp1({ color }) {
  return <h1>color : {color}</h1>;
}

// 컨텐츠는 children prop
function MyComp2({ city, children }) {
  console.log("city", city);
  console.log("children", children);
  return null;
}

function MyAwesomeButton1({ color, children }) {
  return (
    <button style={{ color: color, padding: "10px", fontSize: "2em" }}>
      {children}
    </button>
  );
}

function MyCard1({ mark, children }) {
  return (
    <div
      style={{
        padding: "10px",
        width: "100px",
        height: "200px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      {mark}
      {children}
    </div>
  );
}

function App10() {
  return (
    <>
      <MyComp1 color="red" />
      <MyComp2 city="Tokyo">Our Contents</MyComp2>
      <MyAwesomeButton1 color="red">send</MyAwesomeButton1>
      <MyAwesomeButton1 color="blue">submit</MyAwesomeButton1>
      <MyAwesomeButton1 color="green">save</MyAwesomeButton1>

      <MyCard1 mark="spade">10</MyCard1>
      <MyCard1 mark="heart">ACE</MyCard1>
      <MyCard1 mark="clover">5</MyCard1>
    </>
  );
}

export default App10;
