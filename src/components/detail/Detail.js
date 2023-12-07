import React, { useEffect } from 'react';
import './Detail.css'
import DetailInfo from './DetailInfo'
import RateStar from './RateStar';
import {
    useParams
} from "react-router-dom";//để lấy tham số id từ URL
import { useDispatch, useSelector } from 'react-redux';
import { getproductById } from '../../actions/ProductAction';
import CommentProduct from './CommentProduct';
import BlogContent from './BlogContent';
import  Footer  from '../footer/Footer'

function Detail(props) {
    const dispatch = useDispatch()
    const { id } = useParams();
    const detailProduct = useSelector(state => state.getProductById.product)//lấy dữ liệu từ redux store

    useEffect(() => {//gọi action từ redux store
        dispatch(getproductById(id))
    }, [dispatch])//useEffect sẽ chạy mỗi khi [dispatch]thay đổi ,denpen..

    return (
        <section id="detail">
            {
                detailProduct ? (
            <div className="detail">
                <div className="detail-title">
                    <h2>{detailProduct.name}</h2>
                </div>
                <div className="detail-info">
                    <div className="detail-info-slide">
                        <div className="detail-info-slide-image">
                            <img src={detailProduct.image}></img>
                        </div>
                    </div>
                    <DetailInfo  product={detailProduct}></DetailInfo>{/**truyền props product vào 
                     * trong component DetailInfo, bạn có thể truy cập vào prop product để sử dụng giá trị của detailProduct.
                    */}
                    
                </div>
                <div>
                    <BlogContent></BlogContent>
                </div>
                <div>
                    <RateStar></RateStar>
                </div>
                <div>
                    <CommentProduct></CommentProduct>
                </div>
                <div>
                    <Footer></Footer>
                </div>
              
                
            </div>
            ) : ''
            }
        </section>
    );
}

export default Detail;