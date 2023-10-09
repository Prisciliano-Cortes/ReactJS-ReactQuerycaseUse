import { useQuery } from "@tanstack/react-query"
import { ProductActions } from ".."

interface Options {
    filterKey?: string
}

export const useProducts = ({ filterKey }: Options) => {

    const { isFetching,  isLoading, isError, error, data: products = [] } = useQuery(
        ['products', { filterKey }],
        () => ProductActions.getProduct({ filterKey }),
        {
            staleTime: 1000 * 60 * 60
        }
    )

    return {
        products,
        isFetching,
        isLoading,
        isError,
        error
    }
}