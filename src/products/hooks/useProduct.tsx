import { useQuery } from "@tanstack/react-query"
import { ProductActions } from ".."

interface Options {
    id: number
}

export const useProduct = ({ id }: Options) => {

    const { isFetching,  isLoading, isError, error, data: product } = useQuery(
        ['product', id],
        () => ProductActions.getProductById(id),
        {
            staleTime: 1000 * 60 * 60
        }
    )

    return {
        product,
        isFetching,
        isLoading,
        isError,
        error
    }
}