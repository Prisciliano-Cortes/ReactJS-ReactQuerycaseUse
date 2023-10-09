import { useQueryClient } from "@tanstack/react-query"
import { ProductActions } from ".."

export const usePrefetchProduct = () => {
    
    const queryClient = useQueryClient()

    const prefetchProduct = (id: number) => {
        queryClient.prefetchQuery(
            ['product', id],
            () => ProductActions.getProductById(id)
        )
    }

    return prefetchProduct
}