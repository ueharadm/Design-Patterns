import { Component } from "../UIFramework";



export class SquareButton implements Component {
    public render(): string {
        const squareButton = '<button >Square</button>';
        console.log(squareButton);
        return squareButton;
    }
}
