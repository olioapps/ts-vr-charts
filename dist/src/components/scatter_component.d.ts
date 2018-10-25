import { ComponentWrapper } from "aframe-typescript-toolkit";
interface ScatterDatapoint {
    readonly x: number;
    readonly y: number;
}
interface AxisInfo {
    readonly x: Axis;
    readonly y: Axis;
}
interface Axis {
    readonly label: string;
}
export interface ScatterSchema {
    readonly data: ScatterDatapoint[];
    readonly axisInfo: AxisInfo;
}
export declare class Scatter extends ComponentWrapper<ScatterSchema> {
    constructor();
    init(): void;
    tick(): void;
}
export {};
