import type { Product } from '../types/product.type';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { StatusButton } from './StatusButton';
type ProductCardProps = Product;

export function Product(props: ProductCardProps) {
    return (
        <div className='p-4'>
            <Card>
                <CardHeader>
                    <CardTitle>{props.name}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <StatusButton status={props.status}/>
                        <span className='text-ml font-light pl-4 pr-2'>Quantity</span>
                        <span className='text-ml font-medium'>
                            {props.sold_quantity} / {props.total_quantity}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
