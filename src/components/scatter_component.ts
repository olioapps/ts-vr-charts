import { ComponentWrapper, EntityBuilder } from "aframe-typescript-toolkit"
import { makeSteps } from "../utils/utls";
import { LineDashedMaterial } from "three";

interface ScatterDatapoint {
    readonly x: number
    readonly y: number
  }
  
  interface AxisInfo {
      readonly x: Axis
      readonly y: Axis
  }
  
  interface Axis {
    readonly label: string
  }
  
  export interface ScatterSchema {
    readonly data: ScatterDatapoint[]
    readonly axisInfo: AxisInfo
  }

export class Scatter extends ComponentWrapper<ScatterSchema> {
    constructor() {
        super("ts-scatter", {})
    }
    init() {
        const {data, axisInfo} = this.data

        data.map((point, i) => {
            const dataPoint = point
            const { x, y } = point

            EntityBuilder.create("a-entity", {
                "scatter-point": {
                    dataPoint,
                    color: "red",
                    position: `${x / 2} ${y / 100} 0`,
                },
            }).attachTo(this.el)
        })

        
        const yValues: ReadonlyArray<string> = makeSteps(this.data.data.map(d => d.y))
        EntityBuilder.create("a-entity", {
            "axis": {
                values: yValues,
                direction: "Y",
            },
        }).attachTo(this.el)

        const xValues: ReadonlyArray<string> = makeSteps(this.data.data.map(d => d.x))
        EntityBuilder.create("a-entity", {
            "axis": {
                values: xValues,
                direction: "X",
            },
        }).attachTo(this.el)

        EntityBuilder.create("a-plane", {
            material: "color: white; opacity: 0.5",
            height: 20,
            width: 20,
            position: "6 2 -2",
            rotation: "0 0 0"
        }).attachTo(this.el)

        EntityBuilder.create("a-text", {
            value: this.data.axisInfo.x.label,
            color: "black",
            position: `${2} -1.5 0`, 
            width: 20 
        }).attachTo(this.el)

        EntityBuilder.create("a-text", {
            value: this.data.axisInfo.y.label,
            color: "black",
            position: `-2 ${2} 0`, 
            width: 20,
            rotation: "0 0 90"
        }).attachTo(this.el)
    }
}