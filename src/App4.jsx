function MyComp1() {
  return <h1>Hello React</h1>;
}

function MyComp2() {
  return <h1>Hello component</h1>;
}

// 이름은 UpperCamelCase
// return 에 그려야할 html 코드 작성
/// 가장 상위 요소가 하나인 것만 그려야 함

function MyComp3() {
  return (
    <h1>
      <span>Hi</span>
      <span>Component</span>
    </h1>
  );
}

// 항상 맨 위 컴포넌트는 딱 하나만 있어야 해!
function MyComp4() {
  return <div>Hello</div>;
  // <div>이건 안되용</div>;
}

// fragment: 가장 바깥 요소가 필요없을 때 빈 태그를 써도 됨!
function MyComp5() {
  return (
    <>
      <div>요로케</div>
      <div>ㅎㅎㅎ</div>
    </>
  );
}

function MyComp6() {
  return (
    <div>
      <h1>Title</h1>
      <p>Contents</p>
    </div>
  );
}

function MyComp7() {
  return (
    <>
      <h2>Title2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        asperiores aut consequatur corporis cumque, et iusto laboriosam nisi
        nostrum odit possimus provident quam quasi qui quis ratione, sapiente
        sed veniam!
      </p>
    </>
  );
}

function App4() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
      <MyComp7 />
    </>
  );
}

export default App4;
