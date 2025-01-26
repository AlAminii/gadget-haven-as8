import { NavLink } from "react-router-dom";

const Categoriesbtn = ({ categories }) => {
  return (
    <div className="flex flex-col items-start w-fit border rounded-lg p-4">
      {categories.map((categorie) => (
        <NavLink
          key={categorie.product_id}
          to={`/categorie/${categorie.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab py-6 px-6 ${isActive ? "bg-blue-400" : ""}` 
          }
        >
          {categorie.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categoriesbtn;
