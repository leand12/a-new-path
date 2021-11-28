import "styles/Body.css";
import Presentation from 'components/Presentation';
import logo from 'assets/logo.webp';

export default function Body() {
    return (
        <>
            <div className="Body-triangle top"></div>
            <div id="Body">
                <img className="Body-logo" src={logo} />
                <Presentation />

               
            </div>
            <div className="Body-triangle bottom"></div>
        </>
    );
}
