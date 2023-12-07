import React from "react";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
//import AppChat from "../components/AppChat/AppChat";
import { useSelector } from "react-redux";//truy cập vào trạng thái của Redux store.

function DetailPage(props) {
  const { userInfo } = useSelector((state) => state.userSignin);//thông tin đăng nhập người dùng
  return (
    <div>
      <Header></Header>
      <Detail></Detail>
      
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default DetailPage;
