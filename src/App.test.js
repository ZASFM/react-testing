import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Im getting my list of items that is rendered in the screen and and awaiting the to be 3
test('List of three elements',()=>{
  render(<App/>);
  const list=screen.getAllByRole('listitem');
  expect(list.length).toBe(3);
})