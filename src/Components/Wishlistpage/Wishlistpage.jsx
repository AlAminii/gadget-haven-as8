import React, { useState, useEffect } from "react";
import { addtoCart, clearwishlist, getAllwishlist } from "../../utils";
import toast from "react-hot-toast";

const Wishlistpage = ({ item }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const items = getAllwishlist();
    setWishlistItems(items);
  }, []);

  const handleAddToCart = (item) => {
    addtoCart(item);
    clearwishlist(item);

    const updatedWishlist = wishlistItems.filter(
      (gadget) => gadget.product_id !== item.product_id
    );
    setWishlistItems(updatedWishlist);
    toast.success("Item moved to cart");
  };

  const { price, product_image, product_title, specification } = item;

  return (
    <div className="card card-side w-4/5 bg-base-100 shadow-xl">
      <figure>
        <img src={product_image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{specification}</p>
        <p>Price: {price}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn bg-[#9538E2] text-white font-bold text-xl"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Wishlistpage;
