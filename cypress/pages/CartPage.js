class CartPage {
    elements = {
        cartItems: () => cy.get('.cart_item'),
        checkoutButton: () => cy.get('#checkout'),
        continueShoppingButton: () => cy.get('#continue-shopping'),
        removeButton: (itemName) =>
            cy.contains('.cart_item', itemName).find('button')
    };

    removeItem(itemName) {
        this.elements.removeButton(itemName).click();
    }

    checkout() {
        this.elements.checkoutButton().click();
    }

    continueShopping() {
        this.elements.continueShoppingButton().click();
    }
}

export default new CartPage();