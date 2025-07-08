// ✅ App544.jsx (프론트엔드)
import React from "react";
import axios from "axios";

function App544() {
  function handleGet() {
    axios
      .get("/api/main299/item?id=1")
      .then((res) => console.log("GET:", res.data));
  }

  function handlePost() {
    axios
      .post("/api/main299/item", { name: "Apple", price: 1000 })
      .then((res) => console.log("POST:", res.data));
  }

  function handlePut() {
    axios
      .put("/api/main299/item/1", { name: "Apple Modified", price: 1200 })
      .then((res) => console.log("PUT:", res.data));
  }

  function handlePatch() {
    axios
      .patch("/api/main299/item/1", { price: 900 })
      .then((res) => console.log("PATCH:", res.data));
  }

  function handleDelete() {
    axios
      .delete("/api/main299/item/1")
      .then((res) => console.log("DELETE:", res.data));
  }

  function handleHead() {
    axios
      .head("/api/main299/item")
      .then((res) => console.log("HEAD:", res.headers));
  }

  function handleOptions() {
    axios
      .options("/api/main299/item")
      .then((res) => console.log("OPTIONS:", res.headers));
  }

  function handleRequest() {
    axios
      .request({
        method: "get",
        url: "/api/main299/item",
        params: { id: 1 },
      })
      .then((res) => console.log("REQUEST:", res.data));
  }

  function handleFormSubmit() {
    const formData = new FormData();
    formData.append("title", "banana");
    formData.append("price", "1500");
    axios
      .post("/api/main299/form", formData)
      .then((res) => console.log("FORM:", res.data));
  }

  return (
    <div>
      <button onClick={handleGet}>GET 요청</button>
      <button onClick={handlePost}>POST 요청</button>
      <button onClick={handlePut}>PUT 요청</button>
      <button onClick={handlePatch}>PATCH 요청</button>
      <button onClick={handleDelete}>DELETE 요청</button>
      <button onClick={handleHead}>HEAD 요청</button>
      <button onClick={handleOptions}>OPTIONS 요청</button>
      <button onClick={handleRequest}>axios.request()</button>
      <button onClick={handleFormSubmit}>Form 전송</button>
    </div>
  );
}

export default App544;
