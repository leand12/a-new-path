import "styles/Body.css";
import Presentation from 'components/Presentation';
import Sections from 'components/Sections';
import logo from 'assets/logo.webp';
import bg from 'assets/background.webp';

export default function Body() {
    return (
        <>
            <div className="Body-triangle top">
                <div className="clip" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}></div>
            </div>
            <div id="Body" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}>
                <div className="Body-logo">
                    <img src={logo} />
                </div>

                <div className="Body-content pt-5 pb-5">
                    <div>
                        <h1 className="py-5 pt-md-0">Quem somos?</h1>
                        <p>A <strong>Lista P</strong> apresenta-se como candidata à coordenação do
                            NEI para o próximo mandato, com a finalidade de proporcionar
                            aos estudantes um mandato repleto de atividades que
                            aproximem e capacitem os <strong>alunos de EI</strong>.</p>
                    </div>

                    <div className="social">
                        <a href="#">
                            <div className="social-hexagon-wrapper">
                                <div className="social-hexagon">
                                    <i class="fab fa-facebook"></i>
                                </div>
                            </div>
                        </a>
                        <a href="ListaP_NEI.pdf" download="ListaP_NEI.pdf">
                            <div className="social-hexagon-wrapper">
                                <div className="social-hexagon">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="social-hexagon-wrapper">
                                <div className="social-hexagon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="Body-triangle top white">
                    <div className="clip"></div>
                </div>

                <Presentation />
                <div className="Body-content white">
                    <Sections />
                </div>

                <div className="Body-triangle bottom white">
                    <div className="clip"></div>
                </div>
            </div>
            <div className="Body-triangle bottom" style={{ height: '10vw' }}>
                <div className="clip" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}></div>
            </div>
        </>
    );
}
