import "styles/Body.css";
import Presentation from 'components/Presentation';
import Content from 'components/Content';
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
                    <Content />  
                </div>

            </div>
            <div className="Body-triangle bottom"></div>
        </>
    );
}
