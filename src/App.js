// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
// import Content from "./components/Content";
import Nav from "./components/Nav"
import Main from "./pages/Main";
import About from "./pages/About";
import Potfolio from "./pages/Potfolio";
import Notpage from "./pages/Notpage";
// import Styled from "./Styled";








function App() {
  
  
  
  // let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"])
  // let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"])
  // let Name = "홍길동";
  


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/potfolio" element={<Potfolio/>}/>
        <Route path="/*" element={<Notpage/>}/>
        {/* 낫파운드는 무조건! 맨 밑에 작성해야 한다. */}
      </Routes>
    </>
    

    // <div className="App">
      
    //   {/* <h3 className={Name} style={{color: "orange", backgroundColor: "yellowgreen"}}>Hello React {Name}</h3> */}
    //   <div className="content">
    //     <Content arrayNum="0" />
    //     <Content arrayNum="1" />
    //     <Content arrayNum="2" />
    //     <Content arrayNum="3" />
    //   </div>
    //   <div className="content">
    //     <Content arrayNum="0" />
    //     <Content arrayNum="1" />
    //     <Content arrayNum="2" />
    //     <Content arrayNum="3" />
    //   </div>
    //   <Styled />
    // </div>
  );
}

export default App;
