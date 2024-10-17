import Button from 'react-bootstrap/Button';
import style from './Voltar.module.css';
import { useNavigate } from 'react-router-dom';

function Voltar({ onClick }) {
    const navigate = useNavigate();
    let seta = '<';

    function voltar() {
        navigate(-1); 
    }

    return (
        <>
            <Button onClick={voltar}  className={style.botaoDois}variant='primary'>{seta} voltar</Button>{' '}
        </>
    )
}

export default Voltar;