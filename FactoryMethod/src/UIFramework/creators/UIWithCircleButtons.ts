import { UIFramework, Component } from '../UIFramework';
import { CircleButton } from "../products/CircleButton";

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */


export class UIWithCircleButtons extends UIFramework {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createButton(): Component {
        return new CircleButton();
    }
}
