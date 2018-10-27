import { ComponentWrapper, EntityBuilder } from "aframe-typescript-toolkit"

interface Datapoint {
    readonly label: string
    readonly value: number
}

interface DataPointSchema {
    readonly dataPoint: Datapoint
    readonly scaler: number
    readonly position: string
    readonly color: string
}

export class DataPoint extends ComponentWrapper<DataPointSchema> {
    constructor() {
        super("data-point", {})
    }

    init() {
        const { dataPoint, position, color, scaler} = this.data
        const height = dataPoint.value * scaler
        const bar = EntityBuilder.create("a-box", {
            id: dataPoint.label,
            height,         
            color,
            position,
            width:0.7,
        }).attachTo(this.el).toEntity()

        EntityBuilder.create("a-text", {
            value: dataPoint.label,
            position: `0 ${(-height * 0.5) - 0.5} 0.5`, 
            color: "black",
            align: "center",
            width: 4        
        }).attachTo(bar)
    }
}
