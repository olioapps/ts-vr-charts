import { ComponentWrapper } from "aframe-typescript-toolkit";
export declare type Direction = "X" | "Y";
interface AxisSchema {
    readonly values: ReadonlyArray<string>;
    readonly direction: Direction;
}
export declare class Axis extends ComponentWrapper<AxisSchema> {
    constructor();
    init(): void;
    tick(): void;
}
export {};
