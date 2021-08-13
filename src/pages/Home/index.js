import React from 'react';
import { useCart } from '../../contexts/cartContext';
import { Button, Container } from './styles';

function Home() {
    const { setType } = useCart();

    const redirect = (elem) => {
        setType(elem);
        localStorage.setItem('type', elem);
    }

    return(
        <Container>
            <p>Escolha qual o pacote deseja adquirir?</p>
            <Button onClick={() => redirect('popular')}>Pacote Popular</Button>
            <Button onClick={() => redirect('premium')}>Pacote Premium</Button>
        </Container>
    )
}

export default Home;