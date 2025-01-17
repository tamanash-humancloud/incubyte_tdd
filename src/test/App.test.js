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

    it('renders number input buttons', () => {
        render(<Calculator />);
        expect(screen.getByRole('button', { name: '7' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '8' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '9' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '5' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '6' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '0' })).toBeInTheDocument();
    });
})