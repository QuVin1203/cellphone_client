import React from 'react';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../actions/CartAction'
import {Link} from 'react-router-dom'
import {formatPrice} from '../../untils/index'

function DetailInfo(props) {
    const dispatch = useDispatch()
    const { product } = props;
    
    function handleAddProduct(product) {
        const action = AddToCart(product)
        dispatch(action)
    }

    return (
        <div className="detail-info-right">
            <div className="detail-info-right-price">
                <p className="price-box">
                    <span className="saleprice">{formatPrice(product.salePrice)}đ</span>
                    <span className="old-price"> <strong className="price">{formatPrice(product.price)}đ</strong> </span>
                </p>
                <p className="detail-info-sale">
                    Sản phẩm thuộc chương trình HOT SALE CUỐI TUẦN - Nhanh tay thanh toán!
                            </p>
            </div>

            <div className="detail-info-right-buy">
                <div className="detail-info-right-buy-now">
                    <Link to="/cart" onClick={() => handleAddProduct(product)}>  {/* click vào nút mua ngay */}
                        <strong>MUA NGAY</strong>
                        <br></br>
                        <span></span>
                    </Link>
                </div>

                
                <div className="detail-info-right-buy-installment">
                    <a href="">
                        <strong>TRẢ GÓP 0%</strong>
                        <br></br>
                        <span>(Xét duyệt qua điện thoại)</span>
                    </a>
                    <a href="">
                        <strong>TRẢ GÓP QUA THẺ</strong>
                        <br></br>
                        <span>(Visa, Master, JCB)</span>
                    </a>
                </div>

                <div className="detail-info-picture-advertisement">
                    
                    <Link to="/"><img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:120/q:80/plain/https://dashboard.cellphones.com.vn/storage/b2s-product-dt-samsung.jpg" ></img></Link>
                </div>
                


                



            </div>
        </div>
    );
}

export default DetailInfo;




