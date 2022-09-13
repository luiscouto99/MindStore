import type { LikedProduct, Product as ProductType } from "../../../types/product";

export const getAllProducts = async(link: string, sort: string, page: string, setAllProducts: React.SetStateAction<LikedProduct[]>) => {
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
    // @ts-ignore
	setAllProducts(likedArr);
}