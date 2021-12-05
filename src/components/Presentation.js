import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "styles/Presentation.css";


export default function Presentation() {
    const svgRef = useRef();

    const width = window.screen.availWidth * .8;
    const height = window.screen.availHeight * .8;

    function moveHexaByScroll() {
        let scrollPos = d3.select("#Presentation").node().getBoundingClientRect().top - 250;
        scrollPos = scrollPos < 0 ? 0 : scrollPos;

        d3.selectAll(".hexas-left use")
            .each(function () {
                const e = d3.select(this);

                const size = parseInt(e.attr("data-size")),
                    maxX = size * 19.9,
                    maxY = size * 34.5;

                e.attr("transform", `translate(${scrollPos * maxX / 500}, ${scrollPos * maxY / 500})`);
            });

        d3.selectAll(".hexas-right use")
            .each(function () {
                const e = d3.select(this);

                const size = parseInt(e.attr("data-size")),
                    maxX = size * 19.9,
                    maxY = size * 34.5;

                e.attr("transform", `translate(${scrollPos * maxX / 500}, ${scrollPos * maxY / 500})`);
            });
    }

    useEffect(() => {
        d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${width} ${height}`);

        d3.select(window)
            .on('scroll.scroller', moveHexaByScroll);

        return () => {
            d3.select(window)
                .on('scroll.scroller', null);
        };
    }, []);

    return (
        <div id="Presentation">
            <svg ref={svgRef} className="Presentation" preserveAspectRatio="xMidYMid meet" x="0" y="0">
                <defs>
                    <g id="hexa-blue">
                        <polygon points="19.9,69 0,34.5 19.9,0 59.7,0 79.6,34.5 59.7,69" fill="#005E7C" />
                    </g>
                    <g id="hexa-green">
                        <polygon points="19.9,69 0,34.5 19.9,0 59.7,0 79.6,34.5 59.7,69" fill="#008A52" />
                    </g>
                    <g id="hexa-pine-green">
                        <polygon points="19.9,69 0,34.5 19.9,0 59.7,0 79.6,34.5 59.7,69" fill="#00766A" />
                    </g>
                    <g id="hexas1">
                        <use href="#hexa-blue" x="0" y="0" />
                        <use href="#hexa-blue" x="19.9" y="34.5" />
                        <use href="#hexa-blue" x="39.8" y="69" />
                        <use href="#hexa-blue" x="59.7" y="103.5" />
                    </g>
                    <g id="hexas2">
                        <use href="#hexa-green" x="0" y="0" />
                        <use href="#hexa-blue" x="39.8" y="69" />
                        <use href="#hexa-blue" x="59.7" y="103.5" />
                        <use href="#hexa-blue" x="79.6" y="138" />
                        <use href="#hexa-blue" x="99.5" y="172.5" />
                    </g>
                    <g id="hexas3">
                        <use href="#hexa-pine-green" x="0" y="0" />
                        <use href="#hexa-pine-green" x="19.9" y="34.5" />
                        <use href="#hexa-pine-green" x="39.8" y="69" />
                        <use href="#hexa-pine-green" x="59.7" y="103.5" />
                        <use href="#hexa-pine-green" x="79.6" y="138" />
                        <use href="#hexa-pine-green" x="99.5" y="172.5" />
                        <use href="#hexa-pine-green" x="119.4" y="207" />
                    </g>
                    <g id="hexas4">
                        <use href="#hexa-green" x="0" y="0" />
                        <use href="#hexa-pine-green" x="39.8" y="69" />
                        <use href="#hexa-pine-green" x="59.7" y="103.5" />
                        <use href="#hexa-pine-green" x="79.6" y="138" />
                        <use href="#hexa-blue" x="119.4" y="207" />
                    </g>

                </defs>

                <g className="hexas-left" transform="translate(179.1,483) scale(-1,-1)">
                    <use href="#hexas1" data-size="4" x="119.4" y="0" />
                    <use href="#hexas2" data-size="6" x="79.6" y="69" />
                    <use href="#hexas3" data-size="8" x="39.8" y="138" />
                    <use href="#hexas4" data-size="10" x="0" y="207" />
                </g>

                <g className="hexas-right" transform={`translate(${width - 179.1},0)`}>
                    <use href="#hexas1" data-size="4" x="119.4" y="0" />
                    <use href="#hexas2" data-size="6" x="79.6" y="69" />
                    <use href="#hexas3" data-size="8" x="39.8" y="138" />
                    <use href="#hexas4" data-size="10" x="0" y="207" />
                </g>
            </svg>
        </div>
    )
}
