import { ProductContainer } from '../../pages/ProductListPage/components/ProductListGrid/ProductContainer';

import styled from 'styled-components/macro';

type SkeletonProps = {
  width?: number;
  height?: number;
};

const Skeleton = styled(ProductContainer)<SkeletonProps>`
  position: relative;
  background-color: #e1e1e1;
  min-width: ${(props) => (props.width ? `${props.width}px;` : '300px;')};
  min-height: ${(props) => (props.height ? `${props.height}px;` : '300px;')};
`;

export const ProductSkeleton = ({
  amount,
  height,
  width,
}: {
  amount: number;
  height?: number;
  width?: number;
}) => {
  const scafold = [];
  for (let index = 0; index < amount; index++) {
    scafold.push(
      <Skeleton key={`skeleton-${index}`} height={height} width={width} data-testid="skeleton" />,
    );
  }
  return <>{scafold}</>;
};
