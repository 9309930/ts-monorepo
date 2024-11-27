import { handler } from '../src/handler';

describe('Lambda Function Tests', () => {
    it('should return Hello, World when no name is provided', async () => {
        const event = { queryStringParameters: {} } as any;
        const result = await handler(event);
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe(JSON.stringify({ message: 'Hello, World' }));
    });

    it('should return Hello, [name] when name is provided', async () => {
        const event = { queryStringParameters: { name: 'John' } } as any;
        const result = await handler(event);
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe(JSON.stringify({ message: 'Hello, John' }));
    });
});
