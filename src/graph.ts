import { Chart, ChartSchema } from "./components/chart_component";
import { DataPoint } from "./components/data_point_component";
import { EntityBuilder } from "aframe-typescript-toolkit";

import * as superagent from "superagent"
import { Axis } from "./components/axis_component";
import { Scatter } from "./components/scatter_component";
import { ScatterDataPoint } from "./components/scatter_point_component";

const graphData: ChartSchema = {
    data: [
      {
        label: "Apple",
        value: 1,
      },
      {
        label: "Orange",
        value: 5,
      },
      {
        label: "Bannanas",
        value: 2,
      },
      {
        label: "Pineapples",
        value: 10,
      },
      {
        label: "Kiwi",
        value: 3,
      },
    ],
    axisInfo: {
      x: {
        label: "Fruit"
      },
      y: {
        label: "Count"
      }
    }
  }
export class Graph {

    constructor() {
        new Chart().register()
        new DataPoint().register()
        new Scatter().register()
        new ScatterDataPoint().register()
        new Axis().register()
    }

    render() {
        const latest: any = {
            data: "",
            previousBuilder: [],
        }
        setInterval( () => {
            superagent.get("https://3w8yo67j6.sse.codesandbox.io/")
            .end( (error: {}, response: { text: string }) => {
                const val = response.text
                if (latest.data !== val) {
                    console.log(val)
                    latest.data = val

                    latest.previousBuilder.map( (b: EntityBuilder )=> {
                        const entity = b.toEntity()
                        entity.parentElement.removeChild(entity)
                    })

                    const allGraphsData = JSON.parse(val)
                    const { chart, scatter } = allGraphsData

                    const builderChart = EntityBuilder.create( "a-entity", {
                        "ts-chart": chart,
                        position: "-2 2.5 -10",
                    })
                    .attachTo()

                    const builderScatter = EntityBuilder.create( "a-entity", {
                        "ts-scatter": scatter,
                        position: "30 2.5 -7",
                        rotation: "0 -10 0"
                    })
                    .attachTo()

                    latest.previousBuilder = [builderChart, builderScatter]
                }
            })
        }, 2000)


    }
}