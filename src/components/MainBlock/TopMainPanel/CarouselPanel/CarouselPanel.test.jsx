import { render } from '@testing-library/react';
import { CarouselPanel } from './CarouselPanel';

describe('CarouselPanel component', () => {
  test('renders with isWeek=true and isLoading=false', () => {
    render(<CarouselPanel isWeek={true} isLoading={false} />);
  });

  test('renders with isWeek=false and isLoading=true', () => {
    render(<CarouselPanel isWeek={false} isLoading={true} />);
  });

  test('handles click on prev button correctly when isWeek=true', () => {
    render(<CarouselPanel isWeek={true} isLoading={true} />);
  });

  test('handles click on prev button correctly when isWeek=false', () => {
    render(<CarouselPanel isWeek={false} isLoading={false} />);
  });

});
