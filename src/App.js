import { useState } from "react";
import "./App.css"
import Content from "./components/Content";
import Nav from "./components/Nav"








function App() {
  
  
  
  let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"])
  let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"])
  // let Name = "홍길동";
  


  return (
    <div className="App">
      
      <Nav />
      {/* <h3 className={Name} style={{color: "orange", backgroundColor: "yellowgreen"}}>Hello React {Name}</h3> */}
      <div className="content">
        <Content arrayNum="0" />
        <Content arrayNum="1" />
        <Content arrayNum="2" />
        <Content arrayNum="3" />
      </div>
      <div className="content">
        <Content arrayNum="0" />
        <Content arrayNum="1" />
        <Content arrayNum="2" />
        <Content arrayNum="3" />
      </div>
    </div>
  );
}

export default App;
