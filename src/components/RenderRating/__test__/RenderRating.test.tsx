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
    rate: 4.4,
    count: 234,
}

describe("RenderRating", () => {
    it("should check Review content matches", () => {
        render(<RenderRating productRating={productRatingMock} />);
        const ratingReviews = screen.getByTestId("rating-reviews");
        expect(ratingReviews.textContent).toMatch(/\s*(4\.4 \(234 reviews\))/)
            // .toBe("    4.4 (234 reviews)");
        // expect(ratingContainer).toHaveAttribute("roundedRating");
    })

    // it("should check if attribute 'reviewCount' in <Rating> exits", () => {
    //     render(<RenderRating productRating={productRatingMock} />);
    //     const ratingContainer = screen.getByTestId("general-rating");
    //     expect(ratingContainer).toHaveAttribute("roundedRating");
    // })

    // it("should check if starType attribute is correct according to mock", () => {
    //     render(<RenderRating productRating={productRatingMock} />);
    //     const star = screen.getByTestId("star-image-1");
    //     expect(star).toHaveAttribute("starType", `${productRatingMock.rate}`);
    // })
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