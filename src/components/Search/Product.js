import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


Product.propTypes = {
    // product: PropTypes.object,
};
Product.defaultProps = {
    // product: null,
}

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    function AddToCart(product) {
        // const action = AddProduct(product);
        // dispatch(action);
    }

    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product._id}>
                <img src={product.image}></img>
                <p className="hotsale-listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span className="price1">{product.salePrice}</span>
                    <span className="price2">{product.price}</span>
                </div>
            </a>
            <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>
            <div className="buy">
                <a href="/cart" onClick={() => AddToCart(product)}> Mua Ngay</a>
            </div>
        </div>
    );
}

export default Product;