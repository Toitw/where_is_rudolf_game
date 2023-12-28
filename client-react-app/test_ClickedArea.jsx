import React from 'react';
import { render } from '@testing-library/react';
import ClickedArea from '../../../app/javascript/components/ClickedArea';

describe('ClickedArea', () => {
  it('renders with correct position', () => {
    const x = 100;
    const y = 200;
    const { container } = render(<ClickedArea x={x} y={y} />);
    const clickedArea = container.querySelector('.clicked-area');
    expect(clickedArea).toHaveStyle(`left: ${x}px`);
    expect(clickedArea).toHaveStyle(`top: ${y}px`);
  });
});