import "styles/Body.css";
import Presentation from 'components/Presentation';
import Sections from 'components/Sections';
import logo from 'assets/logo.webp';
import bg from 'assets/background.webp';

export default function Body() {
    return (
        <>
            <div className="Body-triangle top" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}></div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}>
                <div className="Body-logo">
                    <img src={logo} />
                </div>


                <div className="Body-content mt-5 mb-5">
                    <div>
                        <h2>dsf</h2>
                        <p>A <strong>Lista P</strong> apresenta-se como candidata à coordenação do
                            NEI para o próximo mandato, com a finalidade de proporcionar
                            aos estudantes um mandato repleto de atividades que
                            aproximem e capacitem os <strong>alunos de EI</strong>.</p>
                    </div>
                </div>

                <div className="Body-triangle top white m-0"></div>

                <Presentation />
                <div className="Body-content white">
                    <Sections />
                </div>

                <div className="Body-triangle bottom white"></div>
            </div>
        </>
    );
}
