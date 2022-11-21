import './App.css';
import dataUtil from "./util/data";
import compUtil from "./util/component"
import { useState } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

function App() {

  const [ product, setProduct ] = useState( dataUtil.productData );

  /* 내 현재 절대경로 : {process.env.PUBLIC_URL} => 이미지 경로 설정할때 사용 */
  return (
    <div className="App">
      { compUtil.getHeader() }
      <div className='main-bg'></div>
      <Container>
        <Row>
          { product.map( ( p, idx ) => <Card ProductState={ p } ProductIndex={ idx } key={ idx }/> ) }
        </Row>
      </Container>
    </div>
  );
}

const Card = ( props ) => {
  const value = props.ProductState;
  const index = props.ProductIndex;
  return (
    <Col>
      <img src={ `https://codingapple1.github.io/shop/shoes${ String( index + 1 ) }.jpg` } width="80%"/>
      <h4>{ value.title }</h4>
      <p>{ value.content }</p>
      <p>{ value.price }</p>
    </Col>
  )
}

export default App;
