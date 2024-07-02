import { ProductStatus } from "@/enums/product-status.enum"
import { Button } from "./ui/button"
import { capitalize } from "@/utils/capitalize.util"

type StatusButtonProps = {
    status: ProductStatus
}

export function StatusButton(props: StatusButtonProps) {
    if (props.status === ProductStatus.AVAILABLE) {
        return (
            <Button 
                variant="outline" 
                className="bg-green-600 text-white"
                size={"sm"}
            >
                {(ProductStatus[props.status])}
            </Button>
        )
    }

    if (props.status === ProductStatus.RESERVED) {
        return (
            <Button 
                variant="outline" 
                className="bg-orange-600 text-white"
                size={"sm"}
            >
                {(ProductStatus[props.status])}
            </Button>
        )
    }

    if (props.status === ProductStatus.SOLD) {
        return (
            <Button 
                variant="outline" 
                className="bg-red-600 text-white"
                size={"sm"}
            >
                {(ProductStatus[props.status])}
            </Button>
        )
    }

    return;
}
