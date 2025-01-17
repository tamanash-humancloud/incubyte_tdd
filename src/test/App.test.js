import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator Component', () => {
    it('renders the Calculator component', () => {
      render(<Calculator />);
      expect(screen.getByTestId('calculator')).toBeInTheDocument(); 
    });
})