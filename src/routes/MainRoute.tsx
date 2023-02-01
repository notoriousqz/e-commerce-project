import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routingPages } from './enums';
import {
    Blog,
    Cart,
    Checkout,
    Error,
    Login,
    Main,
    Product,
    Products,
    Profile,
    SinglePost,
} from '../pages';

const MainRoute = () => {
    return (
        <div>
            <Routes>
                {['/', routingPages.main].map(path => (
                    <Route key={path} path={path} element={<Main />} />
                ))}

                <Route path={routingPages.products} element={<Products />} />
                <Route path={routingPages.product} element={<Product />} />
                <Route path={routingPages.cart} element={<Cart />} />
                <Route path={routingPages.checkout} element={<Checkout />} />
                <Route path={routingPages.profile} element={<Profile />} />
                <Route path={routingPages.login} element={<Login />} />
                <Route path={routingPages.blog} element={<Blog />} />
                <Route
                    path={routingPages.single_post}
                    element={<SinglePost />}
                />
                <Route path={routingPages.error} element={<Error />} />
            </Routes>
        </div>
    );
};

export default MainRoute;
