/*
import React from "react";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";

export default function DashBoard() {
  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top-search">
            <form>
              <input placeholder="Search ..."></input>
              <span>
                <SearchOutlined></SearchOutlined>
              </span>
            </form>
          </div>
          <div className="dashboard-top-content">
            <li className="dashboard-top-content-avatar">
              <img src=""></img>
              <span>Admin</span>
            </li>
            <li className="dashboard-top-content-bell">
              <BellOutlined></BellOutlined>
            </li>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1666</span>
                  <span className="title">Total Sales</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">25</span>
                  <span className="title">Daily Visits</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <DollarCircleOutlined></DollarCircleOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">2000</span>
                  <span className="title">Total Income</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <FileTextOutlined></FileTextOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1208</span>
                  <span className="title">Total Orders</span>
                </div>
              </li>
            </div>
          </div>
          <ChartDashBoard></ChartDashBoard>
        </div>

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}
*/
import React, { useState, useEffect } from "react";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";

export default function DashBoard() {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://localhost:4000/user`);
      const data = await res.json();

      setUser(data);
    };
    getUser();

    const getProduct = async () => {
      const res = await fetch(`http://localhost:4000/products`);
      const data = await res.json();

      setProduct(data);
    };
    getProduct();

    const getOrder = async () => {
      const res = await fetch(`http://localhost:4000/order`);
      const data = await res.json();

      setOrder(data);
      const total = data.reduce((sum, order) => sum + order.totalPrice, 0);
      setTotalRevenue(total);
    };
    getOrder();
  }, []);
  function formatVND(amount) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  }

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top-search">
            <form>
              <input placeholder="Search ..."></input>
              <span>
                <SearchOutlined></SearchOutlined>
              </span>
            </form>
          </div>
          <div className="dashboard-top-content">
            <li className="dashboard-top-content-avatar">
              <img src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg"></img>
              <span>Admin</span>
            </li>
            <li className="dashboard-top-content-bell">
              <BellOutlined></BellOutlined>
            </li>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                {order && (
                  <div className="dashboard-middle-statistic-title">
                    <span className="total">{order.length}</span>
                    <span className="title">Tổng đơn hàng</span>
                  </div>
                )}
              </li>
            </div>

            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <DollarCircleOutlined></DollarCircleOutlined>
                </div>
                {product && (
                  <div className="dashboard-middle-statistic-title">
                    <span className="total">{product.length}</span>
                    <span className="title">Tổng sản phẩm</span>
                  </div>
                )}
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <DollarCircleOutlined></DollarCircleOutlined>
                </div>
                {totalRevenue && (
                  <div className="dashboard-middle-statistic-title">
                    <span className="total">{formatVND(totalRevenue)}</span>
                    <span className="title">Tổng doanh thu</span>
                  </div>
                )}
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <FileTextOutlined></FileTextOutlined>
                </div>
                {user && (
                  <div className="dashboard-middle-statistic-title">
                    <span className="total">{user.length-1}</span>
                    <span className="title">Tổng người dùng</span>
                  </div>
                )}
              </li>
            </div>
          </div>
          <ChartDashBoard></ChartDashBoard>
        </div>

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}
