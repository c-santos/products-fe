import { ProductStatus } from './product-status.enum';

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    total_quantity: number;
    sold_quantity: number;
    status: ProductStatus;
};
