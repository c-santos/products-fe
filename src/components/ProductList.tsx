import { useProducts } from './hooks/useProducts';
import { Product } from './components/Product';

export function ProductList() {
    const { products, isLoading } = useProducts();

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
