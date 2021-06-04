import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from '../../core/types/Products';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => {

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    console.log(productsResponse);

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }
        makeRequest({ url:'/products', params })
        .then(response => setProductsResponse(response.data))
    },[]);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catálogo de produtos
            </h1>
            <div className="catalog-products">
                {productsResponse?.content.map(product => (
                    <Link to="/products/1" key={product.id}>
                        <ProductCard />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;