exports.handler = async (event) => {
    // TODO implement
    //check the path if it is /hello then return response 200 otherwise 400
    if (event.rawPath !== "/hello" || event.requestContext?.http?.method !== "GET") {
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                statusCode: 400,
                message: `Bad request syntax or unsupported method. Request path: ${event.rawPath}. HTTP method: ${event.requestContext?.http?.method}`,
            })
        };
    }
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            statusCode: 200,
            message: "Hello from Lambda",
        })
    };
};
