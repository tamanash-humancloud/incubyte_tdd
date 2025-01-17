import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator Component', () => {
    it('renders the Calculator component', () => {
        render(<Calculator />);
        expect(screen.getByTestId('calculator')).toBeInTheDocument(); 
    });


    it('renders the display and its children', () => {
        render(<Calculator />);
        expect(screen.getByTestId('display')).toBeInTheDocument();
        expect(screen.getByTestId('equation')).toBeInTheDocument(); 
        expect(screen.getByTestId('input-result')).toBeInTheDocument();  
    });
})