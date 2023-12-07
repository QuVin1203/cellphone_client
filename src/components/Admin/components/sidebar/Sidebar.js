import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function Sidebar(props) {
  const dispatch = useDispatch();
  const location = useLocation()//hook để lấy ra thông tin về địa chỉ (URL) hiện tại.
  const { orderPendding } = useSelector((state) => state.allOrder);//để lấy ra thông tin về danh sách đơn hàng chưa xử lý từ store Redux.
  let totalNewOrder
  
  if(orderPendding){
    totalNewOrder = orderPendding.length
  }

  useEffect(() => {
    const getNewOrder = () => {
      dispatch(GetAllOrderPendding());
    }
    getNewOrder()
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://raw.githubusercontent.com/trananhtuat/tua-react-admin/main/src/assets/images/logo.png"></img>
      </div>
      <div className="sidebar-list">
        <Link to="/admin" className={'sidebar-list-item'}>
          <span>
            <AppstoreOutlined></AppstoreOutlined>
          </span>
          <p>Dashboard</p>
        </Link>
        <Link to="/admin/customer" className={'sidebar-list-item'}>
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Customer</p>
        </Link>
        <Link to="/admin/product" className={'sidebar-list-item'}>
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Products</p>
        </Link>
        <Link to="/admin/order" className={'sidebar-list-item'}>
          <span>
            <OrderedListOutlined></OrderedListOutlined>
          </span>
          <p>
            Order
            <div className="admin-order-new">
                {totalNewOrder}
              </div>
          </p>
        </Link>
        
      </div>
    </div>
  );
}

export default Sidebar;
