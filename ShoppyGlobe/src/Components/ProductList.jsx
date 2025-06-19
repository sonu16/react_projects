import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { useFetchProducts } from '../hooks/useFetchProducts';
import './ProductList.css';

function ProductList() {
  const { data, loading, error } = useFetchProducts('https://dummyjson.com/products');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const products = data?.products || [];
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log('Filtered Products:', filteredProducts);
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className='product-list'>
      <div className='product-header'>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange} style={{ marginBottom: '20px', width: '300px' }}
        />
      </div>
      <div className='product-grid'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;