import {test, expect} from 'vitest';
import {Demo} from './Demo'
import {render, screen} from '@testing-library/react'

test('test', () => {
  render(<h1>Helloz</h1>);

  expect(screen.getByRole('heading')).toHaveTextContent('Hello');
});
