import React from 'react';
import { screen, render } from '@testing-library/react';
import { ProductSkeleton } from '../ProductSkeleton';

describe("ProductSkeleton", () => {
    it("should render", () => {
        render(<ProductSkeleton amount={1} />);
        const items = screen.getAllByTestId("skeleton")
        expect(items).toHaveLength(1);
        expect(screen.queryByTestId("skeleton")).toHaveStyle(`
            background-color: #e1e1e1;
            min-width: 300px;
            min-height: 300px;
        `);
    })
    
    it("should render 20 times", () => {
        render(<ProductSkeleton amount={20} />);
        const items = screen.getAllByTestId("skeleton")
        expect(items).toHaveLength(20);
    })

    it("should render with specified height", () => {
        render(<ProductSkeleton amount={1} height={200} />);
        expect(screen.queryByTestId("skeleton")).toHaveStyle(`
            min-height: 200px;
        `)
    })

    it("should render with specified width", () => {
        render(<ProductSkeleton amount={1} width={200} />);
        expect(screen.queryByTestId("skeleton")).toHaveStyle(`
            min-width: 200px;
        `)
    })
})