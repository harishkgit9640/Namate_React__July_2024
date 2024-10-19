import { render, screen } from "@testing-library/react";
import Header from '../Header';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import cartStore from '../../utils/cartStore';
describe('should load the header component', () => {

    render(<>
        <BrowserRouter>
            <Provider store={cartStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    </>)

    it('should load the header', () => {
        const Home = screen.getByText('Home');
        expect(Home).toBeInTheDocument();

    })

})