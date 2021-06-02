const request = require('supertest');
const app = require('./app');

let server;

beforeEach(() => {
    server = request(app);
});

describe('Running Unit Tests: gets status code 200', () => {
    it('GET request', async () => {
        const url = '/';
        const response = await server.get(url);
        expect(response.status).toEqual(200);
    });

});