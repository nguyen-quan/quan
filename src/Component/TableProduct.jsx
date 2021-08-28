import {useEffect, useState} from "react";
import fireDB from "../Assess/js/firebase";

export const TableProduct = ({setSelectedProduct}) => {
    const [productList, setProductList] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const productItem = fireDB.database().ref("product")

    useEffect(() => {
        productItem.on('value', (snapshot) => {
            const productList = Object.keys(snapshot.val()).map(key => {
                const data = snapshot.val()[key];
                data.id = key
                return data;
            }).reverse();
            setProductList(productList);
            setVisibleProducts(productList);
        })

    }, [])

    function searchTable(input) {
        setSearchValue(input);

        if (input === '') {
            const productItem = fireDB.database().ref("product")
            productItem.on('value', (snapshot) => {
                const productList = Object.keys(snapshot.val()).map(key => snapshot.val()[key]);
                setVisibleProducts(productList)
            })
        } else {
            const filteredProducts = productList.filter(value => value.name.toUpperCase().includes(input.toUpperCase()))
            setVisibleProducts(filteredProducts)
        }
    }

    function editProduct(product) {
        setSelectedProduct(product);
    }

    function deleteProduct(id) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Are you sure want to delete this product?")) {
            productItem.child(id).remove()
        }
    }

    return (
        <div className="shadow p-3 mt-4 bg-white">
            <div className="alert alert-primary fs-6 fw-bold" role="alert">
                Tất cả sản phẩm
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-input mb-4 mt-2">
                        <input
                            className="text-input"
                            type="text"
                            placeholder=" "
                            value={searchValue}
                            onInput={event => searchTable(event.target.value)}
                        />
                        <label htmlFor="">Tìm kiếm sản phẩm</label>
                    </div>
                </div>
            </div>
            <div className="table-product">
                <table className="table table-bordered align-middle">
                    <thead>
                    <tr align="center">
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        visibleProducts.map((value, index) => {
                            return <tr key={index}>
                                <td>{value.name}</td>
                                <td><img src={value.image} alt=""/></td>
                                <td>{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                                <td>{value.description}</td>
                                <td>
                                    <button onClick={() => editProduct(value)}><i className="far fa-edit"/>
                                    </button>
                                    <button onClick={() => deleteProduct(value.id)}><i className="fas fa-trash"/>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}