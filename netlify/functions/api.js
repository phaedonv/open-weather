exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
        cle: process.env.API_KEY
        }),
    }
}
