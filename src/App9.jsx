function App9() {
  const val1 = "Gojo";
  const val2 = 99;
  const val3 = [`Jujutsu`, `kaisen`];
  const val4 = { city: `Tokyo`, country: `Japan` }; // 이거 안되용
  const val5 = true; // print ❌
  const val6 = false; // print ❌
  const val7 = null; // print ❌
  const val8 = undefined; // print ❌

  // jsx 내에서 {}로 js 코드 작성 가능, 출력 가능, 유무 타입마다 다 다르다.

  return (
    <>
      <ul>
        <li>val1: {val1}</li>
        <li>val2: {val2}</li>
        <li>val3: {val3}</li>
        <li>val4: {val4.city}</li>
        <li>val4: {val4.country}</li>
        <li>val5: {val5}</li>
        <li>val6: {val6}</li>
        <li>val7: {val7}</li>
        <li>val8: {val8}</li>
      </ul>
    </>
  );
}

export default App9;
