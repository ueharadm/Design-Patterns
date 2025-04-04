import { Component } from "../UIFramework";

/**
 * Concrete Products provide various implementations of the Product interface.
 */


export class CircleButton implements Component {
    public render(): string {
        const circleButton = '<button style="border-radius:50px;height:50px;width:50px" >Circle</button>';
        console.log(circleButton);
        return circleButton;
    }
}
