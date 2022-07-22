import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RegistrationContextProvider } from '../../contexts/RegistrationContext/RegistrationContext';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

global.fetch = jest.fn();

describe('Registration', () => {
  describe('Registration with valid input', () => {
    it('should validate an input', async () => {
      fetch.mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ registered: 'true' })
        })
      );
      let container;
      act(() => {
        container = render(
          <BrowserRouter>
            <RegistrationContextProvider>
              <RegistrationForm />
            </RegistrationContextProvider>
          </BrowserRouter>
        );
      });
      await act(() => {
        fireEvent.change(container.getByTestId('inputusername'), {
          target: { value: 'testuser' }
        });
        fireEvent.change(screen.getByTestId('inputemail'), {
          target: { value: 'testuser@user.de' }
        });
        fireEvent.change(screen.getByTestId('inputpassword'), { target: { value: 'testuser' } });

        fireEvent.click(screen.getByTestId('registerSubmitButton'));
      });
      expect(fetch).toHaveBeenCalled();
    });
  });
  describe('Registration with invalid input', () => {
    it('should not validate an input', async () => {
      fetch.mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ registered: 'true' })
        })
      );
      let container;
      act(() => {
        container = render(
          <BrowserRouter>
            <RegistrationContextProvider>
              <RegistrationForm />
            </RegistrationContextProvider>
          </BrowserRouter>
        );
      });
      await act(() => {
        fireEvent.change(container.getByTestId('inputusername'), {
          target: { value: 'testuser' }
        });
        fireEvent.change(screen.getByTestId('inputemail'), {
          target: { value: 'testuser@user.de' }
        });
        fireEvent.change(screen.getByTestId('inputpassword'), { target: { value: 'test' } });

        fireEvent.click(screen.getByTestId('registerSubmitButton'));
      });
      expect(fetch).not.toBeCalled();
    });
  });
});
