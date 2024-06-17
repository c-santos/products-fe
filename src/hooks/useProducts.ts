import { useState, useEffect } from 'react';
import type { Product } from '../product.type';
import { apiClient } from '../api-client';

export function useProducts() {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await apiClient.get('/products');
                setProducts(response.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
        return () => {};
    }, []);

    return { products, isLoading };
}
