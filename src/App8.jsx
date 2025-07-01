function MyComp1({ name = "Gojo", age = 37, city = "Tokyo" }) {
  return (
    <>
      <ul>
        <li>NAME : {name}</li>
        <li>AGE : {age}</li>
        <li>CITY : {city}</li>
      </ul>
    </>
  );
}

function MyComp2({ name, score }) {
  return (
    <p>
      이름은 {name}이고 점수는 {score}입니다.
    </p>
  );
}

function App8() {
  return (
    <>
      <MyComp1 />
      <MyComp1 name={"lee"} />
      <MyComp1 name={"kim"} age={55} />
      <MyComp1 name={"park"} age={66} city="busan" />
      <MyComp2 score={98} name="Geto" />
      <MyComp2 score={99} name="Toji" />
    </>
  );
}

export default App8;
