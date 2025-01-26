import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Toaster } from 'react-hot-toast';

const Roots = () => {
    return (
        <div className="w-11/12 mx-auto  mt-5">
            <Toaster></Toaster>
            <Nav></Nav>
            <div className="pt-20"> 
                <Outlet></Outlet>

            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Roots;