import { useState } from "react";
import DashboardBanner from "./DashboardBanner";
import { useEffect } from "react";
import { getAllitems, getAllwishlist } from "../../utils";
import Card from "../Card/Card";
import Cartpage from "../Cartpage/Cartpage";
import Wishlistpage from "../Wishlistpage/Wishlistpage";
import Cartpageheader from "../Cartpage/Cartpageheader";
import Wishlistheader from "../Wishlistpage/Wishlistheader";


const Dashboard = () => {
    const [items, setItems] = useState([])
    const [wishlists, setwishlist] = useState([])
    const [view , setView] = useState('cart')
    useEffect(()=>{
        const items = getAllitems()
     const   wishlists = getAllwishlist()
        setItems(items)
        setwishlist(wishlists)
    },[])
    console.log(items)

    const totalPrice = items.reduce((sum, item)=> sum+ item.price, 0)
    return (
        <div>
            <DashboardBanner  setView={setView}></DashboardBanner>
            {view === "cart" ? <Cartpageheader totalPrice={totalPrice} setItems={setItems} items={items} ></Cartpageheader>: <Wishlistheader></Wishlistheader>}
            <div className="grid grid-cols-1   items-center justify-center gap-4 mt-5">
        {view === "cart"
          ? items.map((item) => <Cartpage key={item.product_id} item={item} />)
          : wishlists.map((item) => <Wishlistpage key={item.product_id} item={item} />)}
      </div>
        </div>
    );
};

export default Dashboard;