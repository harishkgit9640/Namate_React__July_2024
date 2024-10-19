const { render, screen, search, act, fireEvent } = require("@testing-library/react");
const { BrowserRouter, json } = require("react-router-dom");
import Home from '../Home';
import '@testing-library/jest-dom'
import Mock_Data from '../../mock_data/meaList.json'
import { Provider } from 'react-redux';
import cartStore from '../../utils/cartStore';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data);
        }
    })
})

describe('test case for home components', () => {

    it('should load home components', async () => {
        await act(async () => {
            render(<>
                <BrowserRouter>
                    <Provider store={cartStore}>
                        <Home />
                    </Provider>
                </BrowserRouter>
            </>)
        })
        const button = screen.getByText('Pure Veg')
        expect(button).toBeInTheDocument();

    })

    it('should work search functionality', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={cartStore}>
                        <Home />
                    </Provider>
                </BrowserRouter>
            )
        })
        const inputData = screen.getByTestId("searchInput")
        fireEvent.change(inputData, { target: { value: 'Dessert' } });
        const button = screen.getByRole("button", { name: 'Search' });
        fireEvent.click(button);
        const card = screen.getAllByTestId('cardId');
        expect(card.length).toBe(10);

    })

    it('should work filter functionality', async () => {
        await act(async () => {
            render(<>
                <BrowserRouter>
                    <Provider store={cartStore}>
                        <Home />
                    </Provider>
                </BrowserRouter>
            </>)
        })

        const button = screen.getByRole("button", { name: 'Pure Veg' });
        fireEvent.click(button);
        const card = screen.getAllByTestId('cardId');
        expect(card.length).toBe(10);
    })
})