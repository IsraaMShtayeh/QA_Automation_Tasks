const statusCode = {
    'POST': 201,
    'GET': 200,
    'DELET': 204
};
const baseUrl = Cypress.config().baseUrl
const URLS = {
    users: `${baseUrl}/api/users`
    // users:`https://conduit.productionready.io/api/users`
}
export const callAPI = (method, url, body) => {
    cy.api({
        method,
        url,
        body
    }).then((res) => {
        expect(res.status).to.equal(statusCode[method]);
    })
}