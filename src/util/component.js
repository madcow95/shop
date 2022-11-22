import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const getHeader = ( navigate ) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SHOP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={ () => { navigate( '/' ) } }>홈</Nav.Link>
                    <Nav.Link href="/login">로그인</Nav.Link>
                    <Nav.Link href="/join">회원가입</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export const getMainPage = ( product, navigate ) => {
    return (
      <Container>
        <Row>
          { product.map( ( p, idx ) => <CardList ProductState={ p } ProductIndex={ idx } Navigate={ navigate } key={ idx }/> ) }
        </Row>
      </Container>
    )
}

const CardList = ( props ) => {
    const value = props.ProductState;
    const index = props.ProductIndex;
    const navigate = props.Navigate;
    return (
      <Col onClick={ () => { navigate( '/detail' ) } }>
        <img src={ `https://codingapple1.github.io/shop/shoes${ String( index + 1 ) }.jpg` } width="80%" alt=''/>
        <h4>{ value.title }</h4>
        <p>{ value.content }</p>
        <p>{ value.price }</p>
      </Col>
    )
}

export const getProductDetail = ( navigate ) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )
}

export default {
    getHeader,
    getMainPage,
    getProductDetail
}