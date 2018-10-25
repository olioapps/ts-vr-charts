import { ComponentWrapper, EntityBuilder } from "aframe-typescript-toolkit"

export type Direction = "X" | "Y"
interface AxisSchema {
    readonly values: ReadonlyArray<string>
    readonly direction: Direction
}

export class Axis extends ComponentWrapper<AxisSchema> {
    constructor() {
        super("axis", {})
    }

    init() {
        const { values} = this.data
        values.map((value, i) => {
            EntityBuilder.create("a-text", {
                value,
                position: `0 ${i} 0`, 
                color: "black",
                align: "center",
                height: 3        
            }).attachTo(this.el)
        })
    }

    tick() {
        
    }
}
