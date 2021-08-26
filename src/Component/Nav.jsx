import {Link} from "react-router-dom";
import React from "react";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/register"><i className="far fa-file-alt"/> <p>Đăng kí</p></Link></li>
                {/*<li><Link to="/log-in"><i className="fas fa-user-circle"></i> <p>Đăng nhập</p></Link></li>*/}
                {
                    <li className="dropdown">
                        <button id="infoUser" className="dropdown-toggle" data-bs-toggle="dropdown"
                                Adminaria-expanded="false"><i className="fas fa-user-circle"/> <p>Đăng nhập</p>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="infoUser">
                            <li><Link exact={true} to="/product-manager"><i className="fas fa-user"/><p>Gian hàng</p></Link></li>
                            <li><i className="fas fa-sign-in-alt"/><p> Đăng xuất</p></li>
                        </ul>
                    </li>
                }
                <li><Link to="/promotion"><i className="fab fa-salesforce"/> <p>Khuyến mãi</p></Link></li>
            </ul>
        </nav>
    )
}