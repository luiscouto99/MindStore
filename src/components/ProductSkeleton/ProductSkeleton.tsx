// @ts-nocheck
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import styled from "styled-components/macro";

const SkeletonContainer = styled.div`
`;

function ProductSkeleton({ cards, width, height }: { cards: number, width:number, height: number }) {
    return (
        Array(cards).fill(0).map((_, index) => {
            return(
                <SkeletonContainer key = {index} >
                    <Skeleton width={width} height={height} />
                </SkeletonContainer>
            )
        })
    )
}

export default ProductSkeleton;