import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import QuantityButton from '../QuantityButton';

const handleAddToUserCartMock = jest.fn();


describe("QuantityButton", () => {
    it("should render buttons", () => {
        render(<QuantityButton handleAddToUserCart={handleAddToUserCartMock} quantity={1} />)
        const increaseBtn = screen.getByText("+");
        const decreaseBtn = screen.getByText("-");
        expect(increaseBtn).toBeInTheDocument();
        expect(decreaseBtn).toBeInTheDocument();
    })

    it("should increase quantity", () => {
        render(<QuantityButton handleAddToUserCart={handleAddToUserCartMock} quantity={1} />)
        const increaseBtn = screen.getByTestId("increment-button");
        fireEvent.click(increaseBtn);
        expect(handleAddToUserCartMock).toHaveBeenCalledTimes(1);
        expect(handleAddToUserCartMock).toHaveBeenCalledWith(2);
    })

    it("should not increase quantity more than 10", () => {
        render(<QuantityButton handleAddToUserCart={handleAddToUserCartMock} quantity={10} />)
        const increaseBtn = screen.getByTestId("increment-button");
        fireEvent.click(increaseBtn);
        expect(handleAddToUserCartMock).toHaveBeenCalledTimes(1);
        expect(handleAddToUserCartMock).toHaveBeenCalledWith(10);
    })


    it("should decrease quantity", () => {
        render(<QuantityButton handleAddToUserCart={handleAddToUserCartMock} quantity={2} />)
        const decreaseBtn = screen.getByTestId("decrement-button");
        fireEvent.click(decreaseBtn);
        expect(handleAddToUserCartMock).toHaveBeenCalledTimes(1);
        expect(handleAddToUserCartMock).toHaveBeenCalledWith(1);
    })

    it("should not decrease quantity more than 1", () => {
        render(<QuantityButton handleAddToUserCart={handleAddToUserCartMock} quantity={1} />)
        const decreaseBtn = screen.getByTestId("decrement-button");
        fireEvent.click(decreaseBtn);
        expect(handleAddToUserCartMock).toHaveBeenCalledTimes(1);
        expect(handleAddToUserCartMock).toHaveBeenCalledWith(1);
    })

})