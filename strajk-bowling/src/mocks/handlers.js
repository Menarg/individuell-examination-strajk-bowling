import { http, HttpResponse } from 'msw';

const booking = {
    "active": true,
    "id": "STR8546OAXJ",
    "lanes": "1",
    "people": "4",
    "price": 580,
    "shoes": ["44","44","44","44"],
    "when": "2024-06-06T18:30",
};

export const handlers = [
    //intercept
    http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
        return HttpResponse.json(booking);
    }),
];