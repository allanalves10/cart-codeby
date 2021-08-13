import React, { useEffect, useState } from 'react';
import { Container, FooterCart, HeaderCart, ProductCart, TotalCart } from './styles';
import FormatCurrency from '../../utils/FormatCurrency'
import { useCart } from '../../contexts/cartContext';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
    const { setType, cartData, cartTotal } = useCart();

    const [itemsCart, setItemsCart] = useState({});
    const [total, setTotal] = useState();
    const history = useHistory();
    const interest = 1000;

    useEffect(() => {
        if (cartData !== {}) {
            setItemsCart(cartData);
            setTotal(cartTotal);
        }
        if (localStorage.getItem('type')) {
            setType(localStorage.getItem('type'));
        }
    }, [cartData, cartTotal]);

    function checkout() {
        toast.success('Compra realizada com sucesso!');
        localStorage.clear();
        history.push('/');
    }

    return(
        <Container>
            <HeaderCart>
                <h1>Meu Carrinho</h1>
            </HeaderCart>
            <ProductCart>
                {itemsCart && itemsCart.length > 0 && itemsCart.map(element => (
                    <section key={element.uniqueId}>
                        <img src={element.imageUrl} alt="Produto" />
                        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p>{element.name}</p>
                            <p style={{ textDecoration: 'line-through', color: 'var(--background)', fontSize: '1.25rem' }}>{FormatCurrency(element.price)}</p>
                            <p>{FormatCurrency(element.sellingPrice)}</p>
                        </section>
                    </section>
                ))}
            </ProductCart>
            <TotalCart>
                <section>
                    <p>Total</p>
                    <p>{ total && total.length > 0 && total[0].value ? FormatCurrency(total[0]?.value) : 'R$ 0,00'}</p>
                </section>
                {total && total.length > 0 && total[0].value > interest && (<section id="noInterest"><p>Parabéns, sua compra tem frete grátis!</p></section>)}
            </TotalCart>
            <FooterCart>
                <button onClick={() => checkout() }>Finalizar Compra</button>
            </FooterCart>
        </Container>
    )
}

export default Cart;