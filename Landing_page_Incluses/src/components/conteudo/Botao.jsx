import Button from 'react-bootstrap/Button';
import style from './Botao.module.css';

function Botao({ onClick }) {
    return (
        <>
            <Button onClick={onClick} className={style.botaoUm} variant='primary'>Usuário</Button>{' '}
        </>
    )
}

export default Botao;