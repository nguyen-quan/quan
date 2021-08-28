import {useEffect, useState} from "react";
import fireDB from "../Assess/js/firebase";

const initstate = {
    name: "",
    image: "",
    price: "",
    description: ""
}

export const AddProduct = ({selectedProduct}) => {
    const [product, setProduct] = useState(initstate)
    const productItem = fireDB.database().ref("product")
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
            setIsEdit(true)
        }
    }, [selectedProduct]);

    function handleInput(e) {
        let {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    function saveProduct() {
        productItem.push(product)
        setProduct(initstate)
    }

    async function updateProduct() {
        const value = {}
        value[product.id] = product;
        await productItem.update(value, (err) => {
            if (err) {
                console.log(err)
            }
        });
        setProduct(initstate)
        setIsEdit(false);
    }

    return (
        <div className="shadow p-3 mt-4 bg-white">
            <div className="alert alert-primary fs-6 fw-bold" role="alert">
                {isEdit ? 'Thay đổi sản phẩm' : 'Thêm sản phẩm'}
            </div>
            <div className="form-input mb-4 mt-4">
                <input
                    className="text-input"
                    type="text"
                    placeholder=" "
                    name="name"
                    value={product.name}
                    onChange={handleInput}
                />
                <label htmlFor="">Tên sản phẩm</label>
            </div>
            <div className="form-input mb-4 mt-4">
                <input
                    className="form-input form-control-file"
                    type="file"
                    name="image"
                    value={product.image}
                    onChange={handleInput}
                />
            </div>
            <div className="form-input mb-4">
                <input
                    className="text-input"
                    type="number"
                    placeholder=" "
                    name="price"
                    value={product.price}
                    onChange={handleInput}
                />
                <label htmlFor="">Giá sản phẩm</label>
            </div>
            <div className="form-input mb-2">
            <textarea
                className="text-input"
                placeholder=" "
                name="description"
                value={product.description}
                onChange={handleInput}
            />
                <label htmlFor="">Mô tả sản phẩm</label>
            </div>
            <div className="form-input">
                {
                    isEdit ? <button onClick={updateProduct}>Thay đổi sản phẩm</button> :
                        <button onClick={saveProduct}>Lưu sản phẩm</button>
                }
            </div>
        </div>
    )
}