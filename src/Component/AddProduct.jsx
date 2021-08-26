import {useState} from "react";

export const AddProduct = ({selectedProduct}) => {
    const [product, setProduct] = useState()

    return (
        <div className="shadow p-3 mt-4 bg-white">
            <div className="alert alert-primary fs-6 fw-bold" role="alert">
                {/*{isEdit ? 'Edit Product' : 'Add New'}*/}
                edit
            </div>
            <div className="form-input mb-4 mt-4">
                <input
                    className="text-input"
                    type="text"
                    placeholder=" "
                    name="name"
                />
                <label htmlFor="">Name</label>
            </div>
            <div className="form-input mb-4 mt-4">
                <input
                    className="text-input"
                    type="text"
                    placeholder=" "
                    name="image"
                />
                <label htmlFor="">Image</label>
            </div>
            <div className="form-input mb-4">
                <input
                    className="text-input"
                    type="number"
                    placeholder=" "
                    name="price"
                />
                <label htmlFor="">Price</label>
            </div>
            <div className="form-input mb-2">
            <textarea
                className="text-input"
                placeholder=" "
                name="description"

            />
                <label htmlFor="">Description</label>
            </div>
            <div className="form-input">
                <button>Edit Product</button>
                <button>Save Product</button>
            </div>
        </div>
    )
}