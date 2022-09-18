import { screen, render } from '@testing-library/react';

import { Product as ProductType, Rating as RatingType } from '../../../../../types/product';

import { HomeGallery } from '../HomeGallery';

import { Router } from 'react-router-dom';

const ratingMock: RatingType = {
  id: 7,
  rate: 3.2,
  count: 27,
};
const productMock: ProductType = {
  id: 1,
  title: 'test title',
  price: 20,
  description: 'test description',
  category: 'test category',
  image: 'https://reactjs.org/logo-og.png',
  stock: 300,
  rating: ratingMock,
};

describe('HomeGallery', () => {
  it('should render fetch product', () => {
    render(
      <Router location="/" navigator={{ createHref: () => null }}>
        <HomeGallery allProducts={[productMock]} isLoading={false} />
      </Router>,
    );
    const productTitle = screen.getByTestId('home-product');
    expect(productTitle.textContent).toMatch(productMock.title);
  });
});
