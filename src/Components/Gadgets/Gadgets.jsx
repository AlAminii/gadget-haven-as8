import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = ({heading}) => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div>
      <h1 className="text-center font-extrabold text-4xl">
        {heading}
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-10 ">
        {
        gadgets.map(gadget=> <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
        }
        </div>
    </div>
  );
};

export default Gadgets;
