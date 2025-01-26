import { Link } from "react-router-dom";


const Card = ({item}) => {
    const {price, product_image, product_title, product_id} = item
    return (
     
      <Link to={`/item/${product_id}`}>
           <div className="card card-compact  w-auto shadow-xl gap-y-4 mt-4">
        <figure>
        <img src={product_image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions ">
            <button className="btn">view Details</button>
          </div>
        </div>
      </div>
         
      </Link>
        
    );
};

export default Card;