import type { Product } from './product.type';

type ProductProps = Product;

export function Product(props: ProductProps) {
    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.status}</p>
            <p>{props.total_quantity}</p>
            <p>{props.sold_quantity}</p>
        </>
    );
}
