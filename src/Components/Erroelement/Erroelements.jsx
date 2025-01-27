import { NavLink } from "react-router-dom";

const Erroelements = () => {
    return (
        <div className="mt-20 flex flex-col items-center text-center gap-y-4">
            <h1 className="text-red-500 font-bold text-3xl mb-4">Ooops! Error 404</h1>
            <p>Page is not found</p>
            <NavLink to="/" className="bg-red-400 text-white px-4 py-3 rounded-md">
                Go Back Home
            </NavLink>
        </div>
    );
};

export default Erroelements;
