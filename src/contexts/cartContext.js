import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApiDown, ApiUp } from '../service/Api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [type, setType] = useState('');
  const [cartData, setCartData] = useState({});
  const [ cartTotal, setCartTotal] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (type === 'popular') {
      async function getData() {
        try {
            const { data } = await ApiDown.get('items');
            setCartData(data);
            
        } catch (err) {
            toast.error('Erro ao carregar os dados do carrinho.')
        }
        
      }
      getData();

      async function getTotal() {
          try {
              const { data } = await ApiDown.get('totalizers');
              setCartTotal(data);
              history.push('/cart');
              
          } catch (err) {
              toast.error('Erro ao carregar os dados do total da compra.')
          }
          
      }
      getTotal();
      return;
    }

    if (type === 'premium') {
      async function getData() {
        try {
            const { data } = await ApiUp.get('items');
            setCartData(data);
            
        } catch (err) {
            toast.error('Erro ao carregar os dados do carrinho.')
        }
        
      }
      getData();

      async function getTotal() {
          try {
              const { data } = await ApiUp.get('totalizers');
              setCartTotal(data);
              history.push('/cart');
              
          } catch (err) {
              toast.error('Erro ao carregar os dados do total da compra.')
          }
          
      }
      getTotal();
      return;
    }

  }, [type]);

  return (
    <CartContext.Provider value={{ type, setType, cartData, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
