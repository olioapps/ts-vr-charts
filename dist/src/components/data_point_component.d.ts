import { ComponentWrapper } from "aframe-typescript-toolkit";
interface Datapoint {
    readonly label: string;
    readonly value: number;
}
interface DataPointSchema {
    readonly dataPoint: Datapoint;
    readonly scaler: number;
    readonly position: string;
    readonly color: string;
}
export declare class DataPoint extends ComponentWrapper<DataPointSchema> {
    constructor();
    init(): void;
    tick(): void;
}
export {};
