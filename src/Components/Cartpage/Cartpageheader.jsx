import { useNavigate } from "react-router-dom";
import donep from "../../assets/Group.png";
import { clearcart } from "../../utils";

const Cartpageheader = ({ totalPrice, setItems }) => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">cart</h1>
        <div className="flex justify-center items-center gap-x-5">
          <p>Totalprice: {totalPrice}</p>
          <button
            className="btn bg-purple-500 text-white"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            purches
          </button>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-xl flex flex-col items-center justify-center text-center">
    <img src={donep} alt="Success Icon" className="w-20 h-20 mb-4" />
    
    <h1 className="py-4 text-xl font-bold">Payment Successfully</h1>
    <p className="text-lg">Thanks for Purchasing.</p>
    <p className="text-lg font-semibold">Total: {totalPrice}</p>

    <div className="modal-action">
      <form method="dialog">
        <button onClick={()=> clearcart(setItems, navigate)} className="btn bg-blue-600 text-white px-4 py-2 rounded-lg">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  );
};

export default Cartpageheader;
