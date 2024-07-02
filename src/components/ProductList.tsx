import { apiClient } from "@/api/api-client";
import { useEffect, useState } from "react";
import { Product } from "./ProductCard";
import type { Product as ProductType } from "@/types/product.type";

export function ProductList() {
    const [products, setProducts] = useState<any>(null)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiClient.get('/products')
                setProducts(response.data.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
                setError(error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <h3>Products</h3>
            {error != null ? <p>{error}</p> : null}
            {
                products != null
                    ? products.map((product: ProductType) => {
                        return (
                            <Product {...product} />
                        )
                    }) 
                    : null
            }
        </div>
    )

}
