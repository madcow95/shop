import { Container, Nav, Navbar } from 'react-bootstrap';

export const getHeader = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SHOP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <Nav.Link href="#Login">로그인</Nav.Link>
                    <Nav.Link href="#Join">회원가입</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default {
    getHeader
}