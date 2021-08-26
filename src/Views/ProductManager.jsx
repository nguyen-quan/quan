import {AddProduct} from "../Component/AddProduct";
import {useState} from "react";
import {TableProduct} from "../Component/TableProduct";

export const ProductManager = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)

    return(
        <div className="product-manager">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <AddProduct selectedProduct={selectedProduct}/>
                    </div>
                    <div className="col-lg-8">
                        <TableProduct setSelectedProduct={setSelectedProduct}/>
                    </div>
                </div>
            </div>
        </div>
    )
}