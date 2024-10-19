import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, json } from "react-router-dom";
import Card from "../Card";
import cardStore from "../../utils/cartStore";
import MOCK_DATA from '../../mock_data/singleMeal.json'
import Header from '../Header';
import '@testing-library/jest-dom'


// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCK_DATA)
//         }
//     })
// })

// global.fetch = jest.fu(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }))

describe('test cases for cart components', () => {

    it('should load card components', async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={cardStore}>
                    <Card mealList={MOCK_DATA} />
                </Provider>
            </BrowserRouter>
        ))
        const button = screen.getByRole('button', { name: 'Add to Cart' });
        expect(button).toBeInTheDocument();
    })

    it('should work add cart', async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={cardStore}>
                    <Card mealList={MOCK_DATA} />
                </Provider>
            </BrowserRouter>
        ))
        const cardCount = screen.getAllByTestId('cardCount');
        expect(cardCount.length).toBe(1);

    })

    it('should work add cart', async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={cardStore}>
                    <Card mealList={MOCK_DATA} />
                    <Header />
                </Provider>
            </BrowserRouter>
        ))
        const button = screen.getByRole('button', { name: 'Add to Cart' });
        fireEvent.click(button);

        const cartCount = screen.getByText('Cart - (1)');
        expect(cartCount).toBeInTheDocument();


    })

})


