import { useState } from "react";
import DashboardBanner from "./DashboardBanner";
import { useEffect } from "react";
import { getAllitems, getAllwishlist } from "../../utils";
import Card from "../Card/Card";


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
    return (
        <div>
            <DashboardBanner  setView={setView}></DashboardBanner>
            <div className="grid grid-cols-3 gap-4 mt-5">
        {view === "cart"
          ? items.map((item) => <Card key={item.product_id} item={item} />)
          : wishlists.map((item) => <Card key={item.product_id} item={item} />)}
      </div>
        </div>
    );
};

export default Dashboard;