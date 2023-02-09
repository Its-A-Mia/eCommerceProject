import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetchProducts(params) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let products = null;
      if (!data) {
        products = await axios.get('/api/product', {
          params,
        });
      }
      if (products) setData(products.data.allProducts);
    })();
  }, [data, params]);

  if (isLoading) return null;

  return data;
}
