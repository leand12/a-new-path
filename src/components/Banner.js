import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "styles/Banner.css";
import slogan from 'assets/slogan.webp';


export default function Banner() {
    const svgRef = useRef();

    const width = 1600;
    const height = 700;
    const interp = d3.interpolateNumber(0, 40);

    let svg, floatElems, motionElems;
    let invert = true;

    function motionAnimation(event) {
        const coords = d3.pointer(event);

        motionElems.transition()
            .ease(d3.easeLinear)
            .attr("transform", function () {
                const e = d3.select(this);
                const x = interp(coords[0] / 1600 / parseFloat(e.attr("data-scale")));
                if (e.classed("inverse"))
                    return `translate(${-x}, 0)`;
                return `translate(${x}, 0)`;
            })
    }

    function floatAnimation() {
        invert = !invert;
        floatElems.transition()
            .duration(3000)
            .ease(d3.easeSinInOut)
            .attr("transform", function () {
                const e = d3.select(this);
                const y = e.classed("inverse") ? -40 : 40;
                if (invert)
                    return "translate(0, 0)";
                return `translate(0, ${y})`;
            })
            .on("end", floatAnimation);
    }

    useEffect(() => {
        svg = d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${width} ${height}`);

        floatElems = svg.selectAll(".float");
        motionElems = svg.selectAll(".motion");

        svg.on('mousemove', motionAnimation);
        d3.select(".Banner-slogan").on('mousemove', motionAnimation);
        floatAnimation();
    }, []);

    return (
        <div id="Banner">
            <svg ref={svgRef} className="Banner" preserveAspectRatio="xMidYMid meet" x="0" y="0">
                <defs>
                    <g id="hexa">
                        <polygon points="19.9,69 0,34.5 19.9,0 59.7,0 79.6,34.5 59.7,69" opacity="0.3" />
                    </g>
                    <g id="tri">
                        <polygon points="50 15, 100 100, 0 100" opacity="0.3" />
                    </g>
                </defs>

                <g transform="translate(0, 20)">
                    <g className="motion inverse" data-scale="0.75">
                        <g className="float inverse">
                            <use href="#tri" fill="transparent" transform="translate(150, 80) rotate(-17) scale(0.75)"
                                strokeWidth="5.2" stroke="#fff" />
                        </g>
                    </g>

                    <g className="motion" data-scale="1.5">
                        <g className="float">
                            <use href="#hexa" fill="#fff" transform="translate(-50, 400) rotate(9) scale(1.5)" />
                        </g>
                    </g>

                    <g className="motion" data-scale="0.4">
                        <g className="float inverse">
                            <use href="#hexa" fill="#fff" transform="translate(30, 220) rotate(80) scale(0.4)" />
                        </g>
                    </g>

                    <g className="motion inverse" data-scale="0.25">
                        <g className="float">
                            <use href="#tri" fill="#fff" transform="translate(250, 300) rotate(74) scale(0.25)" />
                        </g>
                    </g>
                </g>

                <g transform="translate(1300, 20)">
                    <g className="motion" data-scale="0.7">
                        <g className="float inverse">
                            <use href="#tri" fill="#fff" transform="translate(150, 350) rotate(-17) scale(0.7)" />
                        </g>
                    </g>

                    <g className="motion" data-scale="0.6">
                        <g className="float inverse">
                            <use href="#hexa" fill="transparent" transform="translate(50, 100) rotate(36) scale(0.6)"
                                strokeWidth="6.6" stroke="#fff" />
                        </g>
                    </g>


                    <g className="motion inverse" data-scale="0.2">
                        <g className="float">
                            <use href="#tri" fill="transparent" transform="translate(250, 200) rotate(36) scale(0.2)"
                                strokeWidth="20" stroke="#fff" />
                        </g>
                    </g>
                </g>
            </svg>
            <div className="Banner-slogan">
                <h1 className="noselect">LISTA P</h1>
                <img src={slogan} />
                <button className="button button-slide" style={{marginTop: 40}}><span>Follow Us On</span></button>
            </div>
        </div>
    )
}
