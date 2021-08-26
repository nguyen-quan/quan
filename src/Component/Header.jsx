import {Link} from "react-router-dom";
import logo from "../Assess/image/image01.png";
import React from "react";
import {Nav} from "./Nav";
import {Search} from "./Search";
import {Cart} from "./Cart";
import "../Assess/css/header.scss"


export const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row row-align">
                    <div className="col-lg-2">
                        <div className="logo">
                            <Link to="/"><img className="logo" src={logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-6">
                                <Search/>
                            </div>
                            <div className="col-lg-5">
                                <Nav/>
                            </div>
                            <div className="col-lg-1">
                                <Cart/>
                            </div>
                        </div>
                        <p>HỆ THỐNG SHOWROOM TẠI TP. HỒ CHÍ MINH - HÀ NỘI |<i className="fas fa-phone-square-alt"/>TỔNG ĐÀI |
                            <i className="fab fa-youtube"/>VIDEOS |
                            <i className="fas fa-newspaper"/>TIN CÔNG NGHỆ |
                            <i className="fas fa-user"/>TUYỂN DỤNG</p>
                    </div>
                </div>
            </div>

        </header>
    )
}