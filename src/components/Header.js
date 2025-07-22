import React from 'react';
import JpImg from '../components/JumpImg'
import user_login from '../pages/Login'
// import languageIcon from '../assets/img/language.png';
import '../assets/css/style.css'
import {Routes, Route} from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li><i className="fa fa-envelope"></i>管理者信箱： hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="http://www.facebook.com.tw"><i className="fa fa-facebook"></i></a>
                  {/* <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-pinterest-p"></i></a> */}
                </div>
                <div className="header__top__right__auth">
                  <a href="#"><i className="fa fa-user"></i> Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="./index.html">
                <JpImg />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active"><a href="./index.html">首頁</a></li>
                <li><a href="./shop-grid.html">餐廳</a></li>
                <li><a href="#">登入</a>
                  {/* <ul className="header__menu__dropdown">
                    <li><a href="./shop-details.html">Shop Details</a></li>
                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                    <li><a href="./checkout.html">Check Out</a></li>
                    <li><a href="./blog-details.html">Blog Details</a></li>
                  </ul> */}
                </li>
                <li><a href="./blog.html">註冊</a></li>
                <li><a href="./contact.html">登出</a></li>
                <li className='merchant_login'><button href="http://www.google.com"> 商家登入 </button></li>
                <li className='admin_login'><button href="http://www.google.com"> 管理者登入 </button></li>
              </ul>
            </nav>
            
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i> <span>100</span></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
              </ul>
              <div className="header__cart__price">item: <span>$150.00</span></div>
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;