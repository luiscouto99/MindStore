import { screen, render } from '@testing-library/react';

import {Price} from "../Price";

describe("Price", () => {
    it("should render with correct total value", () => {
        render(<Price total={123} />)
        expect(screen.getByTestId("total").textContent).toMatch("123 €");
    })
})