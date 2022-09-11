// @ts-nocheck
import starFull from '../../assets/star-full.png'
import starEmpty from '../../assets/star-empty.png'
import starHalf from '../../assets/star-half.png'

import styled from "styled-components/macro";

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StarIcon = styled.img`
    width: 16px;
    height: 16px;
    margin: 0 2px;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

const ReviewText = styled.p`
    font-size: 16px;
    line-height: 16px;
    margin: 0;
`;

const StarImage = ({ starType, starNumber = 0 }: { starType: string, starNumber?: number }) => {
    return (
        <StarIcon data-testid={`star-image-${starNumber}`} src={starType} alt="star icon" />
    )
}

const Reviews = ({ roundedRating, reviewCount }: { roundedRating: number, reviewCount: any }) => {
    return (
        <ReviewText data-testid="rating-reviews">&nbsp; &nbsp; {roundedRating} ({reviewCount} reviews)</ReviewText>
    )
}

const Rating = ({ roundedRating, reviewCount }: { roundedRating: number, reviewCount: any }) => {
    return (
        <RatingContainer data-testid="general-rating">
            <StarImage starNumber={1} starType={roundedRating <= 0.4 ? starEmpty : roundedRating <= 0.9 ? starHalf : starFull} />
            <StarImage starNumber={2} starType={roundedRating <= 1.4 ? starEmpty : roundedRating <= 1.9 ? starHalf : starFull} />
            <StarImage starNumber={3} starType={roundedRating <= 2.4 ? starEmpty : roundedRating <= 2.9 ? starHalf : starFull}/>
            <StarImage starNumber={4} starType={roundedRating <= 3.4 ? starEmpty : roundedRating <= 3.9 ? starHalf : starFull}/>
            <StarImage starNumber={5} starType={roundedRating <= 4.4 ? starEmpty : roundedRating <= 4.9 ? starHalf : starFull}/>
            <Reviews  roundedRating={roundedRating} reviewCount={reviewCount} />
        </RatingContainer>
    )
}

function RenderRating({ productRating }) {
    const { count, rate } = productRating;
    const roundedRating = Math.round(rate * 10) / 10;

    return (
        <Rating roundedRating={roundedRating} reviewCount={count} />
    );
}

export default RenderRating;