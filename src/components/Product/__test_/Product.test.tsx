import { screen, render } from '@testing-library/react';

import Product from "../Product";
import { Product as ProductType, Rating as RatingType } from "../../../types/product";

const ratingMock: RatingType = {
    id: 7,
    rate: 3.2,
    count: 27
};
const productMock: ProductType = {
    id: 1,
    title: "test title",
    price: 20,
    description: "test description",
    category: "test category",
    image: "https://reactjs.org/logo-og.png",
    stock: 300,
    rating: ratingMock
};

describe("Product", () => {
    it("should render product info correctly", () => {
        render(<Product productProp={productMock} />);
        const productTitle = screen.getByTestId("product-text");
        expect(productTitle.textContent).toMatch(productMock.title);
    });
});