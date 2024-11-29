import React, { useState, useEffect } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import classes from './Results.module.css';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loadr/Loader';

const Results = () => {
  const { catagoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [catagoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category: {catagoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id}
                renderAdd={true}
                product={product}

              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;
