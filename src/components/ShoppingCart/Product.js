import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux'
import {AddToCart, DeleteToCart, DeleteQtyProduct} from '../../actions/CartAction'
Product.propTypes = {

};

function Product(props) {
    const { product } = props
    const dispatch = useDispatch()

    function handleDeleteProduct(product) {
        const action = DeleteToCart(product)
        dispatch(action);
    }

    function handleAddProduct(product) {
        const action = AddToCart(product)
        dispatch(action)
    }

    function handleProductOut(product) {
        const action =  DeleteQtyProduct(product)
        dispatch(action)
    }

    return (
        <div className="shopping-cart-list-product">
            <div className="shopping-cart-list-product-block">
                <div className="shopping-cart-list-product-block-left">
                    <img src={product.image}></img>
                </div>
                <div className="shopping-cart-list-product-block-right">
                    <p className="product-name">
                        {product.name}
                    </p>
                    <p className="product-price">
                        {product.salePrice}
                    </p>
                </div>
            </div>
            <div className="shopping-cart-list-product-bottom">
                <button className="delete-product" onClick={() => handleProductOut(product)}> Xóa khỏi giỏ hàng </button>
                <ul className="button-event">
                    <li onClick={() => handleDeleteProduct(product)}>-</li>
                    <li>{product.qty}</li>
                    <li onClick={() => handleAddProduct(product)}>+</li>
                </ul>
            </div>
        </div>
    );
}

export default Product;