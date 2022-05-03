import { screen, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    it('renders a list of characters and detail page when clicked', async () => {
        render(
            <MemoryRouter
                initialEntries={['/', '/characters/2']}
                initialIndex={0}
            >
                <App />
            </MemoryRouter>
        );

            await waitForElementToBeRemoved(screen.getByText('Loading Characters ^_^'));
    
            const link = await screen.findByText('Morty Smith');
            
            userEvent.click(link);
    
            const mortyImage = await screen.findByAltText('Image of Morty Smith');
    
            expect(mortyImage).toBeInTheDocument();
        });
});