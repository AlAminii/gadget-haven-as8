import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addtoCart } from "../../utils";
import Productbanner from "../Productdetailsbanner/Productbanner";

const Carddetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();

  const [item, setItem] = useState(null);

  const handaleAddtocart = item=>{
    addtoCart(item)
  }

  useEffect(() => {
    if (!data) return;

    const singleItem = data.find(
      (item) => item.product_id === Number(product_id)
    );
    setItem(singleItem);
  }, [data, product_id]);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <Productbanner></Productbanner>

      {item ? (
        <div className="card lg:card-side bg-base-100 shadow-xl p-5 border">
          <figure className="w-full lg:w-1/2">
            <img
              src={item.product_image}
              className="w-full h-80 object-cover rounded-lg"
              alt={item.product_title}
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl font-semibold">
              {item.product_title}
            </h2>
            <p className="text-lg text-gray-600">
              Price:{" "}
              <span className="text-xl font-bold text-blue-600">
                ${item.price}
              </span>
            </p>
            <p className="text-gray-500">{item.description}</p>

            {/* Specifications */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {item.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Stock & Rating */}
            <div className="mt-4 flex items-center gap-4">
              <p
                className={`px-3 py-1 rounded-md text-white text-sm font-semibold 
                                ${
                                  item.availability
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }`}
              >
                {item.availability ? "In Stock" : "Out of Stock"}
              </p>
              <p className="text-yellow-500 text-lg font-semibold">
                ⭐ {item.rating}
              </p>
            </div>

            <div className="card-actions mt-4">
              <button onClick={()=> handaleAddtocart(item)}
                className="btn btn-primary px-6"
                disabled={!item.availability}
              >
                {item.availability ? "Addtocart" : "Sold Out"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">Loading...</p>
      )}
    </div>
  );
};

export default Carddetails;
