import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "styles/Presentation.css";


export default function Presentation() {
    const svgRef = useRef();

    const width = 800;
    const height = 600;

    let svg = d3.select(svgRef.current)
        .attr("viewBox", `0 0 ${width} ${height}`);

    useEffect(() => {

    }, []);

    return (
        <div id="presentation">
            <svg ref={svgRef} className="Presentation" preserveAspectRatio="xMidYMid meet" x="0" y="0">
                
            </svg>
        </div>
    )
}
