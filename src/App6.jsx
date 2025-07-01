function MyComp1(param) {
  console.log(param);
  console.log(param.color);
  return null;
}

function MyComp2(param) {
  const { address } = param;
  console.log("주소", address);
  return null;
}

function MyComp3({ address }) {
  console.log("주소", address);
  return null;
}

function MyComp4({ address }) {
  console.log("연습", address);
  return null;
}

function MyComp5({ address, country, city = "뭐" }) {
  console.log("하하", address);
  console.log("히히", country);
  console.log("호호", city);
  return null;
}

function App6() {
  return (
    <>
      <MyComp1 color="yellow" />
      {/*  MyComp1({color:"yellow"}) */}
      <MyComp1 color="red" />
      <MyComp2 address="Tokyo" />
      <MyComp2 address="Kyoto" />
      <MyComp3 address="Okinawa" />
      <MyComp3 address="Satporo" />
      <MyComp4 address="Seoul" />
      <MyComp4 address="Jeju" />
      <MyComp5 address="Busan" country="Korea" city="Haewoondae" />
    </>
  );
}

export default App6;
