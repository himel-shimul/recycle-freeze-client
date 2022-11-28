import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const buyingPrice = form.buyingPrice.value;
    const sellingPrice = form.sellingPrice.value;
    const phoneNumber = form.phoneNumber.value;
    const image = form.imageUrl.value;
    // const price = form.price.value;
    const category = form.category.value;
    const condition = form.condition.value;
    const location = form.location.value;
    const published_date = form.published_date.value;
    const description = form.description.value;

    const product = {
      pd_name: productName,
      image,
      seller_name: user.displayName,
      published_date,
      original_price: buyingPrice,
      resale_price: sellingPrice,
      phoneNumber,
      email: user.email,
      location,
      condition,
      category,
      // price,
      description,
    };
    console.log(product);
    fetch('http://localhost:5000/allProducts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product),
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
          toast.success("Add Successfully");
            form.reset();
            navigate('/dashboard/myproducts')
        }
    })
    .catch(err => console.error(err))
  };

  return (
    <div className="w-full my-10">
      <div className="card w-3/4 bg-base-100 shadow-xl m-auto">
        <form onSubmit={handleAddProduct} className="card-body w-2/3 m-auto">
          <h1 className="text-4xl text-center font-bold">Add your service</h1>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="product-name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product URL</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Place your img url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Buying Price</span>
              </label>
              <input
                type="text"
                name="buyingPrice"
                placeholder="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Selling Price</span>
              </label>
              <input
                type="text"
                name="sellingPrice"
                placeholder="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text"> Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <input
                type="text"
                name="condition"
                placeholder="Ex: excellent, good, fair"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select type="text" name="category" className="border p-3 rounded-md">
                <option disabled value="0">Select car:</option>
                <option value="samsung">samsung</option>
                <option value="beko">beko</option>
                <option value="LG">LG</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                type="text"
                name="published_date"
                placeholder="Ex: 01-01-2000"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24 w-full"
                placeholder="your description"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-info" type="submit" value="Submit" />
            {/* <ToastContainer /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
