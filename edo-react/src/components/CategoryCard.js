import React from 'react';
import {Link} from 'react-router-dom';

function CategoryCard({el}) {
  return (
    <div>
    <Link to={`/categories/${el.id}`} >{el.title}</Link>
    </div>
  );
}

export default CategoryCard;