class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('.error-message-container')
    };

    visit() {
        cy.visit('/');
    }

    enterUsername(username) {
        this.elements.usernameInput().clear().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear().type(password);
    }

    submit() {
        this.elements.loginButton().click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }
}

export default new LoginPage();