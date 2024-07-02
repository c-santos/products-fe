import { ProductStatus } from '@/enums/product-status.enum';
import type { Product } from '../types/product.type';

type ProductProps = Product;

export function Product(props: ProductProps) {
    return (
        <div className='p-4'>
            <h2>Name: {props.name}</h2>
            <p>Description: {props.description}</p>
            <p>Status: {ProductStatus[props.status]}</p>
            <p>Total Quantity: {props.total_quantity}</p>
            <p>Sold Quantity: {props.sold_quantity}</p>
        </div>
    );
}
