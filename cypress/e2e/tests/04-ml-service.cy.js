describe('Mercado Libre API Test', () => {
    it('Debiera incluir la propiedad departments en la respuesta', () => {
        cy.request({
            method: 'GET',
            url: 'https://www.mercadolibre.com.ar/menu/departments',
            headers: {
                Accept: 'application/json',
                Referer: 'https://www.mercadolibre.com.ar/'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('departments');
        });
    });
});
