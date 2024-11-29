import React, { useState, useEffect } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/Product/ProductCard';
import { productUrl } from '../../Api/endPoint';
import Loader from '../../components/Loadr/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />}

    </LayOut>
  );
}

export default ProductDetail;
