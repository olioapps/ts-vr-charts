import { ComponentWrapper } from "aframe-typescript-toolkit";
interface Datapoint {
    readonly x: number;
    readonly y: number;
}
interface DataPointSchema {
    readonly dataPoint: Datapoint;
    readonly scaler: number;
    readonly position: string;
    readonly color: string;
}
export declare class ScatterDataPoint extends ComponentWrapper<DataPointSchema> {
    constructor();
    init(): void;
    tick(): void;
}
export {};
