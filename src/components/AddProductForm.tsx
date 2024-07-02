import { ProductStatus } from '@/enums/product-status.enum';
import { productFormSchema } from '@/validations/product-form.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { apiClient } from '@/api/api-client';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export function AddProductForm() {
    const form = useForm<z.infer<typeof productFormSchema>>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: '',
            description: '',
            total_quantity: 0,
            sold_quantity: 0,
            price: 0,
            status: ProductStatus.AVAILABLE,
        },
    });

    const onSubmit = async (values: z.infer<typeof productFormSchema>) => {
        console.log(values);
        try {
            const response = await apiClient.post('/products', values)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Product name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This will be the displayed name of your
                                    product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Product description'
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This will be the description of your
                                    product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type='number'
                                        placeholder='0'
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This will be the price of your product in
                                    PHP.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='total_quantity'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Total quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='0'
                                        {...field}
                                        type='number'
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is the total quantity of the product
                                    you are selling.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='sold_quantity'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sold quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Price'
                                        {...field}
                                        type='number'
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is the quantity that is unavailable to be sold.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='status'
                        render={({ field }) => (
                            <FormItem className='space-y-3'>
                                <FormLabel>Status</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={ProductStatus.AVAILABLE}
                                        className='flex flex-col space-y-1'
                                    >

                                        <FormItem className='flex items-center space-x-3 space-y-0'>
                                            <FormControl>
                                                <RadioGroupItem value={ProductStatus.AVAILABLE} />
                                            </FormControl>
                                            <FormLabel>Available</FormLabel>
                                        </FormItem>

                                        <FormItem className='flex items-center space-x-3 space-y-0'>
                                            <FormControl>
                                                <RadioGroupItem value={ProductStatus.RESERVED} />
                                            </FormControl>
                                            <FormLabel>Reserved</FormLabel>
                                        </FormItem>

                                        <FormItem className='flex items-center space-x-3 space-y-0'>
                                            <FormControl>
                                                <RadioGroupItem value={ProductStatus.SOLD} />
                                            </FormControl>
                                            <FormLabel>Sold</FormLabel>
                                        </FormItem>

                                    </RadioGroup>
                                </FormControl>
                                <FormDescription>
                                    Choose the status of your product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        </div>
    );
}
