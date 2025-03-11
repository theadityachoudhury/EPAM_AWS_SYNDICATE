exports.handler = async (event) => {
    // TODO implement
    console.log('Received event:', JSON.stringify(event));
    return {
        statusCode: 200,
        body: 'Processed SQS Messages Successfully'
      };
};
