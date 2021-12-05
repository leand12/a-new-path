import { useState, useEffect } from "react";
import "styles/Body.css";
import Presentation from 'components/Presentation';
import Sections from 'components/Sections';
import logo from 'assets/logo.webp';
import bg from 'assets/background.webp';

export default function Body() {
    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 900px)');

        setMobile(!mql.matches);
        mql.addEventListener('change', (e) => {
            setMobile(!e.matches);
        });

        return () => {
            mql.addEventListener('change', null);
        };
    },[])

    return (
        <>
            <div className="Body-triangle top">
                <div className="clip" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}></div>
            </div>
            <div id="Body" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}>
                <div className="Body-logo">
                    <img src={logo} alt="Lista P" />
                </div>

                <div className="Body-content pt-5 pb-5">
                    <div className="px-1">
                        <h1 className="py-5 pt-md-0">Quem somos?</h1>
                        <p>A <strong>Lista P</strong> apresenta-se como candidata à coordenação do
                            NEI para o próximo mandato, com a finalidade de proporcionar
                            aos estudantes um mandato repleto de atividades que
                            aproximem e capacitem os <strong>alunos de EI</strong>.</p>
                    </div>

                    <div className="social">
                        <a href="https://www.facebook.com/Lista-P-A-new-Path-102384102296563" 
                            target="_blank" rel="noreferrer"
                        >
                            <div className="social-hexagon-wrapper">
                                <div className="social-hexagon">
                                    <i className="fab fa-facebook"></i>
                                </div>
                            </div>
                        </a>
                        <a href="ListaP_NEI.pdf" download="ListaP_NEI.pdf">
                            <div className="social-hexagon-wrapper">
                                <div className="social-hexagon">
                                    <i className="fas fa-file-pdf"></i>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/lista_p_22/"
                            target="_blank" rel="noreferrer"
                        >
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

                { mobile ? null : <Presentation /> }
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
