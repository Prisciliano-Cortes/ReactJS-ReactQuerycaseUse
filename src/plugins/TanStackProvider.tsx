import { PropsWithChildren } from 'react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const TanStackProvider = ({ children }: PropsWithChildren ) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                { children }

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}