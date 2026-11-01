import LoginPage from '../../pages/LoginPage';

describe('Inicio de Sesión', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Debiera iniciar sesion con credenciales válidas', () => {
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    });

    it('Debiera mostrar un error cuando el nombre de usuario está vacío', () => {
        LoginPage.submit();
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Username is required');
    });

    it('Debiera mostrar un error cuando la contraseña está vacía', () => {
        LoginPage.enterUsername('standard_user');
        LoginPage.submit();
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Password is required');
    });

    it('Debiera mostrar un error con credenciales inválidas', () => {
        LoginPage.login('standard_user', 'not_secret_sauce');
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Debiera mostrar un error para un usuario bloqueado', () => {
        LoginPage.login('locked_out_user', 'secret_sauce');
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });
});