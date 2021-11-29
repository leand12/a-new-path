import "styles/Content.css";
import eu from 'assets/eu.jpg';

export default function Content() {
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
                <div className="hexagon" style={{ backgroundImage: `url(${eu})` }}></div>
                <div className="hexagon" style={{ backgroundImage: `url(${eu})` }}></div>
            </div>
            <div className="hexa-row">
                <div className="hexagon" style={{ backgroundImage: `url(${eu})` }}></div>
            </div>
        </>
    );
}
