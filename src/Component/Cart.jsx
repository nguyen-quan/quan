import {Link} from "react-router-dom";

export const Cart = () => {
    return(
        <div className="cart">
            <Link to="/cart-item">
                <button>
                    <i className="fas fa-shopping-cart"/>
                    <span>10</span>
                </button>
            </Link>
        </div>
    )
}