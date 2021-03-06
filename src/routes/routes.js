import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Cart from './../pages/Cart';
import { CartProvider } from '../contexts/cartContext';


function Routes() {
    return (
    <Switch>
        <CartProvider>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={Cart}/>
        </CartProvider>
    </Switch>
    )
}

export default Routes;