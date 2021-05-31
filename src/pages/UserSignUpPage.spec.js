import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {UserSignUpPage} from './UserSignUpPage';

beforeEach(cleanup);

describe('UserSignUpPage', () =>{
    describe('Layout', () =>{
        it('has header of Sign Up', () => {
            const {container} = render(<UserSignUpPage />);
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        })
        it('has input for display name', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        })
        it('has input for username', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const usernameInput = queryByPlaceholderText('Your username');
            expect(usernameInput).toBeInTheDocument();
        })
        it('has input password', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        })
        it('has password type for input password', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        })
        it('has input password repeat', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordRepeated = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeated).toBeInTheDocument();
        })
        it('has repeat password type for input password', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordRepeated = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeated.type).toBe('password');
        })
        it('has submit button', () => {
            const {container} = render(<UserSignUpPage/>);
            const button = container.querySelector('button');
            expect(button).toBeInTheDocument();
        });
    });
    describe('Interactions', () =>{

        const changeEvent = (content) => {
            return {
              target: {
                value: content,
              },
            };
          };

        it('sets the displayName value into state', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const displayNameInput = queryByPlaceholderText('Your display name');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
      
            expect(displayNameInput).toHaveValue('my-display-name');
        });

        it('sets the username value into state', () =>{
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const userNameInput = queryByPlaceholderText('Your display name');

            fireEvent.change(userNameInput, changeEvent('my-user-name'));
      
            expect(userNameInput).toHaveValue('my-user-name');
        });

        it('sets the password value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your password');
      
            fireEvent.change(passwordInput, changeEvent('P4ssword'));
      
            expect(passwordInput).toHaveValue('P4ssword');
          });
      
          it('sets the password repeat value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordRepeat = queryByPlaceholderText('Repeat your password');
      
            fireEvent.change(passwordRepeat, changeEvent('P4ssword'));
      
            expect(passwordRepeat).toHaveValue('P4ssword');
          });
    })
});