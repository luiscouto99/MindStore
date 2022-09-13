import { screen, render, fireEvent } from '@testing-library/react';

import {Pagination} from "../Pagination"

const usePageMock = jest.fn();
const setPageMock = jest.fn();

describe("Pagination", () => {
    it("should render", () => {
        render(<Pagination setPage={setPageMock} />)
        usePageMock.mockImplementationOnce(() => [1, setPageMock])
        fireEvent.click(screen.getByTestId("page1"))
        fireEvent.click(screen.getByTestId("page2"))
        fireEvent.click(screen.getByTestId("page3"))

        expect(setPageMock).toHaveBeenCalledWith("1");
        expect(setPageMock).toHaveBeenCalledWith("2");
        expect(setPageMock).toHaveBeenCalledWith("3");
    })
})