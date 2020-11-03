import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Page', () => {
  test('Should compare with Snapshot', () => {
    expect(render(<App />)).toMatchSnapshot();
  });
  test('should check navbar', () => {
    render(<App />);
    const linkElement = screen.getByText('News');
    expect(linkElement).toBeInTheDocument();
  });
});
