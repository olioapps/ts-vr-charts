import { ComponentWrapper, EntityBuilder } from "aframe-typescript-toolkit"
import {makeSteps} from "../utils/utls"
interface Datapoint {
    readonly label: string
    readonly value: number
  }
  
  interface AxisInfo {
      readonly x: Axis
      readonly y: Axis
  }
  
  interface Axis {
    readonly label: string
  }
  
  export interface ChartSchema {
    readonly data: Datapoint[]
    readonly axisInfo: AxisInfo
  }

  const toColorMap = (graphData: ChartSchema) => {
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
  
      return graphData.data.reduce( (acc, next, i) => 
         ({
          ...acc,
          [next.label]: colorArray[i]
        }), {})
  }

  const toSteps = (graphData: ChartSchema) => {
    const values= graphData.data.map(data => data.value)
    return makeSteps(values)
  }
export class Chart extends ComponentWrapper<ChartSchema> {
    constructor() {
        super("ts-chart", {})
    }
    init() {
        const colors = toColorMap(this.data)
        const {data, axisInfo} = this.data

        data.map((point, i) => {
            const dataPoint = point
            const x = this.data.data.length/2
    
            EntityBuilder.create("a-entity", {
                "data-point": {
                    dataPoint,
                    scaler: 1,
                    color: colors[point.label],
                    position: `${i + 1} ${dataPoint.value * 0.5} 0`,
                },
            }).attachTo(this.el)
        })
        const values: ReadonlyArray<string> = toSteps(this.data)
        EntityBuilder.create("a-entity", {
            "axis": {
                values,
                direction: "Y",
            },
        }).attachTo(this.el)
        EntityBuilder.create("a-text", {
        value: this.data.axisInfo.x.label,
        color: "black",
        position: `${2} -2 0`, 
        width: 20 
        }).attachTo(this.el)
    }

    tick() {
    }
}