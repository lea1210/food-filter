import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';


describe("Registration", () =>{
    describe("Registration with valid input", () =>{
        it("should validate an input", async () =>{
            const mockOnSubmit = jest.fn()
            const {getByLabelText, getByRole} = render(<RegistrationForm onSubmit={mockOnSubmit}/>)

            fireEvent.change(screen.getByLabelText("Username*"),{target: {value: "testuser"}})
            fireEvent.change(screen.getByLabelText("E-Mail*"),{target: {value: "testuser"}})
            fireEvent.change(screen.getByLabelText("Passwort*"),{target: {value: "testuser"}})

        })
    })
})