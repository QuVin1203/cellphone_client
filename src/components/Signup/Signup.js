import React, { useState } from 'react';
import './Signup.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {SignupUser} from '../../actions/UserAction'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

function Login(props) {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        if(password === confirmPassword) {
            dispatch(SignupUser(data))       //gửi action đến hàm SignupUser     
        } else{
            alert("Xác nhận lại mật khẩu không đúng !!")
        }
    }
  
    return (
      <div className="signup-page">
        <h2  style={{ marginTop: '10px' }}><Link to ="./login">< ArrowLeftOutlined style={{ fontSize: "24px",color:'black', marginRight: '10px'  }} /></Link>ĐĂNG KÍ</h2>
       
        <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
          <input {...register("name")} placeholder="Name" required></input>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            required
          >{errors.email && <p>{errors.email.message}</p>}</input>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            {...register("repeat password")}
            placeholder=" Repeat password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input>

          <input type="submit" value="Đăng Kí"></input>
        </form>
      </div>
    );
}

export default Login;