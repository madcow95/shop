import './App.css';
import dataUtil from "./util/data";
import compUtil from "./util/component"
import { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// npm install react-router-dom@6 설치
const App = () => {

  const [ product, setProduct ] = useState( dataUtil.getProductData() );
  // use로 시작하는 애들은 유용한애들이 들어있는 함수 => Hook이라고 함
  // 페이지 이동을 도와주는 아이
  const navigate = useNavigate();

  return (
    <div className="App">
      { compUtil.getHeader( navigate ) }
      <div className='main-bg'></div>

      {/* Route = 페이지라고 생각하면 됨 */}
      <Routes>
        <Route path="/" element={ compUtil.getMainPage( product, navigate ) } />
        <Route path="/detail" element={ compUtil.getProductDetail( navigate ) } />
        {
        /* 
        Nested Route
        여러 유사한 페이지 필요할 때 이용하면 좋음ㄹ
        /about/location으로 들어왔을 때 이런식으로도 작성 가능
        대신 About component의 return안에 <Outlet></Outlet>으로 표현 가능 
        <Route path="/about" element={<About/>}>
          <Route path="/location" element={<Location/>}/>
        </Route> */
        }

        {/* 위에 적은 경로 외의 다른 이상한 페이지로 접근시 아래로 향함 */}
        <Route path="/*" element={ <div>잘못 들어오신거 같은데요?</div> } />
      </Routes>
    </div>
  );
}
export default App;
