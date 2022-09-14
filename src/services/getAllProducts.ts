import type { LikedProduct, Product as ProductType } from "../types/product";

export const getAllProducts = async (link?: string, sort?: string, page?: string) => {
    if (link !== undefined && sort !== undefined && page !== undefined) {
        const response = await fetch(`/api/v1/users/products${link}${sort}&page=${page}`);
        const products: ProductType[] = await response.json();
        const likedArr: LikedProduct[] = products.map((product) => {
            const obj = {
                // destruturamos o product e injetamos o isLiked
                // assim o objeto retornado e uma replica do product com a propriedade extra
                ...product,
                isLiked: false,
            }
            return obj;
        });
    
        return likedArr;
    } else {
        const response = await fetch("/api/v1/users/products?direction=ASC&field=id&page=5&pagesize=3");
        const json = await response.json();
        return json;
    }
}