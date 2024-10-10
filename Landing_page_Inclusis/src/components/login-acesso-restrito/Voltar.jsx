import Button from 'react-bootstrap/Button';
import style from './Voltar.module.css';

function Voltar({ onClick }) {
    let seta = '<';
    return (
        <>
            <Button onClick={onClick}  className={style.botaoDois}variant='primary'>{seta} voltar</Button>{' '}
        </>
    )
}

export default Voltar;