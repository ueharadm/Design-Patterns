import { UIFramework, Component } from '../UIFramework';
import { SquareButton } from "../products/SquareButton";


export class UIWithSquareButtons extends UIFramework {
    public createButton(): Component {
        return new SquareButton();
    }
}
