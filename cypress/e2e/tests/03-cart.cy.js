import CartPage from '../../pages/CartPage';
import InventoryPage from '../../pages/InventoryPage';
import LoginPage from '../../pages/LoginPage';

describe('Carrito de Compras', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.openCart();
        cy.url().should('include', '/cart.html');
    });

    it('Debiera mostrar el artículo agregado en el carrito', () => {
        CartPage.elements.cartItems().should('have.length', 1);
        CartPage.elements.cartItems().first().should('contain', 'Sauce Labs Backpack');
    });

    it('Debiera eliminar el artículo del carrito', () => {
        CartPage.removeItem('Sauce Labs Backpack');
        CartPage.elements.cartItems().should('have.length', 0);
    });
});