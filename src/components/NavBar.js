import App from '../App';
import './styles/NavBar.css';
import './CartWidget';
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <body>
        <div className="container">
            <ul className="menu">
                <Link to={`/`}>
                    <li><a href="#">Inicio</a></li>
                </Link>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <Link to={`/`}>
                    <a className="marca">Benihana</a>
                </Link>
            </ul>
        </div>
        </body>
    );
}
export default App