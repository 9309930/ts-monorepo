

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

    console.log(event.queryStringParameters)
    const name = event.queryStringParameters?.name || 'World';
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, ${name}` }),
    };
};
