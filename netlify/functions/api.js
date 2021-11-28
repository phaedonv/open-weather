exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
        key: process.env.API_KEY
        }),
    }
}
