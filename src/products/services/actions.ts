import { Product, productApi } from ".."

interface getProductOptions {
    filterKey?: string
}

interface ProductLike {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const sleep = (seconds: number = 1):Promise<boolean> => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    })
}

export const getProduct = async({ filterKey }: getProductOptions): Promise<Product[]> => {

    //await sleep(2)
    
    const filterUrl = ( filterKey ) ? `category=${filterKey}` : ''

    const { data } = await productApi.get<Product[]>(`/products?${filterUrl}`)

    return data
}

export const getProductById = async(id: number): Promise<Product> => {

    //await sleep(2)

    const { data } = await productApi.get<Product>(`/products/${id}`,)

    return data
}

export const createProduct = async( product: ProductLike ): Promise<Product> => {
    await sleep(2)

    const { data } = await productApi.post<Product>(`/products`, product)

    return data
}