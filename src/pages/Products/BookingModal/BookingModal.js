import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ pd, setPd }) => {
  const { pd_name, resale_price, location } = pd;
  const {user} = useContext(AuthContext);

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    
    console.log(name, email, phone, location);

    const addProduct = {
        name,
        email,
        phone,
        pd_name,
        price: resale_price,
        location
    }
    setPd(null)
  }
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{pd_name}</h3>
          <p className="py-4 font-bold mx-6"> Price: {resale_price}</p>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
                defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              name="email"
                defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              name="text"
                value={location}
              disabled
              type="text"
              className="input input-bordered w-full "
            />
            <br />
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
