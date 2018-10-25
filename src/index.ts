import aframe from "aframe"
import aframeExtras from "aframe-extras"
aframe && aframeExtras

import { Graph } from "./graph"

window.addEventListener("load", () => {
    const graph = new Graph()
    graph.render()
})