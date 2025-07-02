import React, { useState } from "react";

// 컴포넌트 처음 그려진(render) 이후
// 상태가 변경되어야 다시 그려짐(re-render)

// 상태(state) 는 react가 관리하는 값
// 컴포넌트는  useState로 상태를 얻고 업데이트 가능

// useState : 초기값을 받고, 현재 상태와,
//            상태를 업데이트 할 수 있는 메소드를 배열로 리턴

function MyComp1() {
  const [count, setCount] = useState(1);

  function handleButtonClick() {
    // 상태 변경할 때 useState 에서 받은 값의 [1]인덱스에 있는 함수를 사용해야 함
    setCount(count + 1); // 이걸 써야 화면도 같이 바뀜! 상태 변경 -> re-render
    console.log("button-click", count + 1);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>count++</button>
    </div>
  );
}

function MyComp2() {
  const [count, setCount] = useState(1); // 숫자만 관리

  function handleMessageClick() {
    setCount(count + 1); // 숫자 증가
    console.log("message", count + 1);
  }

  return (
    <div>
      {count + "message"} {/* 문자열 조합은 여기서! */}
      <br />
      <button onClick={handleMessageClick}>message++</button>
    </div>
  );
}

function MyComp3() {
  const [color, setColor] = useState("#000000");

  // ✅ 랜덤 색상 생성 함수
  function getRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
    );
  }

  // ✅ HEX 색상 코드로부터 밝기 계산
  function getTextColorByBackground(hex) {
    // HEX → R, G, B 값으로 분해
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);

    // 밝기 계산 공식 (YIQ 방식)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // 밝기 기준으로 흰색 or 검정 텍스트
    return brightness > 128 ? "#000000" : "#FFFFFF";
  }

  // ✅ 클릭 시 색상 바꾸기
  function handleColorClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    console.log("background color:", newColor);
  }

  const textColor = getTextColorByBackground(color);

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          color: textColor,
          padding: "40px",
          marginBottom: "10px",
          textAlign: "center",
          border: "1px solid #ccc",
        }}
      >
        현재 배경색: {color}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleColorClick}>🎨 랜덤 색상으로 바꾸기</button>
      </div>
    </div>
  );
}

function MyComp4() {
  const photos = [
    "/src/assets/images/01.png",
    "/src/assets/images/02.jpg",
    "/src/assets/images/03.jpg",
  ];

  const [index, setIndex] = useState(0);

  function changeImages() {
    // 다음 인덱스로 증가, 사진이 끝나면 다시 처음으로
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }

  function backImages() {
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  }

  return (
    <div>
      <img className="w-100" src={photos[index]} alt="" />
      <br />
      <button onClick={backImages}>👈</button>
      <button onClick={changeImages}>👉</button>
    </div>
  );
}

function App23() {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
    </div>
  );
}

export default App23;
