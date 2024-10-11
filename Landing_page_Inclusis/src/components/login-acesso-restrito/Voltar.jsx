import Button from 'react-bootstrap/Button';
import style from './Voltar.module.css';
import { useNavigate } from 'react-router-dom';

function Voltar({ onClick }) {
    const navigate = useNavigate();
    let seta = '<';

    function handleVoltar() {
        navigate(-1); 
    }

    return (
        <>
            <Button onClick={handleVoltar}  className={style.botaoDois}variant='primary'>{seta} Voltar</Button>{' '}
        </>
    )
}

export default Voltar;