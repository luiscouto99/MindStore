import React from 'react';
import { screen, render } from '@testing-library/react';

import RenderRating from "../RenderRating"

type productRatingProps = {
  id: number,
  rate: number,
  count: number
}

const productRatingMock: productRatingProps = {
  id: 21,
  rate: 1.4,
  count: 234,
}
const emptyProductRatingMock: productRatingProps = {
  id: 21,
  rate: 0,
  count: 1,
}
const fullProductRatingMock: productRatingProps = {
  id: 21,
  rate: 5,
  count: 11,
}
const halfProductRatingMock1: productRatingProps = {
  id: 21,
  rate: 0.5,
  count: 11,
}
const halfProductRatingMock2: productRatingProps = {
  id: 21,
  rate: 1.5,
  count: 11,
}
const halfProductRatingMock3: productRatingProps = {
  id: 21,
  rate: 2.5,
  count: 11,
}
const halfProductRatingMock4: productRatingProps = {
  id: 21,
  rate: 3.5,
  count: 11,
}
const halfProductRatingMock5: productRatingProps = {
  id: 21,
  rate: 4.5,
  count: 11,
}
describe("RenderRating", () => {
  it("should check Review content matches", () => {
    render(<RenderRating productRating={productRatingMock} />);
    const ratingReviews = screen.getByTestId("rating-reviews");
    expect(ratingReviews.textContent).toMatch(/\s*(1\.4 \(234 reviews\))/);
  });

  it("should check if all StarIcon 'src' url match according to productRatingMock.rate", () => {
    render(<RenderRating productRating={productRatingMock} />);
    const starIcon1 = screen.getByTestId("star-image-1");
    const starIcon2 = screen.getByTestId("star-image-2");
    const starIcon3 = screen.getByTestId("star-image-3");
    const starIcon4 = screen.getByTestId("star-image-4");
    const starIcon5 = screen.getByTestId("star-image-5");

    expect(starIcon1).toHaveAttribute("src", "star-full.png");
    expect(starIcon2).toHaveAttribute("src", "star-empty.png");
    expect(starIcon3).toHaveAttribute("src", "star-empty.png");
    expect(starIcon4).toHaveAttribute("src", "star-empty.png");
    expect(starIcon5).toHaveAttribute("src", "star-empty.png");
  })

  it("should check if all StarIcon 'src' url match 'star-empty.png'", () => {
    render(<RenderRating productRating={emptyProductRatingMock} />);
    const starIcon1 = screen.getByTestId("star-image-1");
    const starIcon2 = screen.getByTestId("star-image-2");
    const starIcon3 = screen.getByTestId("star-image-3");
    const starIcon4 = screen.getByTestId("star-image-4");
    const starIcon5 = screen.getByTestId("star-image-5");

    expect(starIcon1).toHaveAttribute("src", "star-empty.png");
    expect(starIcon2).toHaveAttribute("src", "star-empty.png");
    expect(starIcon3).toHaveAttribute("src", "star-empty.png");
    expect(starIcon4).toHaveAttribute("src", "star-empty.png");
    expect(starIcon5).toHaveAttribute("src", "star-empty.png");
  })

  it("should check if all StarIcon 'src' url match 'star-full.png'", () => {
    render(<RenderRating productRating={fullProductRatingMock} />);
    const starIcon1 = screen.getByTestId("star-image-1");
    const starIcon2 = screen.getByTestId("star-image-2");
    const starIcon3 = screen.getByTestId("star-image-3");
    const starIcon4 = screen.getByTestId("star-image-4");
    const starIcon5 = screen.getByTestId("star-image-5");

    expect(starIcon1).toHaveAttribute("src", "star-full.png");
    expect(starIcon2).toHaveAttribute("src", "star-full.png");
    expect(starIcon3).toHaveAttribute("src", "star-full.png");
    expect(starIcon4).toHaveAttribute("src", "star-full.png");
    expect(starIcon5).toHaveAttribute("src", "star-full.png");
  })

  it("should check if first star is half", () => {
    render(<RenderRating productRating={halfProductRatingMock1} />);
    const starIcon1 = screen.getByTestId("star-image-1");
    expect(starIcon1).toHaveAttribute("src", "star-half.png");
  })

  it("should check if second star is half", () => {
    render(<RenderRating productRating={halfProductRatingMock2} />);
    const starIcon1 = screen.getByTestId("star-image-2");
    expect(starIcon1).toHaveAttribute("src", "star-half.png");
  })

  it("should check if third star is half", () => {
    render(<RenderRating productRating={halfProductRatingMock3} />);
    const starIcon1 = screen.getByTestId("star-image-3");
    expect(starIcon1).toHaveAttribute("src", "star-half.png");
  })

  it("should check if forth star is half", () => {
    render(<RenderRating productRating={halfProductRatingMock4} />);
    const starIcon1 = screen.getByTestId("star-image-4");
    expect(starIcon1).toHaveAttribute("src", "star-half.png");
  })

  it("should check if fifth star is half", () => {
    render(<RenderRating productRating={halfProductRatingMock5} />);
    const starIcon1 = screen.getByTestId("star-image-5");
    expect(starIcon1).toHaveAttribute("src", "star-half.png");
  })
})


/* <body>
      <div>
        <div
          class="RenderRating__RatingContainer-sc-uwmimt-0 fVNLWj"
          data-testid="general-rating"
        >
          <img
            alt="star icon"
            class="RenderRating__StarIcon-sc-uwmimt-1 etnViW"
            data-testid="star-image-1"
            src="star-full.png"
          />
          <img
            alt="star icon"
            class="RenderRating__StarIcon-sc-uwmimt-1 etnViW"
            data-testid="star-image-2"
            src="star-full.png"
          />
          <img
            alt="star icon"
            class="RenderRating__StarIcon-sc-uwmimt-1 etnViW"
            data-testid="star-image-3"
            src="star-full.png"
          />
          <img
            alt="star icon"
            class="RenderRating__StarIcon-sc-uwmimt-1 etnViW"
            data-testid="star-image-4"
            src="star-full.png"
          />
          <img
            alt="star icon"
            class="RenderRating__StarIcon-sc-uwmimt-1 etnViW"
            data-testid="star-image-5"
            src="star-empty.png"
          />
          <p
            class="RenderRating__ReviewText-sc-uwmimt-2 hZaKxO"
            data-testid="rating-reviews"
          >
               
            4.4
             (
            234
             reviews)
          </p>
        </div>
      </div>
    </body> */