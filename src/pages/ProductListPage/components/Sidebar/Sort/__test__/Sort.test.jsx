import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';


import Sort from "../Sort";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
    setState: jest.fn(),
}))

const useStateMock = React.useState;


describe("Sort", () => {
    beforeEach(() => {
        jest.resetAllMocks()
    });

    it("should render default state", () => {
        const handleSortFetchMock = () => { };
        useStateMock
            .mockImplementationOnce(() => [false, jest.fn()])
            .mockImplementationOnce(() => [false, jest.fn()])
            .mockImplementationOnce(() => ["ASC", jest.fn()])

        render(<Sort handleSortFetch={handleSortFetchMock} />);
        expect(screen.queryByTestId("sort-form")).not.toBeInTheDocument();
    })

    it("should render form", () => {
        const handleSortFetchMock = () => { };
        useStateMock
            .mockImplementationOnce(() => [true, jest.fn()])
            .mockImplementationOnce(() => [false, jest.fn()])
            .mockImplementationOnce(() => ["ASC", jest.fn()])
        render(<Sort handleSortFetch={handleSortFetchMock} />);
        expect(screen.getByTestId("sort-form")).toBeInTheDocument();
    })

    it("should manage onClick handler", () => {
        const handleSortFetchMock = () => { };
        const setChoiceMock = jest.fn();
        const setIsClickedMock = jest.fn();
        const setSelectedMock = jest.fn();
        useStateMock
            .mockImplementationOnce(() => [false, setChoiceMock])
            .mockImplementationOnce(() => [false, setIsClickedMock])
            .mockImplementationOnce(() => ["ASC", setSelectedMock])
        render(<Sort handleSortFetch={handleSortFetchMock} />);
        fireEvent.click(screen.getByTestId("sort-button"));
        expect(setChoiceMock).toHaveBeenCalled();
        expect(setIsClickedMock).toHaveBeenCalled();
    })

    it("should change selected value", () => {
        const handleSortFetchMock = () => { };
        const setChoiceMock = jest.fn();
        const setIsClickedMock = jest.fn();
        const setSelectedMock = jest.fn();
        useStateMock
            .mockImplementationOnce(() => [true, setChoiceMock])
            .mockImplementationOnce(() => [false, setIsClickedMock])
            .mockImplementationOnce(() => ["ASC", setSelectedMock])
        render(<Sort handleSortFetch={handleSortFetchMock} />);

        fireEvent.click(screen.getByTestId("sort-label-desc"));
        expect(setSelectedMock).toHaveBeenCalledWith("DESC");
    })
    
})