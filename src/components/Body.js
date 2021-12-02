import "styles/Body.css";
import Presentation from 'components/Presentation';
import Sections from 'components/Sections';
import logo from 'assets/logo.webp';

export default function Body() {
    return (
        <>
            <div className="Body-triangle top"></div>
            <div id="Body">
                <div className="Body-logo">
                    <img src={logo} />
                </div>
                <Presentation />
                <div className="Body-content">
                    <div>
                        <h2>dsf</h2>
                        <p>A Lista P apresenta-se como candidata à coordenação do
                        NEI para o próximo mandato, com a finalidade de proporcionar
                        aos estudantes um mandato repleto de atividades que
                        aproximem e capacitem os alunos de EI.</p>
                    </div>
                    <Sections />
                </div>

            </div>
            <div className="Body-triangle bottom"></div>
        </>
    );
}
