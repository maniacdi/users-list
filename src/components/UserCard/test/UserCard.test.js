import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard';

describe('[Component] UserCard ', () => {
  const mockUser = {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone_number: '+1-555-555-5555',
  };
  test('renders user information correctly', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute(
      'src',
      `https://robohash.org/1?set=set5`
    );
    expect(imgElement).toHaveAttribute('alt', 'John Doe');
  });
});
