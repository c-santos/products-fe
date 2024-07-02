import { ProductStatus } from '@/enums/product-status.enum';
import { z } from 'zod';

export const productFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1),
    description: z.string().min(1),
    total_quantity: z.coerce.number().min(1),
    sold_quantity: z.coerce.number().optional(),
    price: z.coerce.number().min(1),
    status: z.nativeEnum(ProductStatus).optional(),
});
