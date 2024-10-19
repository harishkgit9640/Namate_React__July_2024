import { fireEvent, render, screen, search } from "@testing-library/react"
import '@testing-library/jest-dom'
import { FAQ } from '../FAQ';
describe('test for FAQ section', () => {

    render(<FAQ />)

    // it('should render faq header', () => {
    //     const heading = screen.getByText('FAQ SECTION');
    //     expect(heading).toBeInTheDocument();
    // });

    it('should work onclick', () => {
        const arrow_id = screen.getAllByText('downArrowId');
        expect(arrow_id.length).toBe(5);
        fireEvent.click(arrow_id[0]);
        const output = screen.getAllByTestId('faqId');
        expect(output.length).toBe(1);
    });

})