import { useEffect } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import dataUtil from "./data";
import normalComp from "./normalComponent";

let CopiedProducts = dataUtil.getProductData();

export const GetHeader = ( props ) => {
    const navigate = props.NavigateState;
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

export const GetMainPage = ( props ) => {
    const [ prodData, setProdData ] = useState( CopiedProducts );
    return (
        <>
            <div className='main-bg'></div>
            <Container>
                <Row>
                { prodData.map( ( p, idx ) => <CardList ProductState={ p } ProductIndex={ idx } Navigate={ props.NavigateState } key={ idx }/> ) }
                </Row>
                <button onClick={ () => {
                    dataUtil.getMoreData().then( res => {
                        CopiedProducts = [ ...prodData ].concat( res );
                        setProdData( CopiedProducts );
                    } );
                } }>더 보기</button>
            </Container>
        </>
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

export const GetProductDetail = () => {
    const [ prodData ] = useState( CopiedProducts );
    const [ display, setDisplay ] = useState( true );
    const prodIndex = useParams().id;
    const targetProduct = prodData[ prodIndex ];
    useEffect( () => {
        const timeOut = setTimeout( () => { setDisplay( false ) }, 15000 );
        return() => {
            clearTimeout( timeOut );
        }
    }, [] );

    return (
        <div className="container">
            { display && <div className='alert alert-warning' id='hideDiv'>15초이내 구매시 할인</div> }
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
    /* 
        primary, secondary, success, warning, danger, info, light, dark
    */
    return(
        <>
            <normalComp.GetForm/>
            <normalComp.GetButton ButtonProp={ "dark" } ButtonName={ "로그인" }/>
        </>
    )
}

export const GetJoinPage = ( props ) => {
    // const [ passwordLengthCheck, setPasswordLengthCheck ] = props.MainState( false );
    return (
        <>
            <normalComp.GetForm/>
            <h1>회원가입 페이지 입니다.</h1>
            {/* { !passwordLengthCheck && <p>비밀번호는 6글자 이상 입력해주세요</p> } */}
        </>
    )
}


export default {
    GetHeader,
    GetMainPage,
    GetProductDetail,
    GetLoginPage,
    GetJoinPage
}