import { useEffect } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";

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
      <Col onClick={ () => { navigate( `/detail/${ index }` ) } }>
        <img src={ `https://codingapple1.github.io/shop/shoes${ parseInt( value.id ) + 1 }.jpg`} width="80%" alt='...'/>
        <h4>{ value.title }</h4>
        <p>{ value.content }</p>
        <p>{ value.price }</p>
      </Col>
    )
}

export const GetProductDetail = ( props ) => {
    const prodIndex = useParams().id;
    const targetProduct = props.ProductState[ prodIndex ];
    const [ display, setDisplay ] = props.MainState( true );
    const [ stringCheck, setStringCheck ] = props.MainState( "" );
    // LifeCycle Hook
    useEffect( () => {
        const timeOut = setTimeout( () => { setDisplay( false ) }, 2000 );
        // if( !/^[0-9]+$/.test( stringCheck ) ) {
        //     alert("그러지 마세요.");
        // }
        return() => {
            clearTimeout( timeOut );
        }
    }, [ stringCheck ] );

    return (
        <div className="container">
            { display && <div className='alert alert-warning' id='hideDiv'>2초이내 구매시 할인</div> }
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${ parseInt( targetProduct.id ) + 1 }.jpg`} width="100%" alt='...'/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{ targetProduct.title }</h4>
                    <p>{ targetProduct.content }</p>
                    <p>{ targetProduct.price }</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
                {/* <input type={"text"} onChange={ ( e ) => { e.target.value && setStringCheck( e.target.value ) } } /> */}
            </div>
        </div>
    )
}

export const GetLoginPage = () => {
    return(
        <>
            <h1>로그인페이지 입니다.</h1>
        </>
    )
}

export const GetJoinPage = () => {
    return (
        <>
            <h1>회원가입 페이지 입니다.</h1>
        </>
    )
}

export default {
    getHeader,
    getMainPage,
    GetProductDetail,
    GetLoginPage,
    GetJoinPage
}