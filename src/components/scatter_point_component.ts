import { ComponentWrapper, EntityBuilder } from "aframe-typescript-toolkit"

interface Datapoint {
    readonly x: number
    readonly y: number
}

interface DataPointSchema {
    readonly dataPoint: Datapoint
    readonly scaler: number
    readonly position: string
    readonly color: string
}

export class ScatterDataPoint extends ComponentWrapper<DataPointSchema> {
    constructor() {
        super("scatter-point", {})
    }

    init() {
        const { dataPoint:{x, y}, position, color, scaler} = this.data
        EntityBuilder.create("a-sphere", {
            id: `${x}-${y}`,
            radius: 0.3,         
            color,
            position,
        }).attachTo(this.el).toEntity()

        // EntityBuilder.create("a-text", {
        //     value: dataPoint.label,
        //     position: `0 ${(-height * 0.5) - 0.5} 0.5`, 
        //     color: "black",
        //     align: "center",
        //     width: 4        
        // }).attachTo(bar)
    }
}
