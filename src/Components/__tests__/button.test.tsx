import {render} from '@testing-library/react';
import React from 'react';
import Button from "../button";

describe("Button", () => {
    let button: HTMLElement;

    beforeEach(() => {
        const { getByRole } = render(<Button buttonText={"Submit"} type="button" />);
        button = getByRole("button") as HTMLButtonElement;
    });

    test(`renders button`, () => {
        expect(button).toBeInTheDocument();
    });

    test(`applies all attributes`, () => {
        expect(button).toHaveAttribute("type", "button");
        expect(button).toHaveTextContent("Submit");
    });
});