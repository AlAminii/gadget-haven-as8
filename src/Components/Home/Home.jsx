import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Bannerphotos from "../Banner/Bannerphotos";
import Categoriesbtn from "../Categoriesbtn/Categoriesbtn";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner />
      <Bannerphotos />
      
      <div className="flex justify-between">
        <div className="1/3">
          <Categoriesbtn categories={categories} />
          
        </div>
        <div className="w-2/3">
        <Outlet></Outlet>
        </div>

        {/* <div className="w-2/3">
          <Gadgets heading="Explore Cutting-Edge Gadgets" />
          
          <Outlet /> 
        </div> */}
      </div>
    </div>
  );
};

export default Home;
