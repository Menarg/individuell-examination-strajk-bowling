import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', ()=> {
    beforeEach(() => {
        render(<App/>)
    })

    it('Should select date and time', () => {

        const dateInput = screen.getByTestId('booking-info__date');
        fireEvent.change(dateInput, {
            target: {value: '2024-06-06'},
        });

        const timeInput = screen.getByTestId('booking-info__time');
        fireEvent.change(timeInput, {
            target: {value: '18:30'},
        });

        expect(dateInput.value).toBe('2024-06-06');
        expect(timeInput.value).toBe('18:30');

    });

    it('Should add a shoe and a shoesize', () => {

        const addShoeButton = screen.getByTestId('addShoe');
        fireEvent.click(addShoeButton);

        const shoeInput = screen.getByTestId('shoes__input');
        fireEvent.change(shoeInput, {
            target: {value: 44},
        });

        expect(shoeInput.value).toBe('44')

    });

    it('Should add amount of people, add shoes, then remove one, check if the form has appeared and that amount of people matches amount of shoes', async () => {

        const peopleInput = screen.getByTestId('booking-info__who');
        fireEvent.change(peopleInput, {
            target: {value: 2},
        });

        const addShoeButton = screen.getByTestId('addShoe');
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);

        const removeShoeButton = screen.getAllByTestId('removeShoe');
        fireEvent.click(removeShoeButton[1]);
        const shoesInput = screen.getAllByTestId('shoes__input')

        expect(parseInt(peopleInput.value)).toBe(shoesInput.length);

    });
            
    it('Should mock a booking', async () => {

        const dateInput = screen.getByTestId('booking-info__date');
        fireEvent.change(dateInput, {
            target: {value: '2024-06-06'},
        });

        const timeInput = screen.getByTestId('booking-info__time');
        fireEvent.change(timeInput, {
            target: {value: '18:30'},
        });

        const peopleInput = screen.getByTestId('booking-info__who');
        fireEvent.change(peopleInput, {
            target: {value: 4},
        });

        const lanesInput = screen.getByTestId('booking-info__lanes');
        fireEvent.change(lanesInput, {
            target: {value: 1},
        });

        const addShoeButton = screen.getByTestId('addShoe');
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);

        const shoesInput = screen.getAllByTestId('shoes__input');
        const shoe1 = shoesInput[0]
        const shoe2 = shoesInput[1]
        const shoe3 = shoesInput[2]
        const shoe4 = shoesInput[3]

        fireEvent.change(shoe1, { target: {value: 44}, });
        fireEvent.change(shoe2, { target: {value: 44}, });
        fireEvent.change(shoe3, { target: {value: 44}, });
        fireEvent.change(shoe4, { target: {value: 44}, });

        expect(dateInput.value).toBe('2024-06-06');
        expect(timeInput.value).toBe('18:30');
        expect(peopleInput.value).toBe('4');
        expect(lanesInput.value).toBe('1');
        expect(shoe1.value, shoe2.value, shoe3.value, shoe4.value).toBe('44');

        const bookingButton = screen.getByTestId('booking__button');
        await waitFor(() => {
            fireEvent.click(bookingButton)
        });
        
        await waitFor(() => {
            const confirmationPrice = screen.getByTestId('confirmation__price');
            expect(confirmationPrice).toBeInTheDocument();
            expect(confirmationPrice.innerHTML).toBe('580 sek');
        });

    });

    it('Should mock a booking and return to startpage', async () => {

        // all to get to the next page.
        const dateInput = screen.getByTestId('booking-info__date');
        fireEvent.change(dateInput, {
            target: {value: '2024-06-06'},
        });

        const timeInput = screen.getByTestId('booking-info__time');
        fireEvent.change(timeInput, {
            target: {value: '18:30'},
        });

        const peopleInput = screen.getByTestId('booking-info__who');
        fireEvent.change(peopleInput, {
            target: {value: 4},
        });

        const lanesInput = screen.getByTestId('booking-info__lanes');
        fireEvent.change(lanesInput, {
            target: {value: 1},
        });

        const addShoeButton = screen.getByTestId('addShoe');
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);
        fireEvent.click(addShoeButton);

        const shoesInput = screen.getAllByTestId('shoes__input');
        const shoe1 = shoesInput[0]
        const shoe2 = shoesInput[1]
        const shoe3 = shoesInput[2]
        const shoe4 = shoesInput[3]

        fireEvent.change(shoe1, { target: {value: 44}, });
        fireEvent.change(shoe2, { target: {value: 44}, });
        fireEvent.change(shoe3, { target: {value: 44}, });
        fireEvent.change(shoe4, { target: {value: 44}, });

        const bookingButton = screen.getByTestId('booking__button');
        await waitFor(() => {
            fireEvent.click(bookingButton)
        });
        
        await waitFor(() => {
            const confirmationPrice = screen.getByTestId('confirmation__price');
            expect(confirmationPrice).toBeInTheDocument();
        });

        //to get back to startpage.
        await waitFor(() => {
            const confirmationButton = screen.getByTestId('button confirmation__button');
            fireEvent.click(confirmationButton)
        });

        await waitFor(() => {
            const bookingButton = screen.getByTestId('booking__button');
            expect(bookingButton).toBeInTheDocument();
        });

    });
})