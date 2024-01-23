interface IProduct {
    id: string,
    name: string,
    description: string,
    like: boolean,
    picture: {
        path: string,
        alt: string
    },
    price: {
        value: number,
        currency: string
    }
    info?: string,
    details?: string,
}

export default IProduct;