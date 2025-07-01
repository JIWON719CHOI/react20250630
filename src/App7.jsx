function MyComp1({ color, score, city, kids, skills, person }) {
  console.log("color", color);
  console.log("score", score);
  console.log("city", city);
  console.log("kids", kids);
  console.log("skills", skills);
  console.log("person", person);
  return null;
}

function MyComp2({ name, age, address, married }) {
  console.log("name", name); // lee
  console.log("age", age); // 44
  console.log("address", address); // {city: "seoul", country: "korea"}
  console.log("married", married); // false

  return null;
}

// props 의 타입은 뭐든지 가능
// string은 ""
// 나머지는 {}

function App7() {
  return (
    <>
      <MyComp1
        color="yellow"
        score={123.123}
        city={"seoul"}
        kids={true}
        skills={["java", "css", "react"]}
        person={{ name: "son", age: 33, team: "토트넘" }}
      />
      {/* 연습 : props 작성해보기 */}
      <MyComp2
        name={"Gojo"}
        age={33}
        address={{ city: "Tokyo", country: "Japan" }}
        married={false}
      />
    </>
  );
}

export default App7;
