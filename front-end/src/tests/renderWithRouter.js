import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { UserProvider } from '../context/user-context';

const renderWithRouter = (component, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
} = {}) => (
  {
    ...render(
      <Router history={ history }>
        <UserProvider>
          {component}
        </UserProvider>
      </Router>,
    ),
    history,
  }
);

export default renderWithRouter;
