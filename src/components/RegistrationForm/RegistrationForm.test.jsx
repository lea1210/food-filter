import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import promise from 'promise';
import { act } from 'react-dom/test-utils';
import RegistrationFormContextWrapper from './RegistrationForm';

const mockOnSubmit = jest.fn(() => promise);

describe('Registration', () => {
  describe('Registration with valid input', () => {
    it('should validate an input', async () => {
      const wrapper = render(<RegistrationFormContextWrapper onSubmit={mockOnSubmit} />);
      const promise = Promise.resolve();
      fireEvent.change(screen.getByLabelText('Username*'), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByLabelText('E-Mail*'), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByLabelText('Passwort*'), { target: { value: 'testuser' } });
      const button = wrapper.findByText('Registrieren');
      fireEvent.click(button);
      expect(mockOnSubmit).toHaveBeenCalled();

      await act(() => promise);
    });
  });
});
