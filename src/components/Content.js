import "styles/Content.css";
import eu from 'assets/eu.jpg';
import { useEffect } from "react";
import * as d3 from "d3";

export default function Content() {

    function color(d, i) {
        if (i % 3 == 0)
            return "rgba(0, 94, 124, 0.6)"
        if (i % 3 == 1)
            return "rgba(0, 138, 82, 0.6)"
        return "rgba(0, 118, 106, 0.6)"
    }

    useEffect(() => {
        d3.selectAll('.hexagon h1')
            .style("background-color", color);
        d3.selectAll('.hexagon p')
            .style("background-color", color);
    }, [])

    return (
        <>
            <h2>Equipa</h2>
            <ul>
                <li>Organização de um convívio temático.</li>
                <li>Organização de um jantar de gala.</li>
                <li>Participação no Enterro.</li>
                <li>Organização do Rally das Tascas.</li>
                <li>Exploração da possibilidade de um novo Sunset.</li>
            </ul>
            <div className="hexa-row">
                <div className="hexagon" style={{ backgroundImage: `url(${eu})` }}>
                    <h1>Leandro Silva</h1>
                    <p>1º ano MEI</p>
                </div>
                <div className="hexagon" style={{ backgroundImage: `url(${eu})` }}>
                    <h1>Leandro Silva</h1>
                    <p>1º ano MEI</p>
                </div>
            </div>
            <div className="hexa-row">
                <div className="hexagon" style={{ backgroundImage: `url(${eu})` }}>
                    <h1>Leandro Silva</h1>
                    <p>1º ano MEI</p>
                </div>
            </div>
        </>
    );
}
