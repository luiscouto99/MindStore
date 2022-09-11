export type Rating = {
    id: number,
    rate: number,
    count: number
}

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    stock: number,
    rating: Rating
}

export type LikedProduct = Product & {
    isLiked: boolean
}

export type ProductListSorting = "ASC" | "DESC";