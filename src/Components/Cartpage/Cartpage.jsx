


const Cartpage = ({item}) => {
    const {price, product_image, product_title,specification} = item
    return (
       <div>
        
         <div className="card card-side w-4/5 bg-base-100 shadow-xl">
        <figure>
          <img
            src={product_image}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{specification}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Cartpage;