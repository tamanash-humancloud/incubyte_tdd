import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('renders operator buttons', () => {
        render(<Calculator />);
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '*' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '/' })).toBeInTheDocument();
    });

    it('renders utility buttons', () => {
        render(<Calculator />);
        expect(screen.getByRole('button', { name: 'C' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '=' })).toBeInTheDocument();
    });

    it('should display the initial state correct', () => {
        render(<Calculator />)
        const display = screen.getByTestId('input-result')
        expect(display).toHaveTextContent('0')
    });

    it('should handle number inputs correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '7' }));
        userEvent.click(screen.getByRole('button', { name: '8' }));

        await waitFor(() => {
            const display = screen.getByTestId('input-result')
            expect(display).toHaveTextContent('78');
        })
    });

    it('should handle operator inputs correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '7' }));
        userEvent.click(screen.getByRole('button', { name: '+' }));

        await waitFor(() => {
            const display = screen.getByTestId('input-result') 
            expect(display).toHaveTextContent('0'); 

            const eq = screen.getByTestId('equation')
            expect(eq).toHaveTextContent('7 +')
        })
    });

    it('should handle clear button correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '5' }));
        userEvent.click(screen.getByRole('button', { name: '+' }));
        userEvent.click(screen.getByRole('button', { name: '3' }));
        userEvent.click(screen.getByRole('button', { name: 'C' })); 
        
        await waitFor(() => {
            const display = screen.getByTestId('input-result') 
            expect(display).toHaveTextContent('0');
        })
    });
})