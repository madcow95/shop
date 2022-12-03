import { Button, Form, Spinner } from 'react-bootstrap';

export const GetButton = ( props ) => {
    const BtnProp = props.ButtonProp;
    return (
        <>
            <Button variant={`${ BtnProp }`}>{ props.ButtonName }</Button>{' '}
        </>
    )
}

export const GetForm = ( props ) => {
    return (
        <div className='container mt-5'>
            <Form>
                <Form.Group className="mb-5" controlId="formUserName">
                    <Form.Control type="text" placeholder="아이디"/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="formPassword">
                    <Form.Control type="password" placeholder="비밀번호"/>
                </Form.Group>
                <GetButton ButtonProp={ "dark" } ButtonName={ "로그인" } onClick={ () => {
                    console.log(document.getElementById("formUserName").value);
                } }/>
            </Form>
        </div>
    )
}

export const GetLoading = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default {
    GetButton,
    GetForm,
    GetLoading
}