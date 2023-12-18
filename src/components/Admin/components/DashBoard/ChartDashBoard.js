/*import React, {useEffect} from "react";
import Chart from "react-apexcharts";//thư viện biểu đồ
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../actions/OrderAction";


export default function ChartDashBoard() {
  const dispatch = useDispatch()
  const allOrder = useSelector(state => state.allOrder.order)

  const numberOfOrdersOnMonth = (month) => {
    if(allOrder){
      return allOrder.filter((order) => {
        const allOrder = new Date(order.createdAt).getMonth();
        if (allOrder + 1 === month) {
          return order;
        }
      }).length;
    }
    return
  };

  useEffect(() => {
    dispatch(getAllOrder())
  }, [dispatch])

  const chartOptions = {
    series: [{
        name: 'Monthly bill',
        data: [
          numberOfOrdersOnMonth(1) + 7,
          numberOfOrdersOnMonth(2) + 4,
          numberOfOrdersOnMonth(3) + 7,
          numberOfOrdersOnMonth(4)+ 5,
          numberOfOrdersOnMonth(5)+ 3,
          numberOfOrdersOnMonth(6)+ 14,
          numberOfOrdersOnMonth(7),
          numberOfOrdersOnMonth(8)+ 8,
          numberOfOrdersOnMonth(9)+ 8,
          numberOfOrdersOnMonth(10)+ 18,
          numberOfOrdersOnMonth(11) + 20,
          numberOfOrdersOnMonth(12) + 11,
        ]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
  }

  return (
    <div className="dashboard-middle-chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type='line'
        width="500"
      />
    </div>
  );
}
*/
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts"; // Sử dụng thư viện react-apexcharts để hiển thị biểu đồ
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../actions/OrderAction"; // Action lấy tất cả đơn hàng từ Redux

export default function ChartDashBoard() {
  const [order, setOrder] = useState([]); // State lưu trữ dữ liệu đơn hàng
  const [totalRevenue, setTotalRevenue] = useState(0); // State lưu trữ tổng doanh thu

  const dispatch = useDispatch();
  const allOrder = useSelector(state => state.allOrder.order); // Lấy dữ liệu đơn hàng từ Redux store

  // Hàm tính tổng doanh thu trong một tháng cụ thể
  const totalRevenueOnMonth = (month) => {
    if (!allOrder) return 0; // Thêm dòng này để kiểm tra
  
    return allOrder
      .filter(order => new Date(order.createdAt).getMonth() + 1 === month)
      .reduce((sum, order) => sum + order.totalPrice, 0);
  };
  

  // useEffect để dispatch action lấy dữ liệu đơn hàng
  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);

  // useEffect để lấy dữ liệu đơn hàng và tính toán tổng doanh thu
  useEffect(() => {
    const getOrder = async () => {
      // Thay thế URL bằng endpoint API của bạn
      const res = await fetch(`http://localhost:4000/order`);
      const data = await res.json();
      setOrder(data);
      const total = data.reduce((sum, order) => sum + order.totalPrice, 0);
      setTotalRevenue(total);
    };
    getOrder();
  }, []);

  // Cấu hình cho biểu đồ ApexCharts
  const chartOptions = {
    series: [{
      name: 'Doanh Thu Hàng Tháng',
      data: [
        totalRevenueOnMonth(1),
        totalRevenueOnMonth(2),
        totalRevenueOnMonth(3),
        totalRevenueOnMonth(4),
        totalRevenueOnMonth(5),
        totalRevenueOnMonth(6),
        totalRevenueOnMonth(7),
        totalRevenueOnMonth(8),
        totalRevenueOnMonth(9),
        totalRevenueOnMonth(10),
        totalRevenueOnMonth(11),
        totalRevenueOnMonth(12),
      ]
    }],
    options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
      },
      legend: {
        position: 'top'
      },
      grid: {
        show: false
      }
    }
  };

  return (
    <div className="dashboard-middle-chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type='line'
        width="500"
      />
    </div>
  );
}