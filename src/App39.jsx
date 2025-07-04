import React from "react";
import { Table } from "react-bootstrap";

function MyComp1() {
  const list = [`java`, `css`, `react`, `bootstrap`];
  // key prop : 리스트를 컴포넌트로 그릴 때 각 컴포넌트를 유일하게 식별하는 값
  //            key로 같은 컴포넌트 인지 판단해서 효율적으로 컴포넌트를 출력
  //            보통 key prop 의 값은 db의 pk를 사용 함.
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp2() {
  const board = [
    { id: 3, title: "게시물 3번 제목", author: "GOJO" },
    { id: 5, title: "게시물 5번 제목", author: "GETO" },
    { id: 9, title: "게시물 9번 제목", author: "ITADORI" },
    { id: 14, title: "또 다른 제목", author: "FUSHIGURO" },
    { id: 21, title: "게시물 제목 21", author: "NANAMI" },
  ];
  return (
    <div>
      <Table striped={true}>
        <thead>
          <tr>
            <th>NUMBER</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          {board.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function App39() {
  return (
    <div>
      <MyComp1 />
      <br />
      <MyComp2 />
    </div>
  );
}

export default App39;
