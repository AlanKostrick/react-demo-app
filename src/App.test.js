import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import HomeScreen from './pages/home-screen';
import { Provider as ReduxProvider } from 'react-redux';
import Users from './components/users';
import configureStore from './redux/store';

test('does the h2 render on the home screen', () => {
    render(<HomeScreen />);
    const h2Elem = screen.getByText('Home');
    expect(h2Elem).toBeInTheDocument();
});

const Wrapper = ({ children }) => (
    <ReduxProvider store={configureStore()}>{children}</ReduxProvider>
);

test('does the users component render an add user button', () => {
    render(<Users />, { wrapper: Wrapper });
    const buttonElem = screen.getByText('Add user');
    expect(buttonElem).toBeInTheDocument();
});