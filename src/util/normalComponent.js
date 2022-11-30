import { Button } from 'react-bootstrap';

export const GetButton = ( props ) => {
    const BtnProp = props.ButtonProp;
    return (
        <>
            <Button variant={`${ BtnProp }`}>{ props.ButtonName }</Button>{' '}
        </>
    )
}

export default {
    GetButton
}