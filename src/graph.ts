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
            previousBuilder: null,
        }
        setInterval( () => {
            superagent.get("https://3w8yo67j6.sse.codesandbox.io/")
            .end( (error: {}, response: { text: string }) => {
                const val = response.text
                if (latest.data !== val) {
                    console.log(val)
                    latest.data = val

                    if (!!latest.previousBuilder) {
                        const entity = latest.previousBuilder.toEntity()
                        entity.parentElement.removeChild(entity)
                    }

                    const graphData = JSON.parse(val)
                    const builder = EntityBuilder.create( "a-entity", {
                        "ts-chart": graphData,
                        position: "-2 2.5 -10",
                    })
                    .attachTo()

                    latest.previousBuilder = builder
                }
            })
        }, 2000)


    }
}