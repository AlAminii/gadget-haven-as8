

const Gadget = ({gadget}) => {
   const {price, product_image, product_title} = gadget
    return (
        <div className="card card-compact  w-auto shadow-xl gap-y-4 mt-4">
  <figure>
    <img
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}</p>
    <div className="card-actions ">
      <button className="btn">view Details</button>
    </div>
  </div>
</div>
    );
};

export default Gadget;