import styled from 'styled-components/macro';

const PaginationContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px 0 60px 20%;

  @media (max-width: 626px) {
    margin: 0 auto 40px;
  }
`;

const PaginationButton = styled.button`
  margin: 0 12px;
  border: none;
  font-weight: 500;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;

  &:focus,
  &.active {
    color: var(--primary-color);
  }
`;

export const Pagination = ({ setPage }: { setPage: (page: string) => void }) => (
  <PaginationContainer>
    <PaginationButton
      data-testid="page1"
      value={1}
      onClick={(event) => setPage((event.target as HTMLInputElement).value)}
    >
      1
    </PaginationButton>
    <PaginationButton
      data-testid="page2"
      value={2}
      onClick={(event) => setPage((event.target as HTMLInputElement).value)}
    >
      2
    </PaginationButton>
    <PaginationButton
      data-testid="page3"
      value={3}
      onClick={(event) => setPage((event.target as HTMLInputElement).value)}
    >
      3
    </PaginationButton>
  </PaginationContainer>
);
