import InventoryPage from '../../pages/InventoryPage';
import LoginPage from '../../pages/LoginPage';

describe('Pagina de Inventario', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    });

    it('Debiera mostrar la cantidad correcta de artículos en el inventario', () => {
        InventoryPage.elements.inventoryItems().should('have.length', 6);
    });

    it('Debiera agregar un artículo al carrito', () => {
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.elements.cartBadge().should('contain', '1');
    });

    it('Debiera eliminar un artículo del carrito', () => {
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.removeItemFromCart('Sauce Labs Backpack');
        InventoryPage.elements.cartBadge().should('not.exist');
    });

    it('Debiera agregar múltiples artículos al carrito', () => {
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.addItemToCart('Sauce Labs Bike Light');
        InventoryPage.elements.cartBadge().should('contain', '2');
    });

    // Test will fail, two items are added and it will expect 3
    it('Debiera agregar múltiples artículos al carrito (incorrecto)', () => {
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.addItemToCart('Sauce Labs Bike Light');
        InventoryPage.elements.cartBadge().should('contain', '3');
    });

    it('Debiera abrir el carrito de compras', () => {
        InventoryPage.openCart();
        cy.url().should('include', '/cart.html');
    });
});