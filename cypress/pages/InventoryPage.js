class InventoryPage {
    elements = {
        inventoryItems: () => cy.get('.inventory_item'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
        cartLink: () => cy.get('.shopping_cart_link'),
        addToCartButton: (itemName) =>
            cy.contains('.inventory_item', itemName).find('button'),
        removeFromCartButton: (itemName) =>
            cy.contains('.inventory_item', itemName).find('button')
    };

    addItemToCart(itemName) {
        this.elements.addToCartButton(itemName).click();
    }

    removeItemFromCart(itemName) {
        this.elements.removeFromCartButton(itemName).click();
    }

    openCart() {
        this.elements.cartLink().click();
    }
}

export default new InventoryPage();