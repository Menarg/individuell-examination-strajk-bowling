import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', ()=> {

    it('Should select date and time', async () => {
        render(<App/>);

        await waitFor(() => {
            expect(screen.queryByText('strIIIIIike')).toBeInTheDocument();
        });


    });

    // it('Should', async () => {
    //     render(<App/>);
    // });
})