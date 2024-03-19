import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
