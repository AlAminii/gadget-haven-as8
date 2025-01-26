import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";

const Categoriecard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      if (category) {
        
        const filteredCategory = [...data].filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setItems(filteredCategory);
      } else {
       
        setItems(data);
      }
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.product_id} item={item} />
      ))}
    </div>
  );
};

export default Categoriecard;