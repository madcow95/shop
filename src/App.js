import './App.css';
import dataUtil from "./util/data";
import compUtil from "./util/component";
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [ product, setProduct ] = useState( dataUtil.getProductData() );
  const navigate = useNavigate();
  
  return (
    <div className="App">
      { compUtil.getHeader( navigate ) }
      <div className='main-bg'></div>
      <Routes>
        <Route path="/" element={ compUtil.getMainPage( product, navigate ) } />
        <Route path="/detail/:id" element={ <compUtil.GetProductDetail ProductState={ product } /> } />
        <Route path="/*" element={ <div>잘못 들어오신거 같은데요?</div> } />
      </Routes>

      <button onClick={ () => {
        const copiedProduct = [ ...product ];
        copiedProduct.sort( ( a, b ) => {
          return a.title.localeCompare( b.title );
        } );
        setProduct( copiedProduct );
      } }>Sort!</button>
    </div>
  );
}
export default App;
