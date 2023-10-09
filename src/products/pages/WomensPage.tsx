import { ProductList, useProducts } from ".."

export const WomensPage = () => {
    const { products, isLoading } = useProducts({
        filterKey: "women's clothing"
    })

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Productos para mujeres</h1>

            { isLoading && <p>...Loading</p> }

            <ProductList products={products} />
        </div>
    )
}