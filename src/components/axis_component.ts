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
        const { values, direction } = this.data
        values.map((value, i) => {

            const position = direction === "X" ? `${i} 0  0` : `0 ${i} 0`
            const dimension = direction === "X" ? "width" : "height"

            const fontSize = 10
            
            EntityBuilder.create("a-text", {
                value,
                position,
                color: "black",
                align: "center",
                width: fontSize,
                height: fontSize        
            }).attachTo(this.el)
        })
    }
 
}
