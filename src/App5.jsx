function MyComp1({ color = "white" }) {
  return <button style={{ backgroundColor: "blue", color }}>COOL</button>;
}

function MyComp2() {
  return (
    <button style={{ backgroundColor: "red", color: "white" }}>HOT</button>
  );
}

function App5() {
  return (
    <>
      <MyComp1 />
      <MyComp1 color="black" />
      <br />
      <MyComp2 />
      <MyComp2 />
    </>
  );
}

export default App5;
