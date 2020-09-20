import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryCard from "../CategoryCard";

function Categories() {
	const { id } = useParams();
	const url = `http://edouniforma.test/api/categories`;
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		axios.get(url).then((response) => {
			setCategories(response.data);
		});
	}, [url]);

	console.log(categories);

	if (categories) {
		function currCat(categories) {
			return categories.find((category) => category.id == id);
    }
    const currentCat = currCat(categories);

		if (!currentCat["product_yes"]) {

			return (
        <div>
          {categories.map( el => (
            currentCat['id'] == el['parent_id'] ? 
            <CategoryCard el={el} key={el.id} />
            : null
          ))}
        </div>
      )
		}
		return <div>Product Yes</div>;
	}
	return <div></div>;
}

export default Categories;
