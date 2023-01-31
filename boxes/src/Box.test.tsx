import { render } from '@testing-library/react';
import Box from './Box';

describe('Box component', function (): void {
  test('renders without crashing', function (): void {
    render(
      <Box
        id='test'
        width='20'
        height='20'
        backgroundColor='greenyellow'
        remove={jest.fn()}
      />
    );
  });

  test('matches snapshot', function (): void {
    const { container } = render(
      <Box
        id='test'
        width='20'
        height='20'
        backgroundColor='greenyellow'
        remove={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});