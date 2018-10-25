import { ComponentWrapper } from "aframe-typescript-toolkit";
interface Datapoint {
    readonly label: string;
    readonly value: number;
}
interface AxisInfo {
    readonly x: Axis;
    readonly y: Axis;
}
interface Axis {
    readonly label: string;
}
export interface ChartSchema {
    readonly data: Datapoint[];
    readonly axisInfo: AxisInfo;
}
export declare class Chart extends ComponentWrapper<ChartSchema> {
    constructor();
    init(): void;
    tick(): void;
}
export {};
