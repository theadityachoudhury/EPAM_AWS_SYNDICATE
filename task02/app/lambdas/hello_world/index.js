exports.handler = async (event) => {
    // TODO implement
    //check the path if it is /hello then return response 200 otherwise 400
    if (event.path !== "/hello" || event.method !== "GET") {
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: event
            }),
        };
    }
    const response = {
        statusCode: 200,
        message: 'Hello from Lambda',
    };
    return response;
};
