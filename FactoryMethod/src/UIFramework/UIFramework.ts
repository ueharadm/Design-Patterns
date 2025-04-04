
/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
export interface Component {
    render(): string;
}

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
export abstract class UIFramework {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract createButton(): Component;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public render(): string {
        // Call the factory method to create a Product object.
        const themedButton = this.createButton();
        // Now, use the product.
        return themedButton.render();
    }
}

