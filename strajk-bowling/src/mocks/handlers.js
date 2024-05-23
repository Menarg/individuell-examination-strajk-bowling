import { http, HttpResponse } from 'msw';
 
export const handlers = [
    //intercept
    http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
        return HttpResponse.json({ success: true, message: 'booking succesful'});
    }),
]