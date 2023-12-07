import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import AllProduct from '../components/allProduct/AllProduct';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Footer from '../components/footer/Footer';

ProductPage.propTypes = {
    
};

function ProductPage(props) {
    return (
        <div>
            <Header></Header>
            <AllProduct></AllProduct>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </div>
    );
}

export default ProductPage;