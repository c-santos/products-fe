import { useProducts } from './hooks/useProducts';
import { Product } from './Product';

export function ProductList() {
    const { products, isLoading } = useProducts();

    if (isLoading) {
        return <>Loading!</>;
    }

    if (products?.length !== 0) {
        return (
            <>
                <p>Products</p>
                {products!.map((product) => (
                    <Product {...product} />
                ))}
            </>
        );
    }
}
